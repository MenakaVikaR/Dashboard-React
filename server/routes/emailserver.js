const express = require("express");
var app = express(); 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you create a to send email.
recordRoutes.route("/emailserver/email").post(function (req, response) {
    let db_connect = dbo.getDb("dashboarddb");
    console.log('succesfully enter the email section');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    var queryemail = { Emp_Date_of_Brith: today };
    // db_connect
    //   .collection("records")
    //   .find(query)
    //   .toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     //let emailvar = JSON.stringify(Object.assign({}, result));
    //     //console.log(JSON.parse(emailvar));
    //     //console.log(result);
    //     response.json(result);
    //   });
    db_connect
      .collection("records")
      .findOne(queryemail, (function (err, result) {
        if (err) throw err;
        console.log(result);
          if(result!=''){
            var nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'menakar273@gmail.com',
                pass: 'menaruba@19'
              }
            });
            var mailOptions = {
              from: 'menakar273@gmail.com',
              to: 'risika234@gmail.com',
              subject: 'Sending Email using Node.js',
              // html: 'Name: '+req.body.firstname+' '+'Email: '+req.body.emailid+'Message: '+req.body.message,
              html: '<div><h3>Wish you Happy Birthday '+ req.body.firstname +', </h3></div><div><p>To all those years and many more to come, wishing you a very happy birthday dear [NAME]. For me it has been a great ride so far and it is my pleasure to have you in our team and especially in the project. This is your day so just, have fun and enjoy the day. Thank you</p></div>',
            };
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }
      }));
});