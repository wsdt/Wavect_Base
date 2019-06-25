import { ImageURISource } from "react-native"

export class Sponsor {
    private _sponsorId!: string
    private _sponsorName!: string
    private _logoUri!: ImageURISource
    private _shortDescr!: string
    private _website!: string
    private _email!: string

    public constructor(sponsorId: string, sponsorName: string, logoUri: ImageURISource, shortDescr: string, website: string, email: string) {
        this.sponsorId = sponsorId
        this.sponsorName = sponsorName
        this.logoUri = logoUri
        this.shortDescr = shortDescr
        this.website = website
        this.email = email
    }

    set sponsorId(sponsorId: string) {
        this._sponsorId = sponsorId
    }

    get sponsorId(): string {
        return this._sponsorId
    }

    get sponsorName(): string {
        return this._sponsorName
    }

    set sponsorName(value: string) {
        this._sponsorName = value
    }

    get logoUri(): ImageURISource {
        return this._logoUri
    }

    set logoUri(value: ImageURISource) {
        this._logoUri = value
    }

    get shortDescr(): string {
        return this._shortDescr
    }

    set shortDescr(value: string) {
        this._shortDescr = value
    }

    get website(): string {
        return this._website
    }

    set website(value: string) {
        this._website = value
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        this._email = value
    }
}
