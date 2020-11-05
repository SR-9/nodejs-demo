import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

import { app } from './App';


app.listen(3000, function () {
    console.log(`App is listening on port 3000!`);
});

exports.widgets = functions.https.onRequest(app);
