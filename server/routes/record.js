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


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("dashboarddb");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  // console.log('abcde');
  console.log('success');
  let db_connect = dbo.getDb();
  let myobj = {
    // person_name: req.body.name,
    // person_position: req.body.position,
    // person_level: req.body.level,
    Emp_Firstname: req.body.firstname,
    Emp_Lastname: req.body.lastname,
    Emp_Email: req.body.emailid,
    Emp_Mobileno: req.body.mobileno,
    Emp_Id: req.body.empno,
    Emp_Role: req.body.emprole,
    Emp_Date_of_joining: req.body.doj,
    Emp_Date_of_Brith: req.body.dob,
    Emp_Password: req.body.password,
    // Emp_Confirmpassword: req.body.confirmpassword,
  };
  console.log(myobj);
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document instered");
    response.json(res);
  });
  // window.location.reload();
});

// check database
recordRoutes.route("/records/check").post(function (req, res) {
  console.log(req.body.emailid);
  // console.log(res);
  console.log('enter database');
  let db_connect = dbo.getDb();
  let myobj = {
    Emp_Email: req.body.emailid,
    Emp_Password: req.body.password,
  };
  // console.log(myobj);
  var query = { Emp_Email: req.body.emailid, Emp_Password: req.body.password };
  // db_connect.collection("records").findOne({}, function(err, result) {
    db_connect.collection("records").find(query).toArray(function(err, result){
    if (err) throw err;
    console.log(db_connect);
    console.log('database');
    console.log(result);
    console.log('database');
    if(result!=''){
      console.log(result);
      // console.log(res);
      res.json(result);
      //return result;
      // return result.redirect('/dashboard');
    }
    else{
      console.log('error db data');
    }
    
    // db_connect.close();
  });
  // db_connect.collection("records").insertOne(myobj, function (err, res) {
  //   if (err) throw err;
  //   console.log("1 document instered");
  //   response.json(res);
  // });
  // window.location.reload();
});

// This section will help you get a list of all the records.
recordRoutes.route("/record/check").post(function (req, res) {
  let db_connect = dbo.getDb("dashboarddb");
  // let db_connect = dbo.getDb();
  // console.log('enter database');
  let myobj = {
    Emp_Email: req.body.emailid,
    Emp_Password: req.body.password,
  };
  console.log(myobj);
  var query = { Emp_Email: req.body.emailid, Emp_Password: req.body.password };
  // console.log(query);
  db_connect
    .collection("records")
    .findOne(query, (function (err, result) {
      // console.log(err, result);
      if (err) throw err;
      if(result!=''){
        console.log('successfully enter database record');
        //res.end(JSON.stringify(result));  
        
        // app.get('/check', function (req, res) {  
        //   res.sendFile( result );  
        // })
        res.json(result);
      //  recordRoutes.route("/check").get(function(req, res){
      //   if(result!=''){
      //     console.log('successfully enter database record');
      //     console.log(result);
      //     res.json(result);
      //   }
      //   else{
      //     console.log('error db data');
      //     res.json(result);
      //   }
      //   });
    }
    else{
      console.log('error db data');
    }
      // res.json(result);
    }));
    
    
});


// This section will help you create a new record.
recordRoutes.route("/record/editor").post(function (req, response) {
  // console.log('abcde');
  console.log('success');
  let db_connect = dbo.getDb();
  let myobj = {    
    Emp_Firstname: req.body.name,
    Emp_contentone: req.body.content,
    Emp_content: req.body.basicconf,
  };
  console.log(myobj);
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document instered");
    response.json(res);
  });
  // window.location.reload();
});

// This section will help you update a recor0l,,d by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  console.log('update');
  let newvalues = {
    $set: {
      // person_name: req.body.name,
      // person_position: req.body.position,
      // person_level: req.body.level,
      Emp_Firstname: req.body.firstname,
      Emp_Lastname: req.body.lastname,
      Emp_Email: req.body.emailid,
      Emp_Mobileno: req.body.mobileno,
      Emp_Id: req.body.empno,
      Emp_Role: req.body.emprole,
      Emp_Date_of_joining: req.body.doj,
      Emp_Date_of_Brith: req.body.dob,
      Emp_Password: req.body.password,
      // Emp_Confirmpassword: req.body.confirmpassword,
    },
  };
  // console.log(newvalues);
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you create a to send email.
function email(){
recordRoutes.route("/record/email").post(function (req, response) {
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
}
email();

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
  window.location.reload();
});

module.exports = recordRoutes;