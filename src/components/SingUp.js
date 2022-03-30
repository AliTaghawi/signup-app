import React,{useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import validate from './validate';
import styles from './SingUp.module.css';

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
  const navigate = useNavigate()
  useEffect(()=> {
    setErrors(validate(state , 'singup'))
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
      toast.success('You signed up successfully')
      setTimeout(() => {
        navigate('/login')
      }, 6000)
      
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
    <div className={styles.container} >
      <form className={styles.formContainer}>
        <h2>SignUp</h2>
        <div className={styles.formField}>
          <label>Name:</label>
          <input 
          className={(touched.name && errors.name) ? styles.unCompleted : styles.formInput}
          type="text" 
          name="name" 
          value={state.name} 
          onChange={changHandelr} 
          onFocus={focusHandeler} />
          {touched.name && errors.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email:</label>
          <input 
          className={(touched.email && errors.email) ? styles.unCompleted : styles.formInput}
          type="text" 
          name="email" 
          value={state.email} 
          onChange={changHandelr} 
          onFocus={focusHandeler} />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password:</label>
          <input 
          className={(touched.password && errors.password) ? styles.unCompleted : styles.formInput}
          type="password" 
          name="password" 
          value={state.password} 
          onChange={changHandelr} 
          onFocus={focusHandeler} />
          {touched.password && errors.password && <span>{errors.password}</span>}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password:</label>
          <input 
          className={(touched.confirmPassword && errors.confirmPassword) ? styles.unCompleted : styles.formInput}
          type="password" 
          name="confirmPassword" 
          value={state.confirmPassword} 
          onChange={changHandelr} 
          onFocus={focusHandeler} />
          {touched.confirmPassword && errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkboxField}>
          <label htmlFor='isAccepted'>I accepte all tirms:</label>
          <input 
          type="checkbox" 
          id='isAccepted' 
          name="isAccepted" 
          value={state.isAccepted} 
          onChange={changHandelr} 
          onFocus={focusHandeler} />
          </div>
          {touched.isAccepted && errors.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <div className={styles.buttonsField}>
          <Link to='/login'>Login</Link>
          <button type='submit' onClick={submitHandeler} >Sing Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;