var express = require('express');
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://kkozemjakins:30032010Db@cluster0.e5izs5u.mongodb.net/Vizitkarte', {useNewUrlParser:true}, {useUnifiedTopology: true});

//create a data shema
const UserDataSchema ={
    username: String,
    password: String
};

const UserData = mongoose.model("UserData", UserDataSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let newUserData = new UserData({
        username: req.body.username,
        password: req.body.password
    })

    newUserData.save();
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running on 3000")
});