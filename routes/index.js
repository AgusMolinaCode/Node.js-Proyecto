import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios,paginaDetalleViaje } from '../controllers/paginasController.js';

import {
    guardarTestimonios
} from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/',paginaInicio);

router.get('/nosotros',paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/testimoniales', paginaTestimonios) 
router.post('/testimoniales', guardarTestimonios)

export default router;