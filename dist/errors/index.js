export class ApplicationError extends Error {
    baseName = "ApplicationError";
    code;
    constructor(message, code = 500) {
        super(message);
        this.name = "ApplicationError";
        this.code = code;
    }
    getResponseMessage = () => {
        return {
            message: this.message,
        };
    };
    static isApplicationError = (error) => {
        return (error instanceof ApplicationError || error.baseName === "ApplicationError");
    };
}
