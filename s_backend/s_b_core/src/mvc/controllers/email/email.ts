import * as nodemailer from "nodemailer"
import {FROM, FROM_PWD, HTML, REPLY_TO, SMTP_PROVIDER, SUBJECT} from "./email.constants"

// Might throw a console error
const transporter = nodemailer.createTransport({
    host: SMTP_PROVIDER,
    port: 465,
    secure: true, // true for 465
    auth: {
        user: FROM,
        pass: FROM_PWD,
    },
})

export const sendEmailToSponsor = async (userEmail: string, sponsorEmail: string) => {
    const mailOptions = {
        from: FROM,
        cc: userEmail,
        replyTo: REPLY_TO,
        to: sponsorEmail,
        subject: SUBJECT,
        html: HTML({ userEmail }),
    }

    try {
        transporter.sendMail(mailOptions)
        console.log("email:sendMail: Email sent")
    } catch(e) {
        console.error("Email:sentEmailToSponsor: "+e)
        return e
    }
    return null
}
