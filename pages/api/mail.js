import nodemailer from "nodemailer";
import mailTemp from "../../src/component/mail-temp";

export default function handler(req, res) {
  const sendMail = (message) => {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        service: "gmail",
        secure: "true",
        port: 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const { firstName, lastName, email, phone, billed, price, type } =
        JSON.parse(message);

      const mail_config = {
        from: `E Vehicle Up <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Order",
        html: mailTemp(firstName, lastName, email, phone, billed, price, type),
      };

      transporter.sendMail(mail_config, (err, info) => {
        if (err) {
          return reject({ message: `an error has occurred` });
        }
        return resolve({ message: "mail was sent successfully" });
      });
    });
  };

  sendMail(req.body)
    .then((res) => console.log(res.message))
    .catch((err) => console.log(err.message));
  res.status(200).json({});
}
