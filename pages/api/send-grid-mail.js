const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  
  const email = req.body

  const msg = {
      to: email,
      from: {
        email: 'GSdaBlessedFist@gmail.com',
        name: "jason"
      },
      templateId: "d-2de9ee6b657c4f1bba2338cc28bd67e1",
      dynamic_template_data:{
        recipientEmail : email,
        name: "Jogn"
      }
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