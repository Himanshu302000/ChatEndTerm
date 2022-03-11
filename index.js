const express=require('express');
var expressLayouts = require('express-ejs-layouts');
const path=require('path');
const app=express();

const db=require('./config/mongoose');

const router=require('./routes/index');
const port=8000;
const User=require('./models/user')

const chatS=require('./config/chat_sockets');
const chatServer=require('http').Server(app);
const chatSockets=chatS.chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat Server is listening on port 5000');

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.static('./assets'));
app.use(express.json())
app.use('/',router);
app.listen(port,function(){
    console.log(`server has started and it is running on port ${port}`);
})