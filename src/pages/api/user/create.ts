
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from "@prisma/client";
import UserControler from '../../../controllers/user';
import CustomError from '../../../Errors/CustomError';
import MethodError from '../../../Errors/MethodError';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    
  try{
    
    const data = JSON.parse(req.body) as Omit<User, "id">;
    
    if( ! (req.method === "POST") )
      throw new MethodError(req.method as string);

    const user  = new UserControler();
    
    const result = await user.create(data);
    const { password,...resultNoPassword } = result;
    res.status(201).json(resultNoPassword);
  }
  catch(error){
    
    if( error instanceof CustomError)
      return res.status(error.status).json(error)
      res.status(400).json(error);
  }
  
}

