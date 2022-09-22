import CustomError from "./CustomError";

class Empty extends CustomError{
    constructor(prop: string) {
        super("Empty property",`property ${prop} is undefined or empty`,404 );
    }
}

export default Empty;