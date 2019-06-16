"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_color_matrix_image_filters_1 = require("react-native-color-matrix-image-filters");
var GlobalStyles_css_1 = require("../../../GlobalStyles.css");
exports.GrayColorImg = function (props) {
    return props.isGrayscale ? <react_native_color_matrix_image_filters_1.Grayscale style={GlobalStyles_css_1.default.fullSize}>{props.children}</react_native_color_matrix_image_filters_1.Grayscale> : <>{props.children}</>;
};
//# sourceMappingURL=GrayColorImg.js.map