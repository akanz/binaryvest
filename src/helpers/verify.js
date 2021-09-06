import * as Yup from "yup";

const phoneExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const ssnExp = /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/;

export const validationSchema = Yup.object({
  phone_no: Yup.string().matches(phoneExp, "Phone Number is not valid"),
  ssn: Yup.string().matches(ssnExp, "SSN is invalid"),
  
});
