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
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __())
        }
    })()
Object.defineProperty(exports, "__esModule", { value: true })
var React = require("react")
var react_native_1 = require("react-native")
var react_native_elements_1 = require("react-native-elements")
var styleBase = require("../../../../scss/base.scss")
var parseScss_1 = require("../../../../scss/parseScss")
var oAuthFacebook_1 = require("../../../models/oauth/oAuthFacebook")
var oAuthGithub_1 = require("../../../models/oauth/oAuthGithub")
var oAuthInstagram_1 = require("../../../models/oauth/oAuthInstagram")
var oAuthLinkedin_1 = require("../../../models/oauth/oAuthLinkedin")
var oAuthTwitter_1 = require("../../../models/oauth/oAuthTwitter")
var oAuthYoutube_1 = require("../../../models/oauth/oAuthYoutube")
var OAuth = /** @class */ (function(_super) {
    __extends(OAuth, _super)
    function OAuth() {
        return (_super !== null && _super.apply(this, arguments)) || this
    }
    OAuth.prototype.render = function() {
        /* OAuth ==> TODO: LIBRARY SUPPORTS A LOT MORE :)*/
        return (
            <react_native_1.View
                style={parseScss_1.default(styleBase.gridContainer)}
            >
                <react_native_1.View
                    style={parseScss_1.default(styleBase.gridRow)}
                >
                    <react_native_1.TouchableOpacity
                        onPress={function() {
                            return oAuthFacebook_1.OAuthFacebook.authenticate
                        }}
                    >
                        <react_native_elements_1.SocialIcon
                            type="facebook"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity
                        onPress={oAuthInstagram_1.OAuthInstagram.authenticate}
                    >
                        <react_native_elements_1.SocialIcon
                            type="instagram"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity
                        onPress={oAuthLinkedin_1.OAuthLinkedin.authenticate}
                    >
                        <react_native_elements_1.SocialIcon
                            type="linkedin"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>
                <react_native_1.View
                    style={parseScss_1.default(styleBase.gridRow)}
                >
                    <react_native_1.TouchableOpacity
                        onPress={oAuthYoutube_1.OAuthYoutube.authenticate}
                    >
                        <react_native_elements_1.SocialIcon
                            type="youtube"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity
                        onPress={oAuthTwitter_1.OAuthTwitter.authenticate}
                    >
                        <react_native_elements_1.SocialIcon
                            type="twitter"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity
                        onPress={oAuthGithub_1.OAuthGithub.authenticate}
                    >
                        <react_native_elements_1.SocialIcon
                            type="github"
                            button
                            light
                            style={parseScss_1.default(styleBase.gridElem)}
                        />
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>
            </react_native_1.View>
        )
    }
    return OAuth
})(React.Component)
exports.OAuth = OAuth
