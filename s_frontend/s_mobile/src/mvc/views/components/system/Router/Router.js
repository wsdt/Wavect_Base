"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_navigation_1 = require("react-navigation")
var globalConfig = require("../../../../../globalConfiguration/globalConfig")
var RouterNavigationConfigMap_1 = require("./RouterNavigationConfigMap")
var RouterNavigationOptions_1 = require("./RouterNavigationOptions")
/** You can define additional options for our router here */
var routerOptions = {
    defaultNavigationOptions: RouterNavigationOptions_1.defaultNavigationOptions,
    initialRouteName: globalConfig.START_PAGE,
    initialRouteParams: {},
}
/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
var HomeStackNavigator = react_navigation_1.createStackNavigator(RouterNavigationConfigMap_1.routesConfig, routerOptions)
exports.default = HomeStackNavigator
