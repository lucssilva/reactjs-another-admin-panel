# Admin Panel App
This app suggest the use of Atomic Design for its View using Elements, Components, Widgets, Screens instead of Atom, Molecules, Organism and Templates

## Run the app
Before test the app, don't forget to install necessary package with `npm install`, feel free to perform a `npm audit fix` after

To test the application it's necessary to use two terminals:
1. One to run `npm run fake-server`, after that the frontend can perform requests to the fake-server in port 8080
2. Th other use to run `npm start`, and after that you can test the app

## Tasks
- [ ] Performing requests after login to use access_token saved properly in localStorage;
- [ ] Implemeting refresh token logic after expires;
- [ ] Protecting UsersListScreen to Admin users;
- [ ] Creation of Profile Page, with self exclusion and password rewrite (Perform in 'backend' too);
- [ ] Updating create user flow to add a password
- [ ] Updating create user flow to choose if is a Admin
- [ ] Updating create user flow to add picture or picture url
- [ ] Preveting Admin users to delete other Admin users
- [ ] Updating HeaderWidget to show user picture

## Available Scripts
In the project directory, you can run:
### `npm fake-server`
Runs the fake server.\
Point to [http://localhost:8080](http://localhost:8080) to request resources.
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## References
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project use Bootstrap 5 and so its templates for UI
