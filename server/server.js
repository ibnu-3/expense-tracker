import express from 'express'
import cors from 'cors'
import colors from 'colors'
import 'dotenv/config'
import connectDB from './config/db.js'
import useRoutes from'./routes/useRoutes.js'

const app =express()

app.use(cors({
    origin:'https://crispy-guacamole-x5q45qwxq7xqhp4g-5173.app.github.dev',
    methods:['POST','GET','PUT','PATCH','OPTIONS','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true,
    optionsSuccessStatus:200 || 204,  
}))
app.use(express.json())
connectDB()

app.use('/api/users', useRoutes)

app.get('/', (req,res)=>{
    res.send('Server is running...')
})
const port =process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`.yellow.bold)
})