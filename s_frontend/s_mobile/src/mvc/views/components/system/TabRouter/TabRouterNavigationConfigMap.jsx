"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var _a
var react_native_elements_1 = require("react-native-elements")
var HomeScreen_1 = require("../../../pages/HomeScreen/HomeScreen")
var SettingsScreen_1 = require("../../../pages/SettingsScreen/SettingsScreen")
var TabRoutes_1 = require("./TabRoutes")
/**
 * Add here your routes as key-value pairs (if key == value, you can
 * use the shorthand by just writing the value).
 *
 * Keys are variables to avoid all sort of typing errors (aboves object should be used).
 */
exports.routesConfig =
    ((_a = {}),
    (_a[TabRoutes_1.tabRoutes.HomeScreen] = {
        screen: HomeScreen_1.HomeScreen,
        navigationOptions: {
            title: "Challenge",
            tabBarIcon: <react_native_elements_1.Icon name="bell" type="font-awesome" />,
        },
    }),
    (_a[TabRoutes_1.tabRoutes.SettingsScreen] = {
        screen: SettingsScreen_1.SettingsScreen,
        navigationOptions: {
            title: "Settings",
            tabBarIcon: <react_native_elements_1.Icon name="settings" type="font-awesome" />,
        },
    }),
    _a)
