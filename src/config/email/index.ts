import dotenv from "dotenv"
import nodemailer from "nodemailer";

dotenv.config();


const transporter = nodemailer.createTransport({
    service: "email",
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,

    },

});
interface IDadodeEmail {
    to: string | string[];
    subject: string;
    html: string;
}
async function enviarEmail({
    to,
    subject,
    html,
}: IDadodeEmail) {
    await transporter.sendMail({
        from: "<expressrentacar@gmail.com>",
        to,
        subject,
        html
    });
}
export { enviarEmail }