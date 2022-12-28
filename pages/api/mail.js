import nodemailer from "nodemailer";
import mailTemp from "../../src/component/mail-temp";

const sendMail = (message) => {
	return new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
			tls: {
				ciphers: "SSLv3",
			},
		});

		const { firstName, lastName, email, phone, billed, price, type } =
			JSON.parse(message);

		const mail_config = {
			from: process.env.EMAIL_USER,
			to: "Fritzlor.auguste@live.com",
			subject: "New Order",
			html: mailTemp(
				firstName,
				lastName,
				email,
				phone,
				billed,
				price,
				type
			),
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
