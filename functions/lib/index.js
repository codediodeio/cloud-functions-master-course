"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
exports.basicHTTP = http_1.basicHTTP;
exports.api = http_1.api;
var auth_1 = require("./auth");
exports.createUserRecord = auth_1.createUserRecord;
var firestore_1 = require("./firestore");
exports.gameCount = firestore_1.gameCount;
exports.userTrend = firestore_1.userTrend;
var storage_1 = require("./storage");
exports.resizeAvatar = storage_1.resizeAvatar;
//# sourceMappingURL=index.js.map