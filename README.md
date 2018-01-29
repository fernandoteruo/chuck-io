# ChuckNorris IO testing app
This small project is a test only, it requests categories and random jokes inside a category on https://api.chucknorris.io/

## Technology stack and dependencies
- ReactJs
- Redux
- Less
- Npm
- Gulp
- create-react-app dependencies

See the file package.json for detailed dependencies, dev dependencies and versions.

## Project organisation and structure
<pre>
    | -- __tests__
    | -- config
    | -- public
    | -- src
        | -- actions | redux actions
        | -- components | components
        | -- containers | high order components
        | -- reducers | redux reducers
        | -- styles | compiled css and less files
        | -- utils | Api base requests
</pre>

## Project Running
1. Install dependencies (npm install)
2. Run the project with the following command: gulp start --env {param}, where {param}=dev or prod (in the case i could have different api urls)

## Project Unit Testing
1. Install dependencies
2. Run npm test, it should run all tests in directory

## Deploy
1. Install dependencies
2. Run npm run-script build
3. It will generate a directory (build), you must use this directory and files on your server
