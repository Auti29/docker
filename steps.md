##Docker implementation
-Install docker
-create a network -> `docker network create my_network`
-start postgres -> `docker run --network my_network -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
-Build the image -> `docker build --network=host -t my_project`
-Start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network my_network -p 3000:3000 my_project`

##Docker-compose implementation
-Install docker, docker-compose(for windows docker-compose is integrated with docker desktop so no need to install seperately)
-Run `docker compose up` (this will start the compose)
-Stop the compose (including volumes) `docker-compose down --volumes`
