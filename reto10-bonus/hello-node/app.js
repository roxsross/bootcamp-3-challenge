#!/usr/bin/env node
var amqp = require("amqplib/callback_api");
var mysql = require("mysql");

var RABBITMQ_HOST = process.env.RABBITMQ_HOST || "localhost";
var RABBITMQ_PORT = process.env.RABBITMQ_PORT || 5672;
var RABBITMQ_QUEUE = process.env.RABBITMQ_QUEUE || "hello";

var db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB || "hello"
});

console.log(
  "Connecting to RabbitMQ at %s port %s...",
  RABBITMQ_HOST,
  RABBITMQ_PORT
);


var url = "amqp://" + RABBITMQ_HOST +":"+ RABBITMQ_PORT;
amqp.connect(url, function(err, conn) {
  // this will fail if the queue is still not ready to accept consumers!
  conn.createChannel(
    function(err, ch) {
      if (err) throw err;
      console.log("Connected to RabbitMQ at %s", url);
      ch.assertQueue(RABBITMQ_QUEUE, { durable: false });
      console.log("Consuming queue: %s", RABBITMQ_QUEUE);
      ch.consume(RABBITMQ_QUEUE, function(msg) {
        console.log("Received message: %s", msg);
        db.query(
          "INSERT INTO Messages SET ?",
          { message: msg.content.toString() },
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
      });
    },
    { noAck: true }
  );
});
