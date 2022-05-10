const { Router } = require('express');
const { check } = require('express-validator');


const {getProductsByCategory} = require('../../controllers/Products');

const router = Router();

router.get('/:category',[
    check('category').notEmpty().withMessage('El campo category es obligatorio'),
    check('category').isNumeric().withMessage('El campo category debe ser un número')
],getProductsByCategory );

module.exports = router;