import { OAuthParent } from "./oAuthParent";
export declare class OAuthTwitter extends OAuthParent {
    authenticate(): Promise<string>;
}
