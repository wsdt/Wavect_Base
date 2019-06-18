"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var GrayColorImg_1 = require("../GrayColorImg/GrayColorImg");
var CompanyLogo_css_1 = require("./CompanyLogo.css");
exports.CompanyLogo = function (props) {
    return (<react_native_1.TouchableOpacity style={CompanyLogo_css_1.default.topLeftCompany}>
            <GrayColorImg_1.GrayColorImg isGrayscale={props.isGrayscale}>
                <react_native_1.Image source={props.companyLogoUri} style={CompanyLogo_css_1.default.image}/>
            </GrayColorImg_1.GrayColorImg>
        </react_native_1.TouchableOpacity>);
};
