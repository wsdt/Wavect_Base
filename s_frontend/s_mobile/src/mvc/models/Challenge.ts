import { ImageURISource } from "react-native"
import { ChallengeCategory } from "./ChallengeCategory"

export class Challenge {
    get bgImage(): ImageURISource {
        return this._bgImage
    }

    set bgImage(value: ImageURISource) {
        this._bgImage = value
    }
    get majorCategory(): ChallengeCategory {
        return this._majorCategory
    }

    set majorCategory(value: ChallengeCategory) {
        this._majorCategory = value
    }
    get companyLogoUri(): ImageURISource {
        return this._companyLogoUri
    }

    set companyLogoUri(value: ImageURISource) {
        this._companyLogoUri = value
    }
    get subline(): string {
        return this._subline
    }

    set subline(value: string) {
        this._subline = value
    }
    get headline(): string {
        return this._headline
    }

    set headline(value: string) {
        this._headline = value
    }

    private _headline!: string
    private _subline!: string
    private _companyLogoUri!: ImageURISource
    private _majorCategory!: ChallengeCategory
    private _bgImage!: ImageURISource

    public constructor(headline: string, subline: string, companyLogoUri: ImageURISource, majorCategory: ChallengeCategory, bgImage: ImageURISource) {
        this.bgImage = bgImage
        this.majorCategory = majorCategory
        this.companyLogoUri = companyLogoUri
        this.subline = subline
        this.headline = headline
    }
}
