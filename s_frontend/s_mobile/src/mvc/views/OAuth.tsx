import * as React from "react"
import {TouchableOpacity, View} from "react-native"
import {SocialIcon} from "react-native-elements"
import * as styleBase from "../../scss/base.scss"
import p from "../../scss/parseScss"
import {ToastAndroid} from "react-native"

import {OAuthFacebook} from "../models/oauth/oAuthFacebook"
import {OAuthGithub} from "../models/oauth/oAuthGithub"
import {OAuthInstagram} from "../models/oauth/oAuthInstagram"
import {OAuthLinkedin} from "../models/oauth/oAuthLinkedin"
import {OAuthTwitter} from "../models/oauth/oAuthTwitter"
import {OAuthYoutube} from "../models/oauth/oAuthYoutube"


export class OAuth extends React.Component {
    public state = {
        loading: {
            "facebook": false,
            "github": false,
            "instagram": false,
            "linkedin": false,
            "twitter": false,
            "youtube": false,
        }
    }

    public render() {
        /* OAuth ==> TODO: LIBRARY SUPPORTS A LOT MORE :)*/
        return (
            <View style={p(styleBase.gridContainer)}>
                <View style={p(styleBase.gridRow)}>
                    <TouchableOpacity onPress={() => {OAuthFacebook.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="facebook" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {OAuthInstagram.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="instagram" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {OAuthLinkedin.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="linkedin" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                </View>
                <View style={p(styleBase.gridRow)}>
                    <TouchableOpacity onPress={() => {OAuthYoutube.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="youtube" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {OAuthTwitter.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="twitter" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {OAuthGithub.authenticate();this.onSocialBtnClick()}}>
                        <SocialIcon type="github" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    private onSocialBtnClick() {
        console.log("onSocialBtnClick: Not implemented yet.")
        ToastAndroid.show("Coming soon..", ToastAndroid.SHORT)
    }
}