const asyncHandler = require('express-async-handler')
const Product = require('../models/product')

//CREATE    
const createProduct = asyncHandler(async (req,res) => {
    const newProduct = new Product(req.body)
    try{
       const savedProduct = await newProduct.save();
       res.status(500).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
const updateProduct = asyncHandler(async (req,res) => {
    try{
       const updatedProduct = await Product.findByIdAndUpdate(
           req.params.id,
           {
               $set: req.body,
           },
           {new:true}
       );
       res.status(500).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE
const deleteProduct = asyncHandler(async (req,res) => {
    try{
        await Product.findByIdAndDelete(
           req.params.id
       );
       res.status(500).json("Product has been deleted Successfully!!")
    }catch(err){
        res.status(500).json(err)
    }
})
//GET PRODUCT
const getProduct = asyncHandler(async (req,res) => {
    try{
        const product = await Product.findById(
           req.params.id
       );
       res.status(500).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS
const getAllProducts = asyncHandler(async (req,res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
            products = await Product.find({
                categories:{
                    $in : [qCategory],
                },
            });     
        }else{
            products = await Product.find();
        }
     
       res.status(500).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
}