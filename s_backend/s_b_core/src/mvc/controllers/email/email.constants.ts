import {IEmailHtmlProps} from "./emailHtml.props"

export const EMAIL_PROVIDER:string = "gmail"
export const FROM:string = "kevin.riedl.privat@gmail.com"
export const FROM_PWD:string = "459145914591"
export const SUBJECT:string = "A user solved your challenge"
export const HTML = (props:IEmailHtmlProps)=> {
    return`<h1>Challenge solved</h1>
    <p>First of all, thank you for using our service! Secondly, we have great news for you! 
    Your last published challenge has been solved by one of our users.</p>
    <p>As you sponsored our current challenge, you may want to get in touch with following user: <strong>${props.userEmail}</strong></p>
    <p>Thus, please contact the user above and arrange all details necessary to settle your obligation. E.g. if you sponsored our challenge
    with a rebate, then firmly submit the associated rebate-code. In case you offered a give-away you may want to raffle the announced products
    amongst all challenge-solvers.</p>
    <p>Please note that you are <strong>not</strong> allowed to use the submitted e-mail address for other purposes than mentioned above. Otherwise
    you may face a GDPR violation.</p>
    <p>We take feedback seriously. Please let us know, what should be improved: <a href="mailto:${FROM}">${FROM}</a></p>
    <p>Yours sincerely</p>
    <p>Your Wavect-Team</p>
`}