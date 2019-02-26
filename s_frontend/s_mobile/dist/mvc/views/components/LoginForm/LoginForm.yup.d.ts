import * as Yup from "yup";
declare const validationYupSchema: Yup.ObjectSchema<Yup.Shape<{}, {
    email: string;
    password: string;
}>>;
export default validationYupSchema;
