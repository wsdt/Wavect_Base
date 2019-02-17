declare const store: import("redux").Store<{
    userName: string;
} | {
    userTokens: {
        [x: number]: any;
    };
    userName: string;
}, any>;
export default store;
