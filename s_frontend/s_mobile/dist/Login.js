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
exports.__esModule = true;
var formik_1 = require("formik");
var React = require("react");
var react_native_elements_1 = require("react-native-elements");
require("../../scss/base.scss");
require("../../scss/login.scss");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { form: { isLoading: false } };
        _this.handleSubmit = function (values) {
            console.log("LOGGING IN.");
            // TODO: send  values to server
            _this.setState({ form: { isLoading: true } });
            setTimeout(function () {
                _this.setState({ form: { isLoading: false } });
            }, 2000);
        };
        return _this;
    }
    Login.prototype.render = function () {
        var _this = this;
        return (<formik_1.Formik initialValues={{ email: "", password: "" }} onSubmit={function () { return console.log("Login request sent."); }}>
                {function (_a) {
            var values = _a.values, handleChange = _a.handleChange;
            return (<React.Fragment>
                        <react_native_elements_1.Input placeholder="E-Mail" rightIcon={{ type: "feather", name: "mail" }} value={values.email} shake={true} onChangeText={handleChange("email")}/>
                        <react_native_elements_1.Input value={values.password} rightIcon={{ type: "feather", name: "lock" }} onChangeText={handleChange("password")} placeholder="Password" shake={true} secureTextEntry={true}/>

                        <react_native_elements_1.Button icon={<react_native_elements_1.Icon name="explore" size={15} color="white"/>} title="Log In" iconRight onPress={function () { return _this.handleSubmit(values); }} loading={_this.state.form.isLoading}/>
                    </React.Fragment>);
        }}
            </formik_1.Formik>);
    };
    return Login;
}(React.Component));
exports["default"] = Login;
