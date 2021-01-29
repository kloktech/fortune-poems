# FortunePoems

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Built with following command
`ng new fortune-poems --routing`

new project setup modules
```
# Enable gesture for site
npm install --save hammerjs

# Install flexible layout module
npm install @angular/flex-layout@latest --save

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

### Production
Used `ng add angular-cli-ghpages` to add function to publish to github pages, branch ghpages and run
`ng deploy --cname fortune-poems.bwnc.org` to deploy to github page

Make sure to enable "Enforce HTTPS" for better security.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
