import { ContentfulStatusCode } from "hono/utils/http-status";
export declare class ApplicationError extends Error {
    baseName: string;
    code: ContentfulStatusCode;
    constructor(message: string, code?: ContentfulStatusCode);
    getResponseMessage: () => {
        message: string;
    };
    static isApplicationError: (error: any) => error is ApplicationError;
}
//# sourceMappingURL=index.d.ts.map