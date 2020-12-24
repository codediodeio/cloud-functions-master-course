"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRecord = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
exports.createUserRecord = functions.auth
    .user()
    .onCreate((user, context) => {
    const userRef = db.doc(`users/${user.uid}`);
    return userRef.set({
        name: user.displayName,
        createdAt: context.timestamp,
        nickname: 'bubba'
    });
});
//# sourceMappingURL=auth.js.map