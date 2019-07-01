import { ImageURISource } from "react-native"

export class Sponsor {
    private _sponsorId!: string
    private _sponsorName!: string
    private _logoUri!: ImageURISource
    private _shortDescr!: string
    private _website!: string
    private _email!: string
    private _sponsorYoutube?: string
    private _sponsorInstagram?: string
    private _sponsorLinkedIn?: string
    private _sponsorFacebook?: string

    public constructor(sponsorId: string, sponsorName: string, logoUri: ImageURISource, shortDescr: string,
                       website: string, email: string, sponsorFacebook: string, sponsorInstagram: string,
                       sponsorLinkedIn: string, sponsorYoutube: string) {
        this.sponsorId = sponsorId
        this.sponsorName = sponsorName
        this.logoUri = logoUri
        this.shortDescr = shortDescr
        this.website = website
        this.email = email
        this.sponsorYoutube = sponsorYoutube
        this.sponsorInstagram = sponsorInstagram
        this.sponsorFacebook = sponsorFacebook
        this.sponsorLinkedIn = sponsorLinkedIn
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


    get sponsorYoutube(): string | undefined {
        return this._sponsorYoutube;
    }

    set sponsorYoutube(value: string | undefined) {
        this._sponsorYoutube = value;
    }

    get sponsorInstagram(): string | undefined {
        return this._sponsorInstagram;
    }

    set sponsorInstagram(value: string | undefined) {
        this._sponsorInstagram = value;
    }

    get sponsorLinkedIn(): string | undefined {
        return this._sponsorLinkedIn;
    }

    set sponsorLinkedIn(value: string | undefined) {
        this._sponsorLinkedIn = value;
    }

    get sponsorFacebook(): string | undefined {
        return this._sponsorFacebook;
    }

    set sponsorFacebook(value: string | undefined) {
        this._sponsorFacebook = value;
    }
}
