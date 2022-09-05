#!/bin/sh
read -p "Desea crear un contenedor? (Y/n): " rest1
if [ $rest1 = "y" ] || [ $rest1 = "Y" ] || [ $rest1 = "yes" ] || [ $rest1 = "YES" ] || [ $rest1 = "" ]; then
read -p "Ingresa nombre del contenedor: " name
docker run -d --name $name -p 8181:80 nginx
fi

read -p "Desea listar los contenedores en ejecución? (Y/n): " rest2
if [ $rest2 = "y" ] || [ $rest2 = "Y" ] || [ $rest2 = "yes" ] || [ $rest2 = "YES" ] || [ $rest2 = "" ]; then
sh ./listaContenedores.sh
fi

read -p "Desea listar las imagenes registradas localmente? (Y/n): " rest3
if [ $rest3 = "y" ] || [ $rest3 = "Y" ] || [ $rest3 = "yes" ] || [ $rest3 = "YES" ] || [ $rest3 = "" ]; then
sh ./listaImagenes.sh
fi

read -p "Desea detener el contenedor previamente creado? (Y/n): " rest4
if [ $rest4 = "y" ] || [ $rest4 = "Y" ] || [ $rest4 = "yes" ] || [ $rest4 = "YES" ] || [ $rest4 = "" ]; then
export name
sh ./detenerContendor.sh
fi


#docker ps

#docker rm servidor_web

#docker ps -a