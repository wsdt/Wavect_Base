import { ImageURISource } from "react-native"
import { ChallengeCategory } from "../../../../models/ChallengeCategory"

export interface IChallengeLayerBarProps {
    challengeId: string
    headline: string
    subline: string
    companyLogoUri: ImageURISource
    challengeCategory: ChallengeCategory
    isGrayscale: boolean
    expirationInMs: number
}
