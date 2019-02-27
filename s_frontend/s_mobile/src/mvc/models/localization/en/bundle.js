"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var errors_1 = require("./errors")
var labels_1 = require("./labels")
var placeholders_1 = require("./placeholders")
/** Bundle can be imported to get the whole language pack. */
var bundle = {
    errors: errors_1.default,
    lbls: labels_1.default,
    placeholders: placeholders_1.default,
}
exports.default = bundle
