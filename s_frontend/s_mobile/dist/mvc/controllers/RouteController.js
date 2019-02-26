"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var LoginScreen_1 = require("../views/pages/LoginScreen");
var defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "#0055ee"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
var routerOptions = {
    defaultNavigationOptions: defaultNavigationOptions,
    initialRouteName: "LoginScreen",
};
var routes = {
    LoginScreen: LoginScreen_1.LoginScreen,
};
var AppNavigator = react_navigation_1.createStackNavigator(routes, routerOptions);
exports.default = AppNavigator;
//# sourceMappingURL=RouteController.js.map