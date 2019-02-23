"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var styleBase = require("../../../scss/base.scss");
var parseScss_1 = require("../../../scss/parseScss");
var BeKindIcon_1 = require("../BeKindIcon/BeKindIcon");
var LoginForm_1 = require("../LoginForm");
var OAuth_1 = require("../OAuth");
exports.Login = function () {
    return <react_native_1.View style={parseScss_1.default(styleBase.page)}>
        <react_native_elements_1.Header leftComponent={<BeKindIcon_1.BeKindIcon width={30} height={30}/>} centerComponent={{ text: "Authentication", style: { color: "#fff" } }} containerStyle={parseScss_1.default(styleBase.header)}/>
        <react_native_1.View style={parseScss_1.default(styleBase.center)}>
            <LoginForm_1.LoginForm />
            <OAuth_1.OAuth />
        </react_native_1.View>
    </react_native_1.View>;
};
//# sourceMappingURL=Login.js.map