const { Router } = require('express');
const { check } = require('express-validator');


const {getBrandsByProducts} = require('../../controllers/Brands');

const router = Router();

router.get('/:product',[
    check('product').notEmpty().withMessage('El campo producto es obligatorio'),
    check('product').isNumeric().withMessage('El campo producto debe ser un número'),
],getBrandsByProducts );

module.exports = router;