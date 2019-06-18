"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var HomeScreen_1 = require("../../../pages/HomeScreen/HomeScreen");
var Routes_1 = require("./Routes");
/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
exports.routesConfig = (_a = {},
    _a[Routes_1.routes.HomeScreen] = {
        // key of route configuration
        navigationOptions: function () { return ({
            title: "Challenge",
        }); },
        screen: HomeScreen_1.HomeScreen,
    },
    _a);
