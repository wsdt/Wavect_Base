# BeKind_Playground [![HitCount](http://hits.dwyl.com/wsdt/BeKind_Playground.svg)](http://hits.dwyl.com/wsdt/BeKind_Playground)

## Submodules
We are using submodules. If you clone this repo for the first time you may want to execute 
`git clone --recursive https://github.com/wsdt/Wavect_Base.git`

#### Pulling submodules
use `git submodule foreach "(git checkout master; git pull)&"` to easily pull and update all submodules.

#### pushing submodules
use `git push --recurse-submodules=on-demand` to push submodules

## How to start
Please refer to the ReadMe-Files in the submodules itself. If you don't make any changes to the backend, you can
use the real development api: [api.dev.wavect.io](https://api.dev.wavect.io). In case you want to add new features in the backend 
you need to startup a local instance with Docker. 

### Setup Script for mobile
To keep everything as simple as it can be, you could use a simple startup-script which is located in /start_mobile_infrastructure.sh.
This script starts up your docker-machine (as you might have Docker-Toolbox installed), the backend and even starts the mobile
compilers. Please be aware that this script executes command, which you do not need every time (e.g. docker-machine start). 

In that case we recommend that you make yourself familiar with the commands in the script and always only execute those lines manually
which you actually need (to speed up development). 


## Used external tools 
### Snyk - Dependency security vulnerabilities
We are using [Snyk](https://snyk.io) for automatically scanning for security vulnerabilities. As we have a private repository we cannot add the badge here. Please check for vulnerabilities regularly: [Snyk - Projects](https://app.snyk.io/org/wsdt/projects). 

### Travis - Test suite [![Build Status](https://travis-ci.com/wsdt/BeKind_Playground.svg?token=DRpYu6MjKAo2SePYFzpo&branch=master)](https://travis-ci.com/wsdt/BeKind_Playground)
[Travis](https://travis-ci.com) is used for automatically executing our test cases, prettier, tslint and also building the corresponding Dockerfile. The built images itself are not tested (no container started). See the result above whether all tets succeeded (all services are tested). 

### Husky - Precommit Hook
As we use [Husky](https://github.com/typicode/husky) to sustain a good code quality, there might be valid reasons to skip the precommit hook (e.g. just pushing a readme). 
`git commit -m "msg" --no-verify`

## What is it?
Basic first project structure. 

Each superior folder represents a separate service which will be placed into a separate docker image (with n container instances -> Kubernetes in future, for first few releases just one container via cloud scaling) and maybe also a separate physical device. 

Therefore the frontend (react, redux, typescript) will be placed into a separate virtual machine (docker container) which accesses the virtual machine of our backend (node js, typescript) which then accesses our database(s) and other apis which are also placed into a separate vm (docker image). And as mentioned before all docker containers/images are placed if possible/neccessary on separate physical devices to allow for good scaling (but as this starts to be neccessary we should really use Kybernetes [auto-scaling for docker containers etc.] then).

Each folder contains a separate README.md. 

Exemplary technologies used: 
### PARENT
- [Husky](https://github.com/typicode/husky): Precommit-hook to test, execute tslint and prettier.
- [Nps](https://github.com/kentcdodds/nps): Used to give package.json-scripts an inheritance functionality to provide better maintenance. 

### Backend
- Node.JS
- Nodemon
- TypeScript
- Jest
- Prettier
- Tslint

### Frontend
- React.JS (not using create-react-app anymore)
- (in future Redux when we are familiar with react)
- SCSS
- TypeScript
- Jest
- Webpack
- Prettier
- Tslint

### Database
- NoSQL (currently MongoDb with Mongoose). 

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://GitHub.com/wsdt/)
