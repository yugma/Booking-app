// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDTWXv0FythtEWtTiZ0q-ExngNjc0VPOUw",
    authDomain: "booking-app-80279.firebaseapp.com",
    databaseURL: "https://booking-app-80279.firebaseio.com",
    projectId: "booking-app-80279",
    storageBucket: "booking-app-80279.appspot.com",
    messagingSenderId: "173383227800"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
