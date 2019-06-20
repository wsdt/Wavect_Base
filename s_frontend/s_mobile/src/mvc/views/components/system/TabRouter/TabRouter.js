"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_navigation_1 = require("react-navigation")
var TabRouterNavigationConfigMap_1 = require("./TabRouterNavigationConfigMap")
var TabRouterNavigationOptions_1 = require("./TabRouterNavigationOptions")
/**
 * This navigator is used by the root component to assign all routes to
 * our app.
 */
var AppNavigator = react_navigation_1.createBottomTabNavigator(
    TabRouterNavigationConfigMap_1.routesConfig,
    TabRouterNavigationOptions_1.routerOptions
)
exports.default = AppNavigator
