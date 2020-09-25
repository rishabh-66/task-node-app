// const path = require("path");
// const path2=path.join(__dirname,"../.env")
// console.log(path2)
// const p = require('dotenv').config({
    
//     path:  path2
//   })
 
const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'
//console.log(p)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send(msg).then(() => {
//     //console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })

const sendWelcomeEmail = (email, name) => {

    const msg = {
        to: email,
        from: 'r.kukreja324@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    };

    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })

}

const sendCancelationEmail = (email, name) => {

    const msg = {
        to: email,
        from: 'r.kukreja324@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }

    sgMail.send(msg).then(() => {
        //console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}