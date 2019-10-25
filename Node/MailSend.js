const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    auth: {
      user: 'aa4401e19f91b3',
      pass: 'b99b2b3bcaedf6'
    }
  });

const message = {
    from: 'isa-75f32e@inbox.mailtrap.io', // Sender address
    to: 'isa.kordis02@gmail.com',         // List of recipients
    subject: 'Yeni Deneme', // Subject line
    text: 'asdasdasd ' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});

module.exports=transport;