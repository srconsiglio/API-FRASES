import {Router} from 'express'
import * as apiController from '../controllers/apiController'

const router = Router()
router.get('/ping',apiController.ping)
router.get('/random',apiController.random)
router.get('/nome',apiController.nome)
router.post('/frases',apiController.createFrase)
router.get('/frases',apiController.listaFrases)

router.get('/frase/:id',apiController)

export default router