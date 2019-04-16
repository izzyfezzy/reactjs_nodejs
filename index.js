const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/email', (req, res) => {
    res.send({ hi: 'there'});
});

app.post('/api/email', (req, res) =>{
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Firstname: ${req.body.user.fname}</li>
            <li>Lastname: ${req.body.user.lname}</li>
            <li>Email: ${req.body.user.email}</li>            
        </ul>
        <h3>Message</h3>
        <p>${req.body.user.msg}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {            
                type: 'OAuth2',
                clientId: '561216140921-p7h947jv65dfocu9rqf8lkb9qkoeci6i.apps.googleusercontent.com',
                clientSecret: '5MQmnw3sh-A5GpTLjjMj4Kpb'                            
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'Errand Contact <kingdavidtaiwo5@gmail.com>', // sender address
        to: 'izzyfezzy@yahoo.com', // list of receiver(s)
        subject: 'New message from Agkolchipserrands', // subject line
        text: 'Hello world', // plain text body
        html: output, // html body
        auth: {
            user: "kingdavidtaiwo5@gmail.com",
            refreshToken: '1/DtypvNDtcNlz4LsAFN5fe8JMOGPq0OPfm3IcCus_KcY',
            accessToken: 'ya29.GlvgBrJoWy16MEWTd3k92u7r-6_N--N-clYZCL_SfPU1fFQqPoBaRAun7E_EeecMCO_Ebp6xNwrs5DO9SPJ2skEUdbHIk5z8mcsB4l9MQUZFxMNsqGDdC6LopuqI'
        }
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, res) {
        if(err) {
            console.log(err);
        }else {
            console.log(res);
        }
    })
});

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8880;

app.listen(PORT, () => console.log(`Application listening on port ${PORT}`));