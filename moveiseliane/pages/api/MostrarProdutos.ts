// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import produto from '@/models/produto';
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../models"
const DB: any = db;
const { Produto } = DB;

type Data = {
  message: string;

}

export default async function MostrarProduto(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const findProdutos = await Produto.findAll()
    if(findProdutos) {
        return res.status(200).json(findProdutos)
    }
  } catch(error) {
    res.status(400).json({message: `${error}`})
  }
}
