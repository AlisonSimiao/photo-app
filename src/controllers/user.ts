import { PrismaClient, User } from "@prisma/client";
import Empty from "../Errors/Empty";
import UserExist from "../Errors/UserExist";
import bcrypt from "bcrypt";

class UserControler {
    private prisma: PrismaClient;
    
    constructor() {
        this.prisma = new PrismaClient();
    }
    
    async create(data: Omit<User, "id">): Promise<User>{
        
        if(!data?.email || data?.email.trim() === "")
            throw new Empty("email");
        if(!data?.nickname || data?.nickname.trim() === "")
            throw new Empty("nickname");
        if(!data?.password || data?.password.trim() === "")
            throw new Empty("password");
            
        const userFound = await this.prisma.user.findFirst({
            where:{
                OR:[
                    {
                        email: data.email
                    },
                    {
                        nickname: data.nickname
                    }
                ]
                
            }
        })

        if( userFound )
            throw new UserExist("user create");

        const newPassword = await  bcrypt.hash(data.password,10);
        data.password = newPassword;
        
        const result = await this.prisma.user.create({data})

        return result;
    }

    async findOne(email: string): Promise<User | null>{

        const user = await this.prisma.user.findUnique(
            {
                where: {
                    email
                }
            }
        )

        return user;
    }
}

export default UserControler;