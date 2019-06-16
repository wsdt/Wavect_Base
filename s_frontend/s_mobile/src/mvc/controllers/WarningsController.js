"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var react_native_1 = require("react-native")
exports.notImplementedSync = function() {
    console.warn("notImplemented: Not implemented.")
    react_native_1.ToastAndroid.show("Coming soon..", react_native_1.ToastAndroid.SHORT)
    return "Not Implemented"
}
exports.notImplementedAsync = function() {
    return Promise.resolve(exports.notImplementedSync())
}
