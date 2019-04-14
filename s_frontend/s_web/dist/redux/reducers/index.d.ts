export declare const DEFAULT_STATE: {
    userName: string;
};
export default function reducer(state: {
    userName: string;
} | undefined, action: any): {
    userName: string;
} | {
    userTokens: {
        [x: number]: any;
    };
    userName: string;
};
