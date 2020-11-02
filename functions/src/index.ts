import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

import { app } from './App';


app.listen(3000, function () {
    console.log(`App is listening on port 3000!`);
});

exports.widgets = functions.https.onRequest(app);
