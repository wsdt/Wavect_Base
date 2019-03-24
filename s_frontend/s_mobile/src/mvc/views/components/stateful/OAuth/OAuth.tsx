import * as React from "react"
import { View } from "react-native"
import * as styleBase from "../../../../../scss/base.scss"
import p from "../../../../../scss/parseScss"

import { OAuthFacebook } from "../../../../models/oauth/childs/oAuthFacebook"
import { OAuthGithub } from "../../../../models/oauth/childs/oAuthGithub"
import { OAuthInstagram } from "../../../../models/oauth/childs/oAuthInstagram"
import { OAuthLinkedin } from "../../../../models/oauth/childs/oAuthLinkedin"
import { OAuthTwitter } from "../../../../models/oauth/childs/oAuthTwitter"
import { OAuthYoutube } from "../../../../models/oauth/childs/oAuthYoutube"
import { SocialBtn } from "../../functional/SocialBtn/SocialBtn"

// TODO: Here in stateful as oauth will certainly have a state (otherwise move to functional)
export class OAuth extends React.Component {
    public render() {
        /* OAuth ==> TODO: LIBRARY SUPPORTS A LOT MORE :)*/
        return (
            <View style={p(styleBase.gridContainer)}>
                <View style={p(styleBase.gridRow)}>
                    <SocialBtn
                        authCallback={() => OAuthFacebook.authenticate}
                        socialType="facebook"
                    />

                    <SocialBtn
                        authCallback={OAuthInstagram.authenticate}
                        socialType="instagram"
                    />

                    <SocialBtn
                        authCallback={OAuthLinkedin.authenticate}
                        socialType="linkedin"
                    />
                </View>
                <View style={p(styleBase.gridRow)}>
                    <SocialBtn
                        authCallback={OAuthYoutube.authenticate}
                        socialType="youtube"
                    />

                    <SocialBtn
                        authCallback={OAuthTwitter.authenticate}
                        socialType="twitter"
                    />

                    <SocialBtn
                        authCallback={OAuthGithub.authenticate}
                        socialType="github"
                    />
                </View>
            </View>
        )
    }
}
