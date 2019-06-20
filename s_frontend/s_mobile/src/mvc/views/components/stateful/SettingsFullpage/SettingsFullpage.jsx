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
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
        }
    })()
Object.defineProperty(exports, "__esModule", { value: true })
var react_1 = require("react")
var react_native_elements_1 = require("react-native-elements")
var SettingsFullpage_css_1 = require("./SettingsFullpage.css")
var react_native_1 = require("react-native")
var SettingsFullpage = /** @class */ (function(_super) {
    __extends(SettingsFullpage, _super)
    function SettingsFullpage() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this
        _this.state = {
            isEMailUsageAccepted: false,
            email: "",
            validEmail: false,
            isSaving: false,
        }
        _this.emailValidation = function(email) {
            _this.setState({ email: email, validEmail: SettingsFullpage.EMAIL_REGEX.test(email) })
        }
        _this.save = function() {
            _this.setState({ isSaving: true })
            // TODO: save async
            _this.setState({ isSaving: false })
        }
        _this.isFormSubmittable = function() {
            return _this.state.validEmail && _this.state.isEMailUsageAccepted
        }
        return _this
    }
    SettingsFullpage.prototype.render = function() {
        var _this = this
        var isFormSubmittable = this.isFormSubmittable()
        return (
            <react_native_1.View style={SettingsFullpage_css_1.default.container}>
                <react_native_elements_1.Text style={SettingsFullpage_css_1.default.row}>
                    Deine E-Mail Adresse wird benötigt, um dich bzgl. gewonnenen Rabatten, Gutscheinen oder Produkten/Services zu kontaktieren.
                </react_native_elements_1.Text>

                <react_native_elements_1.Input
                    value={this.state.email}
                    onChangeText={function(text) {
                        return _this.emailValidation(text)
                    }}
                    containerStyle={SettingsFullpage_css_1.default.row}
                    label="E-Mail"
                    placeholder="Deine E-Mail"
                    leftIcon={<react_native_elements_1.Icon name="envelope" type="font-awesome" />}
                    shake={true}
                    errorMessage={this.state.validEmail ? "" : "Bitte gib eine gültige E-Mail an."}
                />

                <react_native_elements_1.CheckBox
                    checked={this.state.isEMailUsageAccepted}
                    containerStyle={SettingsFullpage_css_1.default.row}
                    checkedColor="#000"
                    title="Ich verstehe und akzeptiere, dass meine E-Mail-Adresse bei erfolgreichem Abschluss einer Herausforderung an den angegebenen Sponsor übermittelt wird."
                    onPress={function() {
                        return _this.setState({ isEMailUsageAccepted: !_this.state.isEMailUsageAccepted })
                    }}
                />

                <react_native_elements_1.Button
                    containerStyle={SettingsFullpage_css_1.default.row}
                    type="outline"
                    title=" Speichern"
                    raised={isFormSubmittable}
                    loading={this.state.isSaving}
                    disabled={!isFormSubmittable}
                    icon={<react_native_elements_1.Icon name="save" type="font-awesome" />}
                    onPress={this.save}
                />
            </react_native_1.View>
        )
    }
    SettingsFullpage.EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return SettingsFullpage
})(react_1.default.PureComponent)
exports.SettingsFullpage = SettingsFullpage
