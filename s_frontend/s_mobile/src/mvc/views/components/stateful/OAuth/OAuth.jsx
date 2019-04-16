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
var parseScss_1 = require("../../../../controllers/parseScss")
var styles = require("./OAuth.scss")
var oAuthFacebook_1 = require("../../../../models/oauth/childs/oAuthFacebook")
var oAuthGithub_1 = require("../../../../models/oauth/childs/oAuthGithub")
var oAuthInstagram_1 = require("../../../../models/oauth/childs/oAuthInstagram")
var oAuthLinkedin_1 = require("../../../../models/oauth/childs/oAuthLinkedin")
var oAuthTwitter_1 = require("../../../../models/oauth/childs/oAuthTwitter")
var oAuthYoutube_1 = require("../../../../models/oauth/childs/oAuthYoutube")
var SocialBtn_1 = require("../../functional/SocialBtn/SocialBtn")
// TODO: Here in stateful as oauth will certainly have a state (otherwise move to functional)
var OAuth = /** @class */ (function(_super) {
    __extends(OAuth, _super)
    function OAuth() {
        return (_super !== null && _super.apply(this, arguments)) || this
    }
    OAuth.prototype.render = function() {
        /* OAuth ==> TODO: LIBRARY SUPPORTS A LOT MORE :)*/
        return (
            <react_native_1.View
                style={parseScss_1.default(styles.gridContainer)}
            >
                <react_native_1.View
                    style={parseScss_1.default(styles.gridRow)}
                >
                    <SocialBtn_1.SocialBtn
                        authCallback={function() {
                            return oAuthFacebook_1.OAuthFacebook.authenticate
                        }}
                        socialType="facebook"
                    />

                    <SocialBtn_1.SocialBtn
                        authCallback={
                            oAuthInstagram_1.OAuthInstagram.authenticate
                        }
                        socialType="instagram"
                    />

                    <SocialBtn_1.SocialBtn
                        authCallback={
                            oAuthLinkedin_1.OAuthLinkedin.authenticate
                        }
                        socialType="linkedin"
                    />
                </react_native_1.View>
                <react_native_1.View
                    style={parseScss_1.default(styles.gridRow)}
                >
                    <SocialBtn_1.SocialBtn
                        authCallback={oAuthYoutube_1.OAuthYoutube.authenticate}
                        socialType="youtube"
                    />

                    <SocialBtn_1.SocialBtn
                        authCallback={oAuthTwitter_1.OAuthTwitter.authenticate}
                        socialType="twitter"
                    />

                    <SocialBtn_1.SocialBtn
                        authCallback={oAuthGithub_1.OAuthGithub.authenticate}
                        socialType="github"
                    />
                </react_native_1.View>
            </react_native_1.View>
        )
    }
    return OAuth
})(React.Component)
exports.OAuth = OAuth
