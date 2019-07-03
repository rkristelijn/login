# Express login

Clone this repo or follow the steps below to learn about setting up a Node/express app that enables login, logout and secure routes.

| step          | instruction                                 |
| ------------- | ------------------------------------------- |
| **boilerplating** | These steps will set up an initial project. |
| 0.1 | Install [express-generator](https://www.npmjs.com/package/express-generator) globally `npm install -g express-generator`|
| 0.2 | Create a new project named **login** in a new folder **login** and add pug support (instead of Jade). `express -css=less --view=pug --git login` |
| 0.3 | Install dependencies by executing `npm i` after moving into the directory using `cd login` |
| 0.4 | You will see warnings, depending on how many vulnerabilities are found.<br> `npm notice created a lockfile as package-lock.json. You should commit this file. `<br>`added 118 packages from 174 contributors and audited 247 packages in 10.793s `<br>`found 1 low severity vulnerability run npm audit fix to fix them, or npm audit for details`<br> after running `npm audit` you will see recommendations to fix, you might want to run `npm ls` to see the dependency tree.<br>In this case you can fix it by running `npm i pug@latest`<br><br>After running this no vulnerabilities are reported and we can go ahead and start the app |
| 0.5 | start the app by one of the following commands: <br> 1. `npm start` - *to start app on default port 3000*<br>2. `PORT=8080 npm start` - *to start on port 8080*<br>3. `DEBUG=login:* npm start` - *start with debug information*|

# Sources

1. [original tutorial](http://projectsplaza.com/login-logout-nodejs-express/)
