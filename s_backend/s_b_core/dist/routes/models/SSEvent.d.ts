import { Response } from "express";
export declare class SSEvent {
    event: string;
    id: string;
    data: string;
    constructor(event: string, id: string, data: string);
    sendSSEvent(res: Response): void;
    toString(): string;
}
