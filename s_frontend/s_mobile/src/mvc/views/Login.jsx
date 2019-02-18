"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var React = require("react");
var react_native_1 = require("react-native");
// @ts-ignore
var styles = require("../../scss/base.scss");
StyleSheet.
;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function () {
            console.log("LOGGING IN.");
        };
        return _this;
    }
    Login.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={styles.container}>
                <formik_1.Formik initialValues={{ email: "", password: "" }} onSubmit={function () { return console.log("Login request sent."); }}>
                    {function (_a) {
            var values = _a.values, handleChange = _a.handleChange;
            return (<React.Fragment>
                            <react_native_1.TextInput value={values.email} onChangeText={handleChange("email")} placeholder="E-Mail"/>
                            <react_native_1.TextInput value={values.password} onChangeText={handleChange("password")} placeholder="Password" secureTextEntry={true}/>
                            <react_native_1.Text>{JSON.stringify(values)}</react_native_1.Text>
                            <react_native_1.Button title="Log In" onPress={_this.handleSubmit}/>
                        </React.Fragment>);
        }}
                </formik_1.Formik>
            </react_native_1.View>);
    };
    return Login;
}(React.Component));
exports.default = Login;
