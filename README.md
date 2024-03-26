This repository is for Part 12 of Full Stack Open (FSO), "Containers" - https://fullstackopen.com/en/part12

This part of FSO focuses on using Docker to containerize a development environment. The structure of this repository is based on the repository linked here: https://github.com/fullstack-hy2020/part12-containers-applications

Some of the exercises involve generating script output, and those are stored as text files in the subfolder /script-answers.

The remainder of the project is a web app for managing to-dos, but the app is not the focus of these exercises. Rather, the relevant files are:
* in /todo-app/ - docker-compose.dev.yml, nginx.dev.conf
* in /todo-app/todo-backend/ - .dockerignore, Dockerfile, dev.Dockerfile, docker-compose.dev.yml, docker-compose.yml, /redis/index.js
* in /todo-app/todo-frontend/ - .dockerignore, Dockerfile, dev.Dockerfile, docker-compose.yml

Exercises in this section cover the use of Docker for containerized development, including configuring Dockerfiles and images, Docker compose, mounting, persisting data, debugging in containers, redis, React in container, using multi-stage builds, doing development inside a container (as opposed to on a local machine), and communications between containers.
