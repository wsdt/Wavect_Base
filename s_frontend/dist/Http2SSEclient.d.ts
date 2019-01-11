export declare class Http2SSEclient {
    private SSE_SOURCE;
    getSSE_SOURCE(): EventSource;
    constructor(sseChannel: string);
    private addDefaultEventHandlers;
}
