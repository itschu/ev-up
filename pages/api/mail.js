import nodemailer from "nodemailer";

const sendMail = (message) => {
	return new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			host: "smtpout.secureserver.net",
			port: 587,
			secure: false,
			auth: {
				user: "info@simpleerent.ca",
				pass: "SimpleeRent2021!",
			},
			tls: {
				ciphers: "SSLv3",
			},
		});

		const mail_config = {
			from: "bookingassistant@simpleerent.ca",
			to: "chucreates@gmail.com",
			subject: "ev-up test mail",
			text: message,
		};

		transporter.sendMail(mail_config, (err, info) => {
			if (err) {
				console.log(err);
				return reject({ message: `an error has occurred` });
			}
			return resolve({ message: "mail was sent successfully" });
		});
	});
};

export default function handler(req, res) {
	sendMail(req.body)
		.then((res) => console.log(res.message))
		.catch((err) => console.log(err.message));
	res.status(200).json({ name: "John Doe" });
}
