import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'
import { Book } from './models/bookModels.js';
import booksRoutes from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors())

app.use('/books', booksRoutes)

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('MERN Study')
})

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("CONNECTED!")
        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    })