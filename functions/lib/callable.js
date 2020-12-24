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
exports.sendText = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio_1 = require("twilio");
const credentials = functions.config().twilio;
const client = new twilio_1.Twilio(credentials.sid, credentials.token);
const db = admin.firestore();
exports.sendText = functions.https.onCall((data, context) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = context.auth.uid;
    const userRef = db.doc(`users/${userId}`);
    const userSnap = yield userRef.get();
    const number = userSnap.data().phoneNumber;
    return client.messages.create({
        body: data.message,
        to: number,
        from: '+12345678901' // Your Twilio number
    });
}));
//# sourceMappingURL=callable.js.map