import { ImageURISource } from "react-native"
import { ChallengeCategory } from "../../../../models/ChallengeCategory"

export interface IChallengeLayerBarProps {
    headline: string
    subline: string
    companyLogoUri: ImageURISource
    challengeCategory: ChallengeCategory
    isGrayscale: boolean
    expirationInMs: number
}
