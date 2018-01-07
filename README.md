# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Layout

I've based the project structure on a [Feature Layout](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

```
/src
  /scenes
    /Home
      /index.js
      /static
        /logo.svg
  /services
    /api.js
```

## Start Developing

To get started developing right away:

* Install and start the API server
  * `cd api-server`
  * `npm install`
  * `node server`
* In another terminal window, use Create React App to scaffold out the front-end
  * `create-react-app frontend`
  * `cd frontend`
  * `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
