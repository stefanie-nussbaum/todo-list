//type: module in pkg json
import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from './db/connection.js';

const app = express()
const PORT = process.env.PORT || 4567

// gives access to req.body
app.use(express.json())
app.use(cors())
//change after deploy and we know everything is working ('tiny')
app.use(morgan("dev"))

app.get("/", (req, res) => res.send("<h1>Hello, world</h1>"))

db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, console.log(`Connected to port: ${PORT}`))
})


