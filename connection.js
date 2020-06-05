const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    hostname:'localhost',
    user:'root',
    password:'password',
    database:'example',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log(err);
        console.log('Connection Failed');
    }
})

module.exports = mysqlConnection;