# Component boilerplate project #

[![build status](https://git.roiback.com/webmobile/REPO_URL/badges/master/build.svg)](https://git.roiback.com/webmobile/REPO_URL/builds)

* This boilerplate is intended to be used to bootstrap a new front-end component project.

SonaQube Report:
http://registry.roiback.com:9000/overview?id=roi-component-boilerplate

## Requirements ##

* Node version >= 6.2
* __Access to private npm repo__ (http://registry.roiback.com:4873/). **NOTE**: the .npmrc file contains the access token for the private repo. If this ever changes, you will need to use ```npm login``` in your dev machine to use the private repo.


## How to start a new project ##

The main idea to start a new project is to download the boilerplate code and use it in the new project's repository.

* Download the boilerplate as zip file

* Extract the zip file

* Create a new remote repository in GitLab (use the same name you used for the directory _<NEW_PROJECT_FOLDER>_). *NOTE: it is strongly recommended to use a prefix in the name of private repositories to indicate they are private. In our case we use roi-* 

* In the directory where you extracted the code, init the repository:

```
cd <your-directory>
git init
git remote add origin <repository-origin>
git add .
git commit
git push -u origin master
```

* Remember to add the "sonarqube" user to your project if you want sonarqube to analize this repo.

* Configure GiLab Slack Service on the project with this Webhook ```https://hooks.slack.com/services/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```

* Change the name of the project in ```package.json```, ```.gitlab-ci.yml``` and ```sonar-project.properties```

* Install dependencies

```
npm i
```

* Start the development. This will command will start the development server builds, automatic testing and linting.

```
npm start
```
* Open ```example/index.html``` in a browser.


### Publish the release of a package ###

When working with this repository, please follow the **[DEVELOPMENT GUIDE](https://roiback.atlassian.net/wiki/spaces/WM/pages/78681679/Gu+a+de+Desarrollo+de+Software+de+Web+Mobile+Mobilis)**. 


Release a new version of the package:

```
npm run release:patch
```
or

```
npm run release:minor
```
or

```
npm run release:major
```