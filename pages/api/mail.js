import nodemailer from "nodemailer";
import mailTemp from "../../src/component/mail-temp";

const sendMail = (message) => {
	return new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			host: "server188.web-hosting.com",
			port: 465,
			secure: true,
			auth: {
				// user: "info@simpleerent.ca",
				user: "evup@peculyn.online",
				// pass: "SimpleeRent2021!",
				pass: "0d-Q&?!w;z7c",
			},
			tls: {
				ciphers: "SSLv3",
			},
		});

		const { firstName, lastName, email, phone, billed, price, type } =
			JSON.parse(message);

		const mail_config = {
			from: "evup@peculyn.online",
			// to: "chucreates@gmail.com",
			to: "Fritzlor.auguste@live.com",
			subject: "ev-up test mail",
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
