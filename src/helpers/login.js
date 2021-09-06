import * as Yup from 'yup'

//   login page
export const initialValues = {
    username: "",
    password: "",
  };

export const validationSchema = Yup.object({
    username: Yup.string().required("Enter a valid email"),
    password: Yup.string()
      .min(6, "Password is too short - should be 6 chars minimum")
      .required("Password is required"),
  });