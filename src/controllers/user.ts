import { PrismaClient, User } from "@prisma/client";
import Empty from "../Errors/Empty";
import UserExist from "../Errors/UserExist";

class UserControler {
    private prisma: PrismaClient;
    
    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<User, "id">){
      
        if(!data?.email || data?.email.trim() === "")
            throw new Empty("email");
        if(!data?.nickname || data?.nickname.trim() === "")
            throw new Empty("nickname");
        if(!data?.password || data?.password.trim() === "")
            throw new Empty("password");
            
        const userFound = await this.prisma.user.findFirst({
            where:{
                email: data.email
            }
        })

        if( userFound )
            throw new UserExist("user create");
            
        const result = await this.prisma.user.upsert({
            where: {
                email: data.email
            },
            update:{},
            create:{
                ...data
            }
        })
        return result;
       
    }
}

export default UserControler;