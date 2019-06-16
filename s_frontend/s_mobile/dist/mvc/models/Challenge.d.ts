import { ImageURISource } from "react-native";
import { ChallengeCategory } from "./ChallengeCategory";
export declare class Challenge {
    bgImage: ImageURISource;
    majorCategory: ChallengeCategory;
    companyName: string;
    subline: string;
    headline: string;
    private _headline;
    private _subline;
    private _companyName;
    private _majorCategory;
    private _bgImage;
    constructor(headline: string, subline: string, companyName: string, majorCategory: ChallengeCategory, bgImage: ImageURISource);
}
