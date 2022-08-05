import psycopg2
import os
from flask import Flask
myapp = Flask(__name__)

@myapp.route('/')
def home():
    try:
        connection = psycopg2.connect(dbname=os.getenv('POSTGRES_DB'), user=os.getenv('POSTGRES_USER'), password=os.getenv('POSTGRES_PASSWORD'), host=os.getenv('POSTGRES_HOST'), port=os.getenv('POSTGRES_PORT'))
        cursor = connection.cursor()
        query = "select * from tabla;"

        cursor.execute(query)
        tablas = cursor.fetchall()
        result=""

        for tabla in tablas:
            result+= "id= "+str(tabla[0]) + ",nombre= "+ str(tabla[1]) + ",detalle= "+ str(tabla[2])
        return result

    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)
        return None
    finally:
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")
    return "running"

if __name__ == '__main__':
    myapp.run(host='0.0.0.0')