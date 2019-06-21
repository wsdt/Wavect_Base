import { ImageURISource } from "react-native"
import { ChallengeCategory } from "../../../../models/ChallengeCategory"

export interface IChallengeLayerBarProps {
    challengeId: string
    headline: string
    subline: string
    expirationInMs: number
}
