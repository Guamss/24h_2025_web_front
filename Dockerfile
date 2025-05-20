FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

# Ce docker pue factuellement du cul
# Ne jamais déployer une application sous `ng serve` en production !!!
