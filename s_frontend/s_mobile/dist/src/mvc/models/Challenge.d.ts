import { ImageURISource } from "react-native";
import { ChallengeCategory } from "./ChallengeCategory";
export declare class Challenge {
    bgImage: ImageURISource;
    majorCategory: ChallengeCategory;
    companyLogoUri: ImageURISource;
    subline: string;
    headline: string;
    private _headline;
    private _subline;
    private _companyLogoUri;
    private _majorCategory;
    private _bgImage;
    constructor(headline: string, subline: string, companyLogoUri: ImageURISource, majorCategory: ChallengeCategory, bgImage: ImageURISource);
}
