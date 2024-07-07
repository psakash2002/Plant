const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models//User');
require('dotenv').config();
const app= express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret='smbjsbkjgskjkaslkgsakag';

app.use(express.json());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req,res)=>{
    res.json('test ok');
});
app.post('/register',async(req, res)=>{
    const {username, email, password}=req.body;
    try{
        const userDoc = await User.create({
            username,
            email,
            password:bcrypt.hashSync(password, bcryptSalt)
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(422).json(e);
    }
    
});
app.post('/login', async (req, res)=>{
    const {username, password}=req.body;
    const userDoc=await User.findOne({username});
    if(userDoc){
        const passOk=bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            jwt.sign({username:userDoc.username, id:userDoc._id}, jwtSecret, {}, (err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json('pass ok'); 
            });
        }else{
            res.status(422).json('password not ok');
        }
    }else{
        res.json('not found');
    }
});
app.listen(4000);