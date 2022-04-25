const asyncHandler = require('express-async-handler')
//@desc get goals
//@route GET /api/goals
//@access  Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'Get Goals'})
})
//@desc set goals
//@route POST /api/goals
//@access  Private
const setGoal = asyncHandler (async (req,res) => {
    if(!req.body.text){
    res.status(400)
    throw new Error('Please Add a text field') 
    }
    res.status(200).json({message:'Set Goals'})
})

//@desc update goal
//@route PUT /api/goals/:id
//@access  Private
const updateGoal = asyncHandler (async (req,res) => {
    res.status(200).json({message:`update ${req.params.id}`})
})
//@desc delete goal
//@route delete /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler (async (req,res) => {
    res.status(200).json({message:`delete ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}