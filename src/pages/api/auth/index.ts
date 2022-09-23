import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const token = req.headers.authorization?.split(" ")[1];

  if(token){
    return res.status(500).json({messae: "not implement"})
  }

}