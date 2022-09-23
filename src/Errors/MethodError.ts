import CustomError from "./CustomError";

class MethodError extends CustomError{
    constructor(method: string) {
        super("method error",`method ${method} not implement`,500 );
    }
}

export default MethodError;