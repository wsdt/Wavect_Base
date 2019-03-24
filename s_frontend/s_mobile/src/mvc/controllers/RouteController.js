"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_navigation_1 = require("react-navigation")
var LoginScreen_1 = require("../views/pages/LoginScreen")
var RegistrationScreen_1 = require("../views/pages/RegistrationScreen")
/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
var defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "#0055ee",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
}
/** You can define additional options for our router here */
var routerOptions = {
    defaultNavigationOptions: defaultNavigationOptions,
    initialRouteName: "LoginScreen",
}
/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 */
var routes = {
    LoginScreen: LoginScreen_1.LoginScreen,
    RegistrationScreen: RegistrationScreen_1.RegistrationScreen,
}
/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
var AppNavigator = react_navigation_1.createStackNavigator(
    routes,
    routerOptions
)
exports.default = AppNavigator
