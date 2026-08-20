import { Context } from './Context';
declare class GcalError extends Error {
    isGcalError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GcalError };
