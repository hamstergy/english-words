// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebaseConfig: {
		apiKey:
			'AAAAheaOJFk:APA91bFa9Gh1d6JEy1K9h91nARUfP-qwvmT6ccI76Ss4pLn9Q6PZxdQ5NQih-PcKmaAu2f8gdEuukhlKImswnimZ9vlwSib1oPImlYTPDDaZG7HJ6RLxnxhvNestxDjAWPL69EGuS4p1',
		authDomain: 'angular-words.firebaseapp.com',
		databaseURL: 'https://angular-words.firebaseio.com/words',
		projectId: 'angular-words',
		storageBucket: 'angular-words.appspot.com',
		messagingSenderId: '575098725465'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
