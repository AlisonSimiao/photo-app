import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import UserControler from '../../../controllers/user';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(! (req.method === "POST") )
    return res.status(500).json({messae: "not implement"})

    try{
        const data = JSON.parse(req.body) as User;
        const user = new UserControler();
        
        const userResult = await user.findOne(data.email);

        if( !userResult )
            return res.status(403).json({message: "email or password invalid"});
        
        const testePassword = await bcrypt.compare(data.password, userResult.password)
        
        if( !testePassword )
            return res.status(403).json({message: "email or password invalid"});
        
        const token = jwt.sign(
            { id: userResult.id},
            process.env.PROJECT_PASS as string,
            {
              expiresIn: "2h",
            }
          );
        const { password, ...resultNoPassword} = userResult;

        return res.status(200).json({user: resultNoPassword,token});
    }
    catch(error){
        return res.status(400).json(error);
    }
  
    

}