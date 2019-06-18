"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_navigation_1 = require("react-navigation")
var TabRouter_1 = require("./src/mvc/views/components/system/TabRouter/TabRouter")
/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
// TODO: SafeAreaView to maybe automatically display objects right
// TODO: (e.g. better positioned when router header, kamera etc.)
exports.default = react_navigation_1.createAppContainer(TabRouter_1.default)
