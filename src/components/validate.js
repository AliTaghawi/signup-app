const validate = (data, type) => {

  const errors = {};

  if (type === 'singup') {

    if (!data.name.trim()) {
      errors.name = "Name is requierd"
    } else {
      delete errors.name
    }
  
    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm the Password"
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password does not match"
    } else {
      delete errors.confirmPassword;
    }
  
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Please accepte all tirms"
    }

  }

  if (!data.email) {
    errors.email = "Email is requierd"
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid"
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required"
  } else if (data.password.length < 7) {
    errors.password = "Password must be more then 7 characters"
  } else {
    delete errors.password;
  }

  return errors
}
export default validate;