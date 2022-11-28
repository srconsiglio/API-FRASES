
import { Request, Response } from "express";

import {frase, Frase} from '../models/Frase'


export const ping = (req:Request, res:Response) =>{
    res.json({pong:true})
}


export const random = (req:Request, res:Response) =>{
    let nRand: number = Math.floor(Math.random() * 10)

    res.json({number: nRand})
}

export const nome = (req:Request, res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome: ${nome}` })
}



export const createFrase = async (req:Request, res:Response) =>{
    let {autor, txt} = req.body
    let newFrase = await Frase.create({autor, txt})
    res.json({id: newFrase.id, autor, txt})
}


export const listaFrases = async(req:Request, res:Response) =>{
    let list = await Frase.findAll()
    res.json({list})
}


export const getFrases = async (req:Request, res:Response) =>{
    let {id} = req.params
    let frases = await frase.findByPk(id)

    if(frases){
        res.json({frases})
    }else{  
        res.json({error:'frase não existe'})
}
}