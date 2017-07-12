# create-jqwidgets-angular-app
[create-jqwidgets-angular-app](https://github.com/jqwidgets/create-jqwidgets-angular-app)
Please refer to its documentation:
  - [Getting Started](https://github.com/jqwidgets/create-jqwidgets-angular-app/blob/master/README.md#getting-started) 
  - [jQWidgets Angular Documentation](http://www.jqwidgets.com/angular-components-documentation/)

This project is based on [Angular CLI](https://cli.angular.io/).

## Quick Overview
```sh
npm i -g create-jqwidgets-angular-app 

create-jqwidgets-angular-app my-app
cd my-app
npm start
```

Then open [http://localhost:4200/](http://localhost:4200/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-jqwidgets-angular-app
```

**You’ll need to have Node on your machine**.

### Creating an App

```sh
create-jqwidgets-angular-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── e2e
├── node_modules
├── src
├── .angular-cli.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── tsconfig.json
├── tslint.json
```

Subfolders are not shown in order to keep it short.<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm start`
Builds the app in development mode and starts a web server.
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.
The page will reload if you make edits.

### `npm run build`
Builds the app in production mode and stores it in the `dist/` directory.
