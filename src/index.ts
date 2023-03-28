import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'

const server = express()
dotenv.config();
const port = process.env.PORT || 5000


server.use(express.json());
server.use(cors());

server.get('/',(req,res)=>{
    return res.send("Backend")
})

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

