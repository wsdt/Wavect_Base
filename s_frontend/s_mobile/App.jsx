"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var RouteController_1 = require("./src/mvc/controllers/RouteController");
/**
 * Just export the router component in an app container, to
 * make routes available to all pages.
 */
exports.default = react_navigation_1.createAppContainer(
  RouteController_1.default
);
