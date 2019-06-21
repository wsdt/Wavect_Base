import { ImageURISource } from "react-native"
import { ChallengeCategory } from "./ChallengeCategory"

export class Challenge {
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
    get whyDoesOrganizationSponsor(): string {
        return this._whyDoesOrganizationSponsor
    }

    set whyDoesOrganizationSponsor(value: string) {
        this._whyDoesOrganizationSponsor = value
    }
    get expirationInMs(): number {
        return this._expirationInMs
    }

    set expirationInMs(value: number) {
        this._expirationInMs = value
    }
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

    private _id!: string
    private _headline!: string
    private _subline!: string
    private _whyDoesOrganizationSponsor!: string
    private _companyLogoUri!: ImageURISource
    private _majorCategory!: ChallengeCategory
    private _bgImage!: ImageURISource
    private _expirationInMs!: number

    public constructor(
        id: string,
        headline: string,
        subline: string,
        whyDoesOrganizationSponsor: string,
        companyLogoUri: ImageURISource,
        majorCategory: ChallengeCategory,
        bgImage: ImageURISource,
        expirationInMs: number
    ) {
        this.id = id
        this.bgImage = bgImage
        this.majorCategory = majorCategory
        this.companyLogoUri = companyLogoUri
        this.subline = subline
        this.headline = headline
        this.whyDoesOrganizationSponsor = whyDoesOrganizationSponsor
        this.expirationInMs = expirationInMs
    }
}
