"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_elements_1 = require("react-native-elements");
var globalConfig = require("../../../../../globalConfiguration/globalConfig");
/**
 * You can provide custom navigationoptions for your nav bar for each page.
 * But if you don't provide any, then these default options are set.
 */
/** You can define additional options for our router here */
exports.routerOptions = {
    initialRouteName: globalConfig.START_PAGE,
    backBehavior: "history",
    tabBarOptions: {
        activeTintColor: "#000",
        activeBackgroundColor: "#ccc",
        inactiveTintColor: "#888",
        labelStyle: {
            fontSize: 12,
        },
    },
    defaultNavigationOptions: {
        tabBarIcon: <react_native_elements_1.Icon name="exclamation-triangle" type="font-awesome"/>,
    },
};
