import * as Yup from 'yup'

export const schemaRegister = Yup.object ({
  username : Yup.string().required("Username is required"),
  password : Yup.string().required("Password is requird"),
  confirmPassword : Yup.string().oneOf([Yup.ref("password"),]),
})