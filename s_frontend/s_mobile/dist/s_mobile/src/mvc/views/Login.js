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
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var styleBase = require("../../scss/base.scss");
var parseScss_1 = require("../../scss/parseScss");
var oAuthFacebook_1 = require("../controllers/oauth/oAuthFacebook");
var oAuthGithub_1 = require("../controllers/oauth/oAuthGithub");
var oAuthTwitter_1 = require("../controllers/oauth/oAuthTwitter");
var oAuthYoutube_1 = require("../controllers/oauth/oAuthYoutube");
var OAuthInstagram_1 = require("../../../../s_web/src/mvc/views/pages/OAuth/OAuthInstagram/OAuthInstagram");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            regForm: {
                btnGroup: {
                    selectedIndex: 0,
                }
            }
        };
        return _this;
    }
    Login.prototype.render = function () {
        console.log(JSON.stringify(styleBase));
        return <react_native_1.View style={parseScss_1.default(styleBase.container)}>
            <react_native_elements_1.Text h1> Log In</react_native_elements_1.Text>
            <react_native_elements_1.Input label="Username" placeholder="Username"/>
            <react_native_elements_1.Input label="Password" placeholder="Password" secureTextEntry={true}/>

            <react_native_elements_1.ButtonGroup selectedIndex={this.state.regForm.btnGroup.selectedIndex} buttons={["Login", "Register", "Forgot password"]} onPress={this.onRegLoginPress} containerStyle={{ height: 35 }}/>

            
            <react_native_1.View style={parseScss_1.default(styleBase.gridContainer)}>
                <react_native_1.View style={parseScss_1.default(styleBase.gridRow)}>
                    <react_native_1.TouchableOpacityComponent onPress={new oAuthFacebook_1.OAuthFacebook().authenticate}><react_native_elements_1.SocialIcon type="facebook" button style={parseScss_1.default(styleBase.gridElem)} onPress=/></react_native_1.TouchableOpacityComponent>
                    <react_native_1.TouchableOpacityComponent onPress={new OAuthInstagram_1.OAuthInstagram().authenticate}><react_native_elements_1.SocialIcon type="instagram" button style={parseScss_1.default(styleBase.gridElem)}/>
                    <react_native_elements_1.SocialIcon type="linkedin" button style={parseScss_1.default(styleBase.gridElem)}/>
                </react_native_1.View>
                <react_native_1.View style={parseScss_1.default(styleBase.gridRow)}>
                    <react_native_1.TouchableOpacityComponent onPress={new oAuthYoutube_1.OAuthYoutube().authenticate}><react_native_elements_1.SocialIcon type="youtube" button style={parseScss_1.default(styleBase.gridElem)}/></react_native_1.TouchableOpacityComponent>
                    <react_native_1.TouchableOpacityComponent onPress={new oAuthTwitter_1.OAuthTwitter().authenticate}><react_native_elements_1.SocialIcon type="twitter" button style={parseScss_1.default(styleBase.gridElem)}/></react_native_1.TouchableOpacityComponent>
                    <react_native_1.TouchableOpacityComponent onPress={new oAuthGithub_1.OAuthGithub().authenticate}><react_native_elements_1.SocialIcon type="github" button style={parseScss_1.default(styleBase.gridElem)}/></react_native_1.TouchableOpacityComponent>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>
    }

    private onRegLoginPress = (selectedIndex: number) => {} (selectedIndex) {} 0:
                this.onLoginBtnPress()
                break
            case 1:
                this.onRegisterBtnPress()
                break
            case 2:
                this.onPwdForgottenBtnPress()
                break
            default:
                console.error("onRegLoginPress: Unknown button.")
        }

        this.setState({regForm} {btnGroup} {selectedIndex}}})
    }

    private onLoginBtnPress = () => 

    private onRegisterBtnPress = () => 

    private onPwdForgottenBtnPress = () => 
}</>;
    };
    return Login;
}(React.Component));
exports.default = Login;
//# sourceMappingURL=Login.js.map