# The Name Game

## This project is a game that asks you to match peoples names with their picture.

Create-react-app was used as the starting point for the project. The frontend consists of React components, with Redux handling the state of the app.

The app leverages an existing API that serves an array of peoples’ profiles. (API: https://namegame.willowtreeapps.com/api/v1.0/profiles) Some data cleanup is done (see people.js in the /store folder) on the data served by the API.

On each round, the app randomly selects 6 people profiles, displays their pictures and the name of one of them, and asks you to match the name to the correct picture. After five rounds it returns the number of correct guesses.

## Technologies: 
React v17.0.2
React Router
Redux v4.1.2
Axios

## To run the app locally:
npm -i				install dependencies
npm run start			run locally on port 3000
npm run build			bundle project on /build folder

## This project is currently deployed at https://CarlosDahmen.github.io
