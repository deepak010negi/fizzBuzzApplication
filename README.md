This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Notes:-
* If time allowed, I would have loved to made the app look better using css.
* The user can't put negative values in the inputs, this info I am showing as a note.
* If the user submit with any input as zero, an error would be shown.
* I have used React, Typescript, Jest. I might have used Formik for forms and Material UI for better Application
  but it would have made the app heavy and increased the build size unnecessarily for a simple app.
* User can either use the arrows in the input fields to set the value or can type it.
* Generally, I make separate folders for each functionality and have tests, actions, reducers, sagas (if using       redux-saga), helpers, etc. But as here the functionality is limited, I have put all the tests in a test folder.
* Usually, I implement small small functionalities and keep committing and pushing them the repo.



