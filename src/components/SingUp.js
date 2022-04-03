import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAccepted: false,
};
const SingUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Email is Invalid!").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password should be 8 chars minimum!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required!"),
    isAccepted: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      toast.success("You signed up successfully");
      console.log(values);
    },
    validationSchema,
  });
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   isAccepted: false,
  // });
  // const [errors, setErrors] = useState({});
  // const [touched, setTouched] = useState({});

  // useEffect(() => {
  //   setErrors(validate(state));
  //   console.log(errors);
  // }, [state, touched]);

  // const changHandelr = (event) => {
  //   if (event.target.name === "isAccepted") {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //   } else {
  //     setState({ ...state, [event.target.name]: event.target.value });
  //   }
  // };

  // const focusHandeler = (event) => {
  //   setTouched({ ...touched, [event.target.name]: true });
  // };

  // const submitHandeler = (event) => {
  //   event.preventDefault();
  //   if (!Object.keys(errors).length) {
  //     console.log(state);
  //     toast.success("You signed up successfully");
  //   } else {
  //     setTouched({
  //       name: true,
  //       email: true,
  //       password: true,
  //       confirmPassword: true,
  //       isAccepted: true,
  //     });
  //     toast.error("Invalid data!!!");
  //   }
  // };

  return (
    <div
      className="shadow-sm mt-5"
      style={{ display: "inline-block", width: "350px" }}
    >
      <form className="p-3" onSubmit={formik.handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group pt-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-danger text-left">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group pt-2">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group pt-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-danger">{formik.errors.password}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group pt-2">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <span className="text-danger">{formik.errors.confirmPassword}</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-group pt-2 d-flex justify-content-center">
          <input
            type="checkbox"
            name="isAccepted"
            value={formik.values.isAccepted}
            onChange={formik.handleChange}
            className="form-check-input my-2 d-flex flex-column justify-content-center px-1"
            onBlur={formik.handleBlur}
          />
          <label className="form-check-label d-flex flex-column justify-content-center px-1">
            I accepte all terms
          </label>
        </div>
        {formik.touched.isAccepted && formik.errors.isAccepted ? (
            <p className="text-danger">{formik.errors.isAccepted}</p>
          ) : (
            ""
          )}
        <div className="d-flex justify-content-around pt-2 my-3">
          <a href="##">Login</a>
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
