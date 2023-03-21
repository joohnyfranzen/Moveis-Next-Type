// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../models"
const DB: any = db;
const { Produto } = DB;
type Data = {
  message: string;
}

export default async function CriarProduto(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const produto = req.body
  try {
    const newProduto = await Produto.create(produto)
    if(newProduto){
      return res.status(200).json({ message:`Produto ${newProduto} criado com sucesso`})
    }
  } catch(error) {
    res.status(400).json({message: `${error}`})
  }
}
