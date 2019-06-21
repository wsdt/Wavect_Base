import { ChallengeCategory } from "../../../../models/ChallengeCategory"

export interface IChallengeTypeIconProps {
    type: ChallengeCategory
    pressed: () => void
}
