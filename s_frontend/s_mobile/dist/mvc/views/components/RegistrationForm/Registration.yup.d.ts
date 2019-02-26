import * as Yup from 'yup';
declare const validationScheme: Yup.ObjectSchema<Yup.Shape<{}, {
    firstname: string;
    lastname: string;
    email: string;
    emailCheck: string;
    pw: string;
    pwCheck: string;
}>>;
export default validationScheme;
