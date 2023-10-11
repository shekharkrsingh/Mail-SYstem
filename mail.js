const nodeMailer = require('nodemailer');

const mailsend = async () => {
    try {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'roninryangaming@gmail.com',
                pass: 'wqfxuolbzktjlrhr',
            }
        });

        // Send the email
        let info = await transporter.sendMail({
            from: "a'dljfoadf", // Replace with your desired "from" name
            to: 'shekharkrsingh6432@gmail.com',     // Receiver's email address
            subject: 'as;dfhahs', // Subject of the email (should be a string)
            html: '<h1> ladf adhad adsfa dsf saf ad f sd adsadsfsd afsadf af asdfasd f sdafasdf asd saf</h1>'      // HTML content of the email
        });

        console.log('Email sent:', info.response);
        return info;
    } catch (err) {
        // Handle the error
        console.error(err.message);
        throw err; // You might want to throw the error to handle it elsewhere
    }
}

// Call the function to send the email
mailsend();
