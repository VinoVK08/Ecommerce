const asyncHandler = require('express-async-handler')
const Order = require('../models/order')

//CREATE    
const makeOrder = asyncHandler(async (req,res) => {
    const newOrder = new Order(req.body)
    try{
       const savedOrder = await newOrder.save();
       res.status(500).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})
//UPDATE
const updateOrder = asyncHandler(async (req,res) => {
    try{
       const updatedOrder = await Order.findByIdAndUpdate(
           req.params.id,
           {
               $set: req.body,
           },
           {new:true}
       );
       res.status(500).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE CART
const deleteOrder = asyncHandler(async (req,res) => {
    try{
        await Cart.findByIdAndDelete(
           req.params.id
       );
       res.status(500).json("Product has been deleted Successfully!!")
    }catch(err){
        res.status(500).json(err)
    }
})
//GET USER Orders
const getOrder = asyncHandler(async (req,res) => {
    try{
        const order = await Order.find({userId : req.params.userId});
       res.status(500).json(order)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL ORDERS
const getAllOrders = asyncHandler(async (req,res) => {
    
    try{
        const orders = await Order.find();
        res.status(500).json(orders) 
       
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = {
    makeOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders,
}