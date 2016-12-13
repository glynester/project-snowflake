import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';


Meteor.startup(function() {
  process.env.MAIL_URL='smtp://postmaster%40sandbox467cfd33c95840e2926f51d397112a40.mailgun.org:a402a344997c8b9cc02d637c04e2211c@smtp.mailgun.org:587';
  // Accounts.config({
  //   sendVerificationEmail:true
  // });
  // Accounts.emailTemplates.from='no-reply@snowflake.com';
  // Accounts.emailTemplates.sitename='Snowflake';
  //
  // Accounts.emailTemplates.verifyEmail.subject  = function(user) {
  //         return 'Please confirm you want to join Snowflake!!';
  // };
  // Accounts.emailTemplates.verifyEmail.text = function(user, url) {
  //         return 'Please click on the link to sign up and start doing good! '  + url;
  // };
});


Meteor.methods({
  sendEmail: function (to, cc, subject, text) {
    check([to, subject, text], [String]);
    this.unblock();
    Email.send({
      to: to,
      from: 'no-reply@snowflake.com',
      cc: cc,
      subject: subject,
      text: text
    });
  }
});
