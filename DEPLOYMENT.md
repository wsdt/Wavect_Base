# BeKind_Playground Deployment

**Notice:** This manual was tested on Unix machines only. Be aware that Docker + Non-Unix environment can be an odd constellation.

## Requirements:
* Docker + docker-compose (already installed on windows/mac). Please always use the latest, stable version.
* SSH client
* SSH public key access to dev.wavect.io

## Step 1 build&push (local developer machine):
If you last build is old. --no-cache --pull ensures that the latest Node version is pulled from repository and no docker cache is used for the build process.
`docker-compose -f docker-compose.staging_new.yml build --no-cache --pull`

If you build the image and you have only small code changes, use:
`docker-compose -f docker-compose.staging_new.yml build`

After the build process. Push the docker image(s) to your gitlab repository:
`docker-compose -f docker-compose.staging_new.yml push`

## Step 2 update services (Remove server):
Login via ssh + ssh key on the remote server:
`ssh root@dev.wavect.io`

Change current user to dev:
`su - dev`

Change the current directory to 'BeKind_Playground':
`BeKind_Playground`

Pull the latest docker images:
`docker-compose -f docker-compose.staging_new.yml pull`

Update deployment via docker stack:
`docker stack deploy -c docker-compose.staging_new.yml  wavect --with-registry-auth`

## Step 3 run malicious commands on mongodb, optional (Remove server):
Figure out current mongodb container ID via:
`docker ps`

Bash intro container (Please replace $CONTAINER-ID with the real container ID!):
`docker exec -it $CONTAINER-ID /bin/bash`

Exit with `exit` the container bash session

## Step 4 check service health, optional (Remove server):
`docker ps`

`docker stack ls`

`docker stack services wavect`

`docker service ls`

 print log files (backend, last 10 minutes, with timestamp, floating):
`docker service logs wavect_backend_core  -f -t --since 10m`

print log files (mongodb, last 10 minutes, with timestamp, floating):
`docker service logs wavect_database  -f -t --since 10m`

Cancel with ctr+c

Exit ssh with:
`exit` (dev user scope) and `exit` (root session)

## Step 5 restarting a single service
`docker service update wavect_backend_core --force`