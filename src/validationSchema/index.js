import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z ]*$/, "Name must contain only alphabetic characters")
    .min(3, "Name must be at least 3 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .required("Age is required")
    .min(10, "Age must be at least 10")
    .max(99, "Age must be at most 99")
    .positive("Age must be a positive number"),

  gender: Yup.string().required("Gender is required"),
});
