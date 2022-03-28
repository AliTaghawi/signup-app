import React,{useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import validate from './validate';
import styles from './SingUp.module.css';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(()=> {
    setErrors(validate(state , "loging"))
  }, [state, touched])
  
  const changHandelr = (event) => {
    setState({...state, [event.target.name]: event.target.value})
  }

  const focusHandeler = event => {
    setTouched({...touched, [event.target.name]: true})
  }

  const submitHandeler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      toast.success('You loged in successfully');
    } else {
      setTouched({
        email: true,
        password: true,
      });
      toast.error('Invalid data!!!');
    }
  }

  return (
    <div className={styles.container} >
      <form>
        <h2>Login</h2>
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
          <Link to='/singup'>SingUp</Link>
          <button type='submit' onClick={submitHandeler} >Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;