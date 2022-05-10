const { Router } = require('express');
const { check } = require('express-validator');


const {getSalesByProductBrand} = require('../../controllers/Sales');

const router = Router();

router.get('/:product/:brand',[
    check('product').notEmpty().withMessage('El campo producto es obligatorio'),
    check('product').isNumeric().withMessage('El campo producto debe ser un número'),
    check('brand').notEmpty().withMessage('El campo marca es obligatorio'),
    check('brand').isNumeric().withMessage('El campo marca debe ser un número')
],getSalesByProductBrand );

module.exports = router;