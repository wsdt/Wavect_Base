export declare class Http2SSEclient {
    private SSE_SOURCE;
    constructor(sseChannel: string);
    getSSE_SOURCE(): EventSource;
    private addDefaultEventHandlers;
}
