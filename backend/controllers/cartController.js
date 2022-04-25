const asyncHandler = require('express-async-handler')
const Cart = require('../models/cart')

//CREATE    
const AddCart = asyncHandler(async (req,res) => {
    const newCart = new Cart(req.body)
    try{
       const savedCart = await newCart.save();
       res.status(500).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
const updateCart = asyncHandler(async (req,res) => {
    try{
       const updatedCart = await Cart.findByIdAndUpdate(
           req.params.id,
           {
               $set: req.body,
           },
           {new:true}
       );
       res.status(500).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE CART
const deleteCart = asyncHandler(async (req,res) => {
    try{
        await Cart.findByIdAndDelete(
           req.params.id
       );
       res.status(500).json("Product has been deleted Successfully!!")
    }catch(err){
        res.status(500).json(err)
    }
})
//GET USER CART
const getCart = asyncHandler(async (req,res) => {
    try{
        const cart = await Cart.findOne({userId : req.params.userId});
       res.status(500).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CARTS
const getAllCarts = asyncHandler(async (req,res) => {
    
    try{
        const carts = await Cart.find();
        res.status(500).json(carts) 
       
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = {
    AddCart,
    updateCart,
    deleteCart,
    getCart,
    getAllCarts,
}