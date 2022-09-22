import CustomError from "./CustomError";

class UserExist extends CustomError{
    constructor(name="") {
        super(name,"user already exist",409 );
    }
}

export default UserExist;