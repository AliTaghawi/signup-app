import React,{useState} from 'react';

const SingUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false
  })
  
  const changHandelr = (event) => {
    if (event.target.name === "isAccepted") {
      setState({...state, [event.target.name]: event.target.checked})
    } else {
      setState({...state, [event.target.name]: event.target.value})
    }
    console.log(state)
  }

  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={state.name} onChange={changHandelr} />
        </div>
        <div>
          <label>Email::</label>
          <input type="text" name="email" value={state.email} onChange={changHandelr} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={state.password} onChange={changHandelr} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={changHandelr} />
        </div>
        <div>
          <label>I accepte all tirms:</label>
          <input type="checkbox" name="isAccepted" value={state.isAccepted} onChange={changHandelr} />
        </div>
        <div>
          <a href='##'>Login</a>
          <button type='submit' >Creat</button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
