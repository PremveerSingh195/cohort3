import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(express.json( ))

app.post("/deploy" , (req , res ) => {
    const repourl = req.body.repourl
    console.log(repourl);
    

    res.json()
})

app.listen(3000);