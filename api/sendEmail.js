const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ezeonyekachipaul@gmail.com', // Your email address
        pass: '242842' // Your email password or app-specific password
    }
});

const mailOptions = {
    from: `${name} <${email}>`,
    to: 'recipient@example.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
};

try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
} catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email. Please try again later.');
}
