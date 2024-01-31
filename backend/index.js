import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose'
import { Book } from './models/bookModels.js';
import booksRoutes from './routes/booksRoute.js'

const app = express();

app.use(express.json())

app.use('/books', booksRoutes)

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