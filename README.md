# React Sign In and Sign Up Forms with Firebase Authentication

**What has been done:**

This project was bootstrapped with [Create React App](https://create-react-app.dev/)

Styled components with [Material-UI v5](https://mui.com/)

Basic user sign in and sign up functions with [Firebase](https://firebase.google.com/)

Adding form validation - [Formik + yup](https://formik.org/docs/guides/validation#validationschema)

![hippo](https://i.ibb.co/swDZLXy/ezgif-com-gif-maker.gif)

Handled pages and private routes - [react-router-dom](https://reactrouter.com/web/guides/quick-start)

Custom useAlert and useAuth hooks

## Live demo

Check the live demo here 👉️ [https://1catchman.github.io/](https://1catchman.github.io/)

## Design

Original design based on [OneSignal](https://app.onesignal.com/login) authentication system

## Running

### `npm start`

## Setup

You will need to setup a Firebase account and create a project for authorization to work

Then add in `firebase.ts` file the following config which can be retreived from your Firebase console

```
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  // Add your firebase app's config
});

export const auth = getAuth(app);

export default app;
```

## Contributing

Open for any improvments, re-designs and tests
