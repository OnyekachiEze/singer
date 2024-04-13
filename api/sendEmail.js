const nodemailer = require('nodemailer');

export default async function sendEmail(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure nodemailer to send email
        const transporter = nodemailer.createTransport({
            // Configure your email service provider here
            service: 'gmail',
            auth: {
                user: 'ezeonyekachi@gmail.com',
                pass: '242842'
            }
        });

        // Compose email message
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
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
