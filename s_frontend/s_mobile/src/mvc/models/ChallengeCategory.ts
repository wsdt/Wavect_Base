/** Enum does not allow require or dynamic strings. But useful for type-safety. */
import {ICO_ENVIRONMENT, ICO_HEALTH, ICO_SOCIETY} from "../../../assets/AssetIndex"

export enum ChallengeCategory {
    ENVIRONMENT = "ENVIRONMENT",
    HEALTH = "HEALTH",
    SOCIETY = "SOCIETY",
}

/** Require does not allow dynamic strings! */
export const CHALLENGE_CATEGORIES = {
    [ChallengeCategory.ENVIRONMENT]: {
        descr: "Challenges in this category aim to protect the environment.",
        icon: ICO_ENVIRONMENT,
    },
    [ChallengeCategory.HEALTH]: {
        descr: "Challenges in this category try to help you, to acquire healthier habits.",
        icon: ICO_HEALTH,
    },
    [ChallengeCategory.SOCIETY]: {
        descr: "Challenges in this category aim to make fun or to create social value.",
        icon: ICO_SOCIETY
    },
}
