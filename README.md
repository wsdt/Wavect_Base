# BeKind_Playground [![Build Status](https://travis-ci.com/wsdt/BeKind_Playground.svg?token=DRpYu6MjKAo2SePYFzpo&branch=master)](https://travis-ci.com/wsdt/BeKind_Playground) [![Known Vulnerabilities](https://snyk.io/test/github/wsdt/BeKind_Playground/badge.svg)](https://snyk.io/test/github/wsdt/BeKind_Playground)

Basic first project structure. 

Each superior folder represents a separate service which will be placed into a separate docker image (with n container instances -> Kubernetes in future, for first few releases just one container via cloud scaling) and maybe also a separate physical device. 

Therefore the frontend (react, redux, typescript) will be placed into a separate virtual machine (docker container) which accesses the virtual machine of our backend (node js, typescript) which then accesses our database(s) and other apis which are also placed into a separate vm (docker image). And as mentioned before all docker containers/images are placed if possible/neccessary on separate physical devices to allow for good scaling (but as this starts to be neccessary we should really use Kybernetes [auto-scaling for docker containers etc.] then).

Each folder contains a separate README.md. 

Exemplare technologies used: 
## Backend
- Node.JS
- Typescript
- Nodemon

## Frontend
- Typescript
- React.JS
- (in future Redux when we are familiar with react)
- SCSS

## Database
- NoSQL/SQL in future. 
