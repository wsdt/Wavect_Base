import {ChallengeCategory} from "../../../../models/ChallengeCategory"

export interface IChallengeBottomBarProps {
    headline: string
    subline: string
    company: string // should this be the real logo or a text?
    icon: ChallengeCategory
}
