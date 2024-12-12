import express from "express"
import { validateMiddleware } from "./src/middleware/validateMiddleware.js";
import { ageMiddleware } from "./src/middleware/ageMiddleware.js";
import { capitelLetter, favoriteBandsSort, convertToNum } from "./src/middleware/sanitizeMiddleware.js";
const app=express();
app.use(express.json());
app.post("/validateUser", validateMiddleware ,ageMiddleware,(req,res)=>{

res.status(200).json({ message: "User is valid."});

});

//Task-6
app.post("/sanitizeUser", capitelLetter, favoriteBandsSort, convertToNum,(req,res)=>{
    res.status(200).json(req.body);
})

app.listen("3000",()=>{
    console.log("The Server is started")})


