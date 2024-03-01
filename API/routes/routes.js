const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product.js');
const OrderModel = require('../models/order.js');
const CustomerModel = require('../models/customer.js');
const { Model } = require('mongoose');

//---------------------------------------------------
//Products

//Post: create product
router.post('/product', async (req, res) =>{  
    const data = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    try {

        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get: get all products 
router.get('/products', async (req, res) =>{
    try{
        const data = await ProductModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//get: filter products by id[]
router.get('/products/:id', async (req, res) =>{
    try{
        const data = await ProductModel.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})

    }
})

//delete: delete selectable products (admin)
router.delete('/remove-products/:id', async (req, res) =>{
    try{
        const ids = req.body.ids;

        for(const id of ids){
            const data = await ProductModel.findByIdAndDelete(id)
            res.send("Product: " + data.name + " has been deleted")
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//---------------------------------------------------
//Product Details

//get: get product by id 
router.get('/product/:id', async (req, res) =>{
    try{
        const data = await ProductModel.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})

    }
})

//put: update single product
router.put('/product/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await ProductModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//delete: delete the product (admin)
router.delete('/remove-product/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await ProductModel.findByIdAndDelete(id)
        res.send("Product: " + data.name + " has been deleted")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//---------------------------------------------------
//Customers

//post: create customer
router.post('/customer', async (req, res) =>{  
    
    const result = await CustomerModel.findOne({email: req.body.email}).exec();
    if(result){
        res.status(400).json({message: "User exists! Try with a different email"})
    }   
    else{
        const data = new CustomerModel({
            name: req.body.name,
            email: req.body.email
        })
        try {

            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    }
})

//delete: delete customer by id
router.delete('/remove-customer/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await CustomerModel.findByIdAndDelete(id)
        res.send("Customer: " + data.name + " has been deleted")
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//---------------------------------------------------
//Orders

//post: add order
router.post('/order', async (req, res) =>{  
    const data = new CustomerModel({
        name: req.body.name,
        email: req.body.email
    })
    try {

        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//post: get multiple orders
router.post('/orders', (req, res) =>{
    res.send('orders create works!');
})

//get: get all orders 
router.get('/orders', async (req, res) =>{
    try{
        const data = await OrderModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//get: get orders by id 
router.get('/order/:id', async (req, res) =>{
    try{
        const data = await OrderModel.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})

    }
})

//put: update specific order
router.put('/order/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await ProductModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
//---------------------------------------------------

module.exports = router;