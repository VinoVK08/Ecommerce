const express = require('express')
const dotenv = require('dotenv').config()
// const { errorHandler} = require('./middleware/errorMiddleware')
const mongoose = require('mongoose')
const port = process.env.PORT
const cors = require('cors')
mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connection is successful')).catch((err)=> console.log(err))
const app = express()

app.use(cors())

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/api/product', require('./routes/productRoutes'))
// app.use('/api/goals', require('./routes/goalRoutes'))
// app.use('/api/user', require('./routes/userRoutes'))

app.use('/api/order', require('./routes/orderRoutes'))
app.use('/api/cart', require('./routes/cartRoutes'))


// app.use(errorHandler)
app.listen(port, () => console.log(`server is running on port ${port}`))