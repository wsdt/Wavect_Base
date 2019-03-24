import {SocialMediaType} from "react-native-elements"


export interface ISocialBtnProps {
    authCallback: () => void,
    socialType: SocialMediaType,
}