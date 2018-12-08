# BeKind_Playground [![HitCount](http://hits.dwyl.com/wsdt/BeKind_Playground.svg)](http://hits.dwyl.com/wsdt/BeKind_Playground)

## Used external tools 
### Snyk - Dependency security vulnerabilities
We are using [Snyk](https://snyk.io) for automatically scanning for security vulnerabilities. As we have a private repository we cannot add the badge here. Please check for vulnerabilities regularly: [Snyk - Projects](https://app.snyk.io/org/wsdt/projects). 

### Travis - Test suite [![Build Status](https://travis-ci.com/wsdt/BeKind_Playground.svg?token=DRpYu6MjKAo2SePYFzpo&branch=master)](https://travis-ci.com/wsdt/BeKind_Playground)
[Travis](https://travis-ci.com) is used for automatically executing our test cases. See the result above whether all tets succeeded (all microservices are tested). 

## What is it?
Basic first project structure. 

Each superior folder represents a separate service which will be placed into a separate docker image (with n container instances -> Kubernetes in future, for first few releases just one container via cloud scaling) and maybe also a separate physical device. 

Therefore the frontend (react, redux, typescript) will be placed into a separate virtual machine (docker container) which accesses the virtual machine of our backend (node js, typescript) which then accesses our database(s) and other apis which are also placed into a separate vm (docker image). And as mentioned before all docker containers/images are placed if possible/neccessary on separate physical devices to allow for good scaling (but as this starts to be neccessary we should really use Kybernetes [auto-scaling for docker containers etc.] then).

Each folder contains a separate README.md. 

Exemplary technologies used: 
### PARENT
- Husky: Precommit-hook to test, execute tslint and prettier. 

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
- NoSQL/SQL in future. 

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://GitHub.com/wsdt/)
