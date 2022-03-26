import React,{useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      setState({...state, [event.target.name]: event.target.checked})
    } else {
      setState({...state, [event.target.name]: event.target.value})
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
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={state.name} onChange={changHandelr} onFocus={focusHandeler} />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={state.email} onChange={changHandelr} onFocus={focusHandeler} />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={state.password} onChange={changHandelr} onFocus={focusHandeler} />
          {touched.password && errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={changHandelr} onFocus={focusHandeler} />
          {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div>
          <label>I accepte all tirms:</label>
          <input type="checkbox" name="isAccepted" value={state.isAccepted} onChange={changHandelr} onFocus={focusHandeler} />
          {touched.isAccepted && errors.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <div>
          <a href='##'>Login</a>
          <button type='submit' onClick={submitHandeler} >Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
