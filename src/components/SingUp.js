import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import validate from './validate';

const SingUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(()=> {
    setErrors(validate(state))
    console.log(errors)
  }, [state, touched])
  
  const changHandelr = (event) => {
    if (event.target.name === "isAccepted") {
      setState({ ...state, [event.target.name]: event.target.checked });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  const focusHandeler = event => {
    setTouched({...touched, [event.target.name]: true})
  }

  const submitHandeler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(state);
      toast.success('You signed up successfully');
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true
      });
      toast.error('Invalid data!!!');
    }
  }

  return (
    <div style={{ display: "inline-block", width: "350px" }}>
      <form className="p-3">
        <h2>Sign Up</h2>
        <div className="form-group pt-2">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={changHandelr}
            className="form-control"
          />
        </div>
        <div className="form-group pt-2">
          <label>Email::</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={changHandelr}
            className="form-control"
          />
        </div>
        <div className="form-group pt-2">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={changHandelr}
            className="form-control"
          />
        </div>
        <div className="form-group pt-2">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={changHandelr}
            className="form-control"
          />
        </div>
        <div className="form-group pt-2">
          <input
            type="checkbox"
            name="isAccepted"
            value={state.isAccepted}
            onChange={changHandelr}
            className="form-check-input"
          />
          <label className="form-check-label">I accepte all terms</label>
        </div>
        <div className="d-flex justify-content-around pt-2">
          <a href="##">Login</a>
          <button type="submit" className="btn btn-primary">
            Creat
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
