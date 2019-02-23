export declare enum OAuthType {
    FACEBOOK = 0,
    INSTAGRAM = 1,
    TWITTER = 2,
    GITHUB = 3,
    LINKEDIN = 4,
    YOUTUBE = 5
}
export declare const authenticate: (oAuthType: OAuthType) => void;
