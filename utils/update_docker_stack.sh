#!/usr/bin/env bash
cd ./../
git pull;
docker-compose -f docker-compose.staging.yml pull
docker stack deploy -c  docker-compose.staging.yml playgorund --with-registry-auth;