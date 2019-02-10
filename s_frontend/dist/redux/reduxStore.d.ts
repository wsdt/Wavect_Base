declare const store: import("redux").Store<{
    userName: string;
} | {
    userName: any;
    userToken: any;
}, any>;
export default store;
