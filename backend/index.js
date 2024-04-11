import express from 'express';
import cors from "cors";
import { user } from "./src/router/user.js";


const app = express();
app.use(cors());
app.use(express.json())
const PORT = 8080;

app.use("/users", user)

app.listen (PORT, (request, res)=>{
  console.log(`express server is working on ${PORT}`);
 })