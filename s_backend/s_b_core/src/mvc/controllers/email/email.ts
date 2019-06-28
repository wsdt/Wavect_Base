import * as nodemailer from "nodemailer"
import { EMAIL_PROVIDER, FROM, FROM_PWD, HTML, SUBJECT } from "./email.constants"

// Might throw a console error
const transporter = nodemailer.createTransport({
    service: EMAIL_PROVIDER,
    auth: {
        user: FROM,
        pass: FROM_PWD,
    },
})

export const sendEmailToSponsor = async (userEmail: string, sponsorEmail: string) => {
    const mailOptions = {
        from: FROM,
        to: sponsorEmail,
        subject: SUBJECT,
        html: HTML({ userEmail }),
    }

    const { err, info } = await transporter.sendMail(mailOptions)
    if (err) {
        console.error(err)
        return err
    } else {
        console.log("email:sendMail: Email sent -> " + info.response)
    }
    return null
}
