# Clase 4 - Docker

## Ejercicio - Inicial 

Crear un contenedor a partir de la imagen nginx , el contenedor se debe llamar servidor_web y se debe acceder a él utilizando el puerto 8181 del ordenador donde
tengas instalado docker.

`$ docker run -d --name servidor_web -p 8181:80 nginx `

`$ docker ps`

`$ docker images`

`$ docker stop servidor_web`

`$ docker ps`

`$ docker rm servidor_web`

`$ docker ps -a`

1. Pantallazo donde se vea la creación del contenedor y podamos comprobar que el contenedor está funcionando.

2. Pantallazo donde se vea el acceso al servidor web utilizando un navegador web (recuerda que tienes que acceder a la ip del ordenador donde tengas instalado
docker)

3. Pantallazo donde se vean las imágenes que tienes en tu registro local.

4. Pantallazo donde se vea cómo se elimina el contenedor (recuerda que antes debe
estar parado el contenedor).

### Entregable:

- Armar un script en Bash con todos los pasos para crear el contenedor

- Armar una solucion.md y usando Markdown y agregar las images de la solución:

- Documentacion [Markdown](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
