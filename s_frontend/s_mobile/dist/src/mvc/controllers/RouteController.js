"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var LoginScreen_1 = require("../views/pages/LoginScreen");
var ProfileScreen_1 = require("../views/pages/ProfileScreen");
var RegistrationScreen_1 = require("../views/pages/RegistrationScreen");
var defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "#0055ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
var routerOptions = {
    defaultNavigationOptions: defaultNavigationOptions,
    initialRouteName: "ProfileScreen",
    initialRouteParams: {},
};
var routes = {
    LoginScreen: {
        screen: LoginScreen_1.LoginScreen,
        navigationOptions: function () { return ({
            title: "Login",
        }); }
    },
    ProfileScreen: {
        screen: ProfileScreen_1.ProfileScreen,
        navigationOptions: function () { return ({
            title: "Profile",
        }); }
    },
    RegistrationScreen: {
        screen: RegistrationScreen_1.RegistrationScreen,
        navigationOptions: function () { return ({
            title: "Registration"
        }); }
    },
};
var AppNavigator = react_navigation_1.createStackNavigator(routes, routerOptions);
exports.default = AppNavigator;
//# sourceMappingURL=RouteController.js.map