import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  repassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const fieldSchema = (fieldName) => {
  switch (fieldName) {
    case "email":
      return yup.string().email().required();
    case "password":
      return yup.string().required();
    case "repassword":
      return yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match");
        case "checked":
      return yup.boolean().required();
    default:
      throw new Error("field is not valid");
  }
};
