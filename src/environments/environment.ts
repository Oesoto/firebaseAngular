// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCc8JxsmwAyhKIGMewsewdTIhSIBKXdYRg",
    authDomain: "angularlabfirebase.firebaseapp.com",
    databaseURL: "https://angularlabfirebase.firebaseio.com",
    projectId: "angularlabfirebase",
    storageBucket: "angularlabfirebase.appspot.com",
    messagingSenderId: "36065790840"
  }
};
