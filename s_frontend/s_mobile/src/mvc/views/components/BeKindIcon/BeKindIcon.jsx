"use strict"
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, "__esModule", { value: true })
var React = require("react")
var react_native_elements_1 = require("react-native-elements")
var BeKindIcon = /** @class */ (function(_super) {
  __extends(BeKindIcon, _super)
  function BeKindIcon() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  BeKindIcon.prototype.render = function() {
    return (
      <react_native_elements_1.Image
        source={require("../../../../../assets/img/logo.png")} // Placeholder content for remote uris possible
        style={__assign({}, this.props)}
      />
    )
  }
  return BeKindIcon
})(React.Component)
exports.BeKindIcon = BeKindIcon
