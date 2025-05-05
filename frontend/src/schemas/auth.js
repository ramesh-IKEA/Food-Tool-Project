import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().required('Enter user name'),
  password: yup.string().required('Please enter password'),
});
export const passwordSchema = yup.object().shape({
  password: yup.string().required('Please enter password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmPassword: yup.string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match')
});
export const createUsers = yup.object().shape({
  name: yup.string().required('Please enter name'),
  email: yup.string().required('Please enter Email ID').email("Invalid email format"),
  short_id: yup.string().required('Please enter Short ID').min(5,'Please enter correct Short ID'),
  user_function: yup.string().required('Please select user function'),
  unit_id: yup.string().required('Please select unit'),

});