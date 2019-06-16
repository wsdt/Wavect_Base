import {ImageURISource} from "react-native"
import {ChallengeCategory} from "./ChallengeCategory"

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
    get companyName(): string {
        return this._companyName
    }

    set companyName(value: string) {
        this._companyName = value
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
    private _companyName!: string
    private _majorCategory!: ChallengeCategory
    private _bgImage!: ImageURISource

    public constructor(headline:string, subline:string, companyName:string, majorCategory:ChallengeCategory, bgImage:ImageURISource) {
        this.bgImage = bgImage
        this.majorCategory = majorCategory
        this.companyName = companyName
        this.subline = subline
        this.headline = headline
    }
}