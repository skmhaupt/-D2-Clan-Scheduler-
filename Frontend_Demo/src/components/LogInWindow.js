import React, { useState } from 'react';
import { Button } from './Button';


const LogInWindow = (props) => {
    const [user, setUser] = useState({
    username: props.user ? props.user.username : '',
    password: props.user ? props.user.password : '',    
    username1: props.user ? props.user.username1 : '',    
    password1: props.user ? props.user.password1 : '',    
    password2: props.user ? props.user.password2 : '',    

  });


  const [errorMsg, setErrorMsg] = useState('');
  const { username, password, username1, password1, password2 } = user;

  ///////////////////////////////////////////////////////////

  const handleOnSubmitRegister = (event) => {
    event.preventDefault();
    const values = [username, password];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        username,
        password
      };

      props.handleOnSubmitRegister(user);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  //////////////////////////////////////////////////////////////

  const handleOnSubmitLogin = (event) => {
    event.preventDefault();
    const values = [username1, password1];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        username1,
        password1
      };
      props.handleOnSubmitLogin(user);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  ////////////////////////////////////////////////////////////////

  const handleOnSubmitRemove = (event) => {
    event.preventDefault();
    const values = [password2];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        password2
      };
      props.handleRemoveAcc(user.password2);
      
    } else {
      errorMsg = 'Please fill out the pasword fields.';
    }
    setErrorMsg(errorMsg);
  };

  ////////////////////////////////////////////////////////////////

  const handleLogout = () =>{
    props.handlelogout()
  }

  ////////////////////////////////////////////////////////////////

  const handleInputChange = (event) => {
    const { name, value } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: value
        }));
  };
 

  return (
    <div className='log-inContainer'>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <form onSubmit={handleOnSubmitRegister}>
            <label>
              <h2>Register name:</h2>
              <input type="text" name="username" value={username} onChange={handleInputChange} placeholder='Welcom!'/>
              <h2>Pasword:</h2>
              <input type="text" name="password" value={password} onChange={handleInputChange} placeholder='Dont forget this!'/>
            </label>
            <Button type='submit' buttonStyle='btn--outline'>Register</Button>
        </form>
        <form onSubmit={handleOnSubmitLogin}>
            <label>
              <h2>Player name:</h2>
              <input type="text" name="username1" value={username1} onChange={handleInputChange} placeholder='Welcom!'/>
              <h2>Pasword:</h2>
              <input type="text" name="password1" value={password1} onChange={handleInputChange} placeholder='Dont forget this!'/>
            </label>
            <Button type='submit' buttonStyle='btn--outline'>Login</Button>
        </form>
        <form onSubmit={handleOnSubmitRemove}>
            <label>
              <h2>Pasword:</h2>
              <input type="text" name="password2" value={password2} onChange={handleInputChange} placeholder='Dont forget this!'/>
            </label>
            <Button type='submit' buttonStyle='btn--outline'>Remove acc</Button>
        </form>
        <Button onClick={handleLogout} type='submit' buttonStyle='btn--outline'>Log out</Button>
    </div>
  );
};

export default LogInWindow;