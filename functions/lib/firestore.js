"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTrend = exports.gameCount = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
exports.gameCount = functions.firestore
    .document('games/{gameId}')
    .onCreate((snapshot, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = snapshot.data();
    const userRef = db.doc(`users/${data.uid}`);
    const userSnap = yield userRef.get();
    const userData = userSnap.data();
    return userRef.update({
        gameCount: userData.gameCount + 1
    });
}));
exports.userTrend = functions.firestore
    .document('games/{gameId}')
    .onUpdate((snapshot, context) => {
    const before = snapshot.before.data();
    const after = snapshot.after.data();
    let trend;
    if (after.score >= before.score) {
        trend = 'you are improving :)';
    }
    else {
        trend = 'you are on the decline :(';
    }
    const userRef = db.doc(`users/${after.uid}`);
    return userRef.update({
        trend
    });
});
//# sourceMappingURL=firestore.js.map