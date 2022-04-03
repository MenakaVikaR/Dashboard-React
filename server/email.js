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
  html: '<h1>Welcome to ika</h1><p>design your code change your life!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});