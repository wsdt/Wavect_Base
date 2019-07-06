import {Response} from "express"
import {NativeError} from "mongoose"

export class ApiResult {
    get err(): string | Error | NativeError | Array<string | Error | NativeError> | null {
        return this._err
    }

    set err(value:string | Error | NativeError | Array<string | Error | NativeError> | null) {
        this._err = value
    }

    get res(): [] | {} | null {
        return this._res
    }

    set res(value: [] | {} | null) {
        this._res = value
    }
    
    public static sendJson = (resp: Response, err: string | Error | NativeError | Array<string | Error | NativeError> | null, res: []|{}|null) => {
        new ApiResult(err, res).sendJson(resp)
    }

    // Undefined forbidden (never set undefined as developer)
    private _err: string | Error | NativeError | string | Error | NativeError | Array<string | Error | NativeError> | null
    private _res: [] | {} | null

    public constructor(err: string | Error | NativeError | Array<string | Error | NativeError> | null, res: [] | {} | null) {
        this._err = err
        this._res = res

        if (err) {
            console.error("ApiResult:constructor: Received errors -> "+JSON.stringify(err))
        }
    }
    
    public sendJson = (res: Response) => {
        res.json(this.toJson())
    }

    public toJson = () => {
        const result = {
            err: this.err,
            res: this.res,
        }
        console.log("ApiResult:toJson: Returning -> "+JSON.stringify(result))
        return result
    }

    public toString = () => {
        return JSON.stringify(this.toJson())
    }
}