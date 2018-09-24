## How can users get started with contributing to the project? 
  
Anyone can find an issue in the application, the issue is not limited to bugs but also includes UI enhancements, efficient codes or improved structure.  
  
The following procedure must be followed in order to solve an issue.    
  
* Check if the issue has already been reported, if not report the issue on Github.
* Ask one of the mentors to assign it you.  
* You can open an issue and tag it as free if you do not wish to solve it. 
* The issues marked free are open for you to solve, assign the issue to yourself before beginning the work on it. 
* Before you make a Pull request, make sure that there are no linting errors with the files you modified.

## Getting Started

#### Fork the Repository
On GitHub, navigate to the communities Repository.
In the top-right corner of the page, click Fork.

#### Clone the Repository
Now, navigate to the forked repository in your profile.
In the top-right corner of the page, you will find a green button with the text "Clone or download". Click on it.
Copy the link that appears in the popup.

Now, go to your terminal (if you are using a Linux platform) or git bash (if you are using a Windows platform) and execute this command

```
git clone URL
```

Replace URL with the copied url

or you can just,

Go to your terminal and execute this command

```
$ git clone https://github.com/YOUR_USERNAME/communities
```
Replace YOUR_USERNAME with your Github username.

### Installation
Head over to https://nodejs.org/en/ and download the LTS version of nodejs.
Run the following in your terminal to verfiy if node has been correctly installed.
```
$ node -v
$ npm  -v
```
There should be no errors if node was installed correctly.

Then install Angular cli using

```
$ sudo npm install -g angular@cli
```


Install all dependencies in package.json file. This can be done by navigating to the cloned communities directory in the command prompt/terminal/console and running the following commands:

```
$ cd communities
$ npm install
$ ng serve
```
to setup the Angular developmental server.

After the build completes, you can navigate to http://localhost:4200/ in your browser to check out the application. 

And, that's it, you are DONE. You have successfully setup the project.

The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
