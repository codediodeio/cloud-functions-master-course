"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.basicHTTP = void 0;
const functions = require("firebase-functions");
// Express
const express = require("express");
const cors = require("cors");
// Most basic HTTP Funtion
exports.basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;
    if (!name) {
        response.status(400).send('ERROR you must supply a name :(');
    }
    response.send(`hello ${name}`);
});
// Custom Middleware
const auth = (request, response, next) => {
    if (!request.header.authorization) {
        response.status(400).send('unauthorized');
    }
    next();
};
// Multi Route ExpressJS HTTP Function
const app = express();
app.use(cors({ origin: true }));
app.use(auth);
app.get('/cat', (request, response) => {
    response.send('CAT');
});
app.get('/dog', (request, response) => {
    response.send('DOG');
});
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=http.js.map