Download nodeJS and npm then angular cli, using npm install -g @angular/cli

# SimplePaymentForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

# To run express server for rest api
npm run serverCards

e.g. http://localhost:3000/rest/1.0/appConfig

## Development server

npm install --save-dev node-sass if node-sass was not in package.json

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#mockData.json
on root, run command, json-server mockData.json, runs on localhost:3000 using  json-server 

#json-server --watch mockData.json to reload automatically the browser when the JSON file is #modified
#Installation npm install -g json-server
if module exists and unable to pick it up, delete node_modules folder and run npm install 

protactor set-up
npm install -g protractor

npm i webdriver-manager -g --force

webdriver-manager status

webdriver-manager --proxy=http://<username>:<password>@XXx.XX.XXX.XX:XXXXX update
