/** Enum does not allow require or dynamic strings. But useful for type-safety. */
import {ICO_ENVIRONMENT, ICO_HEALTH, ICO_SOCIETY} from "../../../assets/AssetIndex"

export enum ChallengeCategory {
    ENVIRONMENT = "ENVIRONMENT", HEALTH = "HEALTH", SOCIETY = "SOCIETY"
}

/** Require does not allow dynamic strings! */
export const CHALLENGE_CATEGORIES = {
    [ChallengeCategory.ENVIRONMENT]: ICO_ENVIRONMENT,
    [ChallengeCategory.HEALTH]: ICO_HEALTH,
    [ChallengeCategory.SOCIETY]: ICO_SOCIETY,
}
