// const mysql = require("mysql");
// var express = require("express");
// //var Joi =require("joi");
// var emprouter =  express();
//
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'manager',
//     database : 'mydatabase'
//   });
//   app.post('/auth', function(request, response) {
//     var username = request.body.username;
//     var password = request.body.password;
//     if (username && password) {
//       connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
//         if (results.length > 0) {
//           request.session.loggedin = true;
//           request.session.username = username;
//           response.redirect('/home');
//         } else {
//           response.send('Incorrect Username and/or Password!');
//         }
//         response.end();
//       });
//     } else {
//       response.send('Please enter Username and Password!');
//       response.end();
//     }
//   });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   // exports.register = function(req,res){
//   //   // console.log("req",req.body);
//   //   var today = new Date();
//   //   var users={
//   //     "first_name":req.body.first_name,
//   //     "last_name":req.body.last_name,
//   //     "email":req.body.email,
//   //     "password":req.body.password,
//   //     "created":today,
//   //     "modified":today
//   //   }
//   //   connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
//   //   if (error) {
//   //     console.log("error ocurred",error);
//   //     res.send({
//   //       "code":400,
//   //       "failed":"error ocurred"
//   //     })
//   //   }else{
//   //     console.log('The solution is: ', results);
//   //     res.send({
//   //       "code":200,
//   //       "success":"user registered sucessfully"
//   //         });
//   //   }
//   //   });
//   // }
