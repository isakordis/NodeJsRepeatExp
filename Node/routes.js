module.exports = function(app) {
    var MailController = require('./MailSend.js');
  
    // todoList Routes
    app.route('/send/mail')
      .get(MailController.sendMail);
  
  };