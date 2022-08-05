# Clase 4 - Docker

# Desafía tus límites y sigue tu instinto

## Instrucciones:

Hay 2 aplicaciones en este proyecto:

hello-python es una página web que contiene un formulario; cuando se envía el formulario, hello-python pone en cola el mensaje en una cola de RabbitMQ.

hello-node es una aplicacion que consume la cola RabbitMQ y almacena cualquier mensaje en una base de datos MySQL.

También hay un create_database.sqlscript para ayudarlo a preparar la base de datos MySQL.

Cada aplicación contiene un breve archivo README con más información.

## Problema:

Implemente una solucion para cualquier mensaje ingresado en el formulario hello-python se almacene en una base de datos MySQL mediante hello-node .

Hay algunos errores en el código o inclusive el error podria estar en el Docker-Compose definido en la carpeta deployment y deberá corregirlos para resolver este ejercicio; no debería requerir ningún conocimiento específico de Python o NodeJS para resolver estos problemas.

Si necesita realizar algún cambio para ayudarlo con la depuración (como agregar registros o detectar excepciones), le sugerimos que los conserve para que podamos entender su proceso de pensamiento.

Si tiene algún conocimiento del desarrollo de Python o NodeJS, siéntase libre de implementar o sugerir mejoras simples a las aplicaciones para que estén listas para la producción.

## Soluciones:

Aceptaremos cualquiera tipo de solución

- Un archivo de Docker Compose  

Importante: Crear un .md con instrucciones paso a paso sobre cómo implementar su solución. Siéntase libre de incluir también un breve párrafo 

## Expectativas

A la hora de evaluar este desafio, tendremos en cuenta los siguientes puntos:

- Si la solución funciona o no
- Qué fácil es implementar la solución
- Cuán resistente es (por ejemplo, si la base de datos tarda unos segundos más en iniciarse de lo normal, ¿el sistema deja de funcionar y nunca se recupera?)
- Suponga que un desarrollador junior (que tiene acceso a las distribuciones de Linux y una cuenta de AWS) intentará ejecutar su solución. ¿Sería capaz de instalar todos los requisitos y ejecutarlo fácilmente? ¿Sería capaz de comprobar que funciona? Si surgiera algún problema (p. ej., falta un paquete), ¿sería capaz de identificarlo y solucionarlo?

No esperamos una solución de nivel productivo, pero esperamos que demuestre que podría implementar un sistema distribuido en producción con suficientes herramientas y tiempo.


### Tips

Pueden seguir esta documentación de referencia https://docs.docker.com/compose/startup-order/


¡Eso es todo!

Sin miedo al exito