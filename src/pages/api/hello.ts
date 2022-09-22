
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from "@prisma/client";
import UserControler from '../../controllers/user';
import CustomError from '../../Errors/CustomError';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.query as Omit<User, "id">;
  try{
    const user  = new UserControler();
    const result = await user.create(data);
    res.status(200).json(result);
  }
  catch(error){
    if( error instanceof CustomError)
      return res.status(error.status).json(error)
      res.status(400).json(error);
  }
  
}
