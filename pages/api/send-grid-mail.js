const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  
  const email = req.body
  // console.log('body', email);
  const msg = {
      to: email,
      from: 'GSdaBlessedFist@gmail.com',
      subject: 'New Message!',
      html: `<div>${email}</div>`
    }
  try{
    sendgrid.send(msg).then(()=>{
      res.status(200).json({status: `Email sent`});
    })
  }catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
}