const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController')

const Router = express.Router();

router
    .route('/')
    .get(dataController.getAllProducts)
    .post(dataController.createProduct);

router 
    .route('/:id')
    .get(dataController.getProduct)
    .patch(dataController.updateProduct)
    .delete(dataController.deleteProduct)


module.exports = router;
