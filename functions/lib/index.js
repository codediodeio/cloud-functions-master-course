"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
Object.defineProperty(exports, "basicHTTP", { enumerable: true, get: function () { return http_1.basicHTTP; } });
Object.defineProperty(exports, "api", { enumerable: true, get: function () { return http_1.api; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "createUserRecord", { enumerable: true, get: function () { return auth_1.createUserRecord; } });
var firestore_1 = require("./firestore");
Object.defineProperty(exports, "gameCount", { enumerable: true, get: function () { return firestore_1.gameCount; } });
Object.defineProperty(exports, "userTrend", { enumerable: true, get: function () { return firestore_1.userTrend; } });
var storage_1 = require("./storage");
Object.defineProperty(exports, "resizeAvatar", { enumerable: true, get: function () { return storage_1.resizeAvatar; } });
//# sourceMappingURL=index.js.map