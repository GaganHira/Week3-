var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use (bodyParser.json());

app.use(express.static(__dirname +'/www'));

app.listen(3000,'127.0.0.1', function(){ 
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('server has been started at:'+n+ ':'+m);
});




app.get('/',function(req,res){
    res.sendFile(__dirname + '/www/form.html');
});




app.post('/api/login', function(req,res){
    let users = [{'email': 'abc@com.au', 'pwd': '123'},{'email': 'abd@com.au', 'pwd': '123'},{'email': 'abe@com.au', 'pwd': '123'}]

    if (!req.body) {
        return res.sendstatus(400)
    }
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
    for (let i=0; i<users.length;i++){
        if (req.body.email == users[i].email && req.body.upwd ==users[i].pwd){
            customer.valid = true;
        }
    }
        res.send(customer);
});





// var http = require('http').Server(app);
// app.use(express.static(__dirname +'/www'));

// let server = http.listen(3000, function(){
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log("My First Nodejs Server!");
//     console.log("Server Listening on:"+host+"port:" + port);
   
// });