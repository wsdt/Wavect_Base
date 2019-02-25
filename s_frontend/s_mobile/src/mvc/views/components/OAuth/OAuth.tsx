import * as React from "react"
import {TouchableOpacity, View} from "react-native"
import {SocialIcon} from "react-native-elements"
import * as styleBase from "../../../../scss/base.scss"
import p from "../../../../scss/parseScss"

import {OAuthFacebook} from "../../../models/oauth/oAuthFacebook"
import {OAuthGithub} from "../../../models/oauth/oAuthGithub"
import {OAuthInstagram} from "../../../models/oauth/oAuthInstagram"
import {OAuthLinkedin} from "../../../models/oauth/oAuthLinkedin"
import {OAuthTwitter} from "../../../models/oauth/oAuthTwitter"
import {OAuthYoutube} from "../../../models/oauth/oAuthYoutube"


export class OAuth extends React.Component {

    public render() {
        /* OAuth ==> TODO: LIBRARY SUPPORTS A LOT MORE :)*/
        return (
            <View style={p(styleBase.gridContainer)}>
                <View style={p(styleBase.gridRow)}>
                    <TouchableOpacity onPress={() => OAuthFacebook.authenticate}>
                        <SocialIcon type="facebook" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OAuthInstagram.authenticate}>
                        <SocialIcon type="instagram" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OAuthLinkedin.authenticate}>
                        <SocialIcon type="linkedin" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                </View>
                <View style={p(styleBase.gridRow)}>
                    <TouchableOpacity onPress={OAuthYoutube.authenticate}>
                        <SocialIcon type="youtube" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OAuthTwitter.authenticate}>
                        <SocialIcon type="twitter" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={OAuthGithub.authenticate}>
                        <SocialIcon type="github" button light style={p(styleBase.gridElem)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}