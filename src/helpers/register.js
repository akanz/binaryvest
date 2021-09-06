import * as Yup from 'yup'


// Register page
export const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

export  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "It is too short")
      .max(23, "It is too long")
      .required("Please enter your First name"),
    lastname: Yup.string()
      .min(2, "It is too short")
      .max(23, "It is too long")
      .required("Please enter your Last name"),
    email: Yup.string()
      .email("Please input a valid email")
      .required("email is required"),
    username: Yup.string()
      .min(3, "It is too short")
      .max(23, "Max length reached ")
      .required("Enter a unique username"),
    password: Yup.string()
      .min(6, "Password is too short - should be 6 chars minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Confirm password"),
  });


  