// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // API_URL: 'https://movieprojectapi.azurewebsites.net/',
  API_URL: "http://localhost:3000/",
  USER_ID: 1,
  MOVIEDBURL: "https://api.themoviedb.org/3/",
  MOVIEDBAPIKEY: "a489ee60e8b906cfa58b9dd0fa595d25",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
