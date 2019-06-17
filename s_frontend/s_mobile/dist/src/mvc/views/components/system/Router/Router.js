"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var globalConfig = require("../../../../../globalConfiguration/globalConfig");
var RouterNavigationConfigMap_1 = require("./RouterNavigationConfigMap");
var RouterNavigationOptions_1 = require("./RouterNavigationOptions");
var routerOptions = {
    defaultNavigationOptions: RouterNavigationOptions_1.defaultNavigationOptions,
    initialRouteName: globalConfig.START_PAGE,
    initialRouteParams: {},
};
var AppNavigator = react_navigation_1.createStackNavigator(RouterNavigationConfigMap_1.routesConfig, routerOptions);
exports.default = AppNavigator;
//# sourceMappingURL=Router.js.map