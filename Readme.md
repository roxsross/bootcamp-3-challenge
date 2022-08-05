# Clase 4 - Introducción de Docker 

## Docker

La idea detrás de Docker es crear contenedores ligeros y portables para las aplicaciones software que puedan ejecutarse en cualquier máquina con Docker instalado, independientemente del sistema operativo que la máquina tenga por debajo, facilitando así también los despliegues.

## Docker Volumes

Los volúmenes son como discos duros virtuales administrados por Docker. Docker maneja el almacenamiento en disco (generalmente en /var/lib/docker/volumes/) y asígneles un nombre único y fácil de recordar en lugar de una ruta de directorio. Es fácil crearlos y eliminarlos mediante la CLI de Docker.

## Docker network

la parte de networking de Docker está basada en una arquitectura llamada Container Network Model (CNM). Esta está implementada en una librería llamada libnetwork, que forma parte de Docker Engine. Por otro lado, cada SO que soporta Docker Engine tiene un conjunto de drivers que permiten a libnetwork crear la configuración de la red que corresponda en cada sistema operativo por nosotros. 

## Docker Compose 

Es una herramienta para definir y ejecutar aplicaciones dockerizadas, pudiendo manejar múltiples contenedores. Si bien en algunos casos se puede decir que es un orquestador, no es comparable a los orquestadores (como ECS, Kubernetes, etc) ya que si bien puede ejecutar varios servicios distintos, no puede manejar autoscaling, downtime etc.

Utiliza un archivo en lugar de scripts, para configurar los servicios con sus necesidades como ser puertos, variables de entorno, volúmenes entre muchas.

Y que comience el RETO!

### -------------------------------------------------

⌨️ con ❤️ por [roxsross](https://github.com/roxsross) 😊

No olvides revisar mi blog [roxsross](https://blog.295devops.com) 😊

y mi linktree [roxsross](https://roxs.295devops.com) 😊

"No se trata de cambiar el mundo, creo que creas un cambio pequeño, pero que te importe estás cambiando las cosas".