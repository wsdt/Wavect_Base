"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var LoginScreen_1 = require("../views/pages/LoginScreen");
/** You can define additional options for our router here */
var routerOptions = {
    initialRouteName: "LoginScreen",
};
/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 */
var routes = {
    LoginScreen: LoginScreen_1.LoginScreen,
};
/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
var AppNavigator = react_navigation_1.createStackNavigator(routes, routerOptions);
exports.default = AppNavigator;
