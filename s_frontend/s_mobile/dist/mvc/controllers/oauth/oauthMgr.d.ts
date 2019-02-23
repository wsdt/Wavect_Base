export declare enum OAuthType {
    FACEBOOK = 0,
    GOOGLE = 1,
    INSTAGRAM = 2,
    GITHUB = 3,
    TWITTER = 4,
    LINKEDIN = 5
}
export declare const authenticate: (oAuthType: OAuthType) => void;
