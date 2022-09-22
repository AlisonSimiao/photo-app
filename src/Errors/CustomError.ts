class CustomError extends Error{
    public status: number;
    public message: string;
    constructor(name="Error", message= "Error in sistem", status=400) {
        super();
        this.status= status;
        this.message= message;
        this.name=name
    }
}

export default CustomError;