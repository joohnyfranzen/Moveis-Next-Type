// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../models"
const DB: any = db;
const { Entrega } = DB;

type Data = {
  message: string;
}

export default async function CriarProduto(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const entrega = req.body
  try {
    const newEntrega = await Entrega.create(entrega)
    if(newEntrega){
      return res.status(200).json({message:`Entregas ${newEntrega} criada com sucesso`})
    }
  } catch(error) {
    res.status(400).json({message: `${error}`})
  }
}
