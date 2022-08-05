FROM python:3.11.0a6-slim-buster
RUN pip install flask
RUN pip install pika
COPY app.py /home/myapp/
EXPOSE 8080
CMD python3 /home/myapp/app.py
