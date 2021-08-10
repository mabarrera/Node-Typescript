import { Request, Response } from "express";

import Usuario from '../models/usuario';

//Obtener todos los usuarios
export const allData = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
}

//Obtener un usuario
export const getData = async (req: Request, res: Response) => {
    const { id } = req.params
    const usuario = await Usuario.findByPk( id )
    if( !usuario ){
        return res.status(404).json({
            msg: 'No existe el usuario'
        })
    }
    res.json(usuario)
}

//Guardar usuario
export const addData = async (req: Request, res: Response) => {
    const { body } = req

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if( existeEmail ){
            return res.status(400).json({
                msg: 'El correo ya esta registrado'
            })
        }

        const usuario = await Usuario.build(body)
        await usuario.save()
        res.json(usuario)
    } catch (error) {
        console.log(error);        
        return res.status(500).json({
            msg: 'Hable con el administrador - save'
        })
    }
}

//Actualizar usuario
export const editData = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req

    try {
        const usuario = await Usuario.findByPk( id )
        if( !usuario ){
            return res.status(404).json({
                msg: 'No existe el usuario'
            })
        }
        
        await usuario.update( body )
        res.json(usuario)

    } catch (error) {
        console.log(error);        
        return res.status(500).json({
            msg: 'Hable con el administrador - save'
        })
    }
}

//Guardar usuario
export const deleteData = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const usuario = await Usuario.findByPk( id )
        if( !usuario ){
            return res.status(404).json({
                msg: 'No existe el usuario'
            })
        }
        
        //Eliminacion fisica
        //await usuario.destroy()

        //Eliminacion logica
        await usuario.update( { estado: false } )
        res.json(usuario)

    } catch (error) {
        console.log(error);        
        return res.status(500).json({
            msg: 'Hable con el administrador - save'
        })
    }
}