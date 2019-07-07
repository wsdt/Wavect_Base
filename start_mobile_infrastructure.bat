@echo off
echo # Starting docker-daemon..
docker-machine start && docker-machine env
cd ./s_backend/s_b_core/
echo. && echo # Building backend..
start cmd.exe /c yarn start build
cd ../..
echo. && start cmd /c docker-compose up --build
cd ./s_frontend/s_f_mobile/
start cmd.exe /c yarn start
start cmd.exe /c yarn start android
echo # Started all services

REM NGROK.exe should be executed separately as you have to adapt the link in frontend