//imports
const functions = require('firebase-functions');

const app = require('express')();
const { getAllScreams, postScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');
const FBAuth = require('./util/fbAuth')

//Users routes
app.post('/signup', signup);
app.post('/login', login)


//Screams Routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postScream);



exports.api = functions.https.onRequest(app);