import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import databaseConnection from './db.js'
import signupRouter from './Routes/Signup.js'
import { emailVerificationRouter } from './Routes/EmailConfirmation.js'
import { loginRouter } from './Routes/Login.js'
import { forgotRouter } from './Routes/Forgot.js'

// initializing the server using express
const app = express()


// dotenv configuration
dotenv.config()


// DataBase Connection
databaseConnection()


// Middle Wares
app.use(express.json())
app.use(cors())

// Routers
// signup router
app.use("/signup",signupRouter)

// email verifing router
app.use("/verify",emailVerificationRouter)

// login router
app.use("/login",loginRouter)

// forgot Router
app.use("/forgot",forgotRouter)



// local host
app.listen(process.env.PORT,()=>console.log(`server started at ${process.env.PORT}`))