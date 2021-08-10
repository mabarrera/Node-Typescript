import { Router } from 'express'
import { addData, allData, deleteData, editData, getData } from '../controllers/usuarios.controllers';
const router = Router();

router.get('/', allData)

router.get('/:id', getData)

router.post('/', addData)

router.put('/:id', editData)

router.delete('/:id', deleteData)

export default router