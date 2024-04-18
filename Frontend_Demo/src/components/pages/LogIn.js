import React, {useState} from 'react'
import LogInWindow from './../LogInWindow';
import { useNavigate } from "react-router-dom";

var check = 0
var check2 = 0
var check3 = 0

function LogIn(props) {
  const [errorMsg, setErrorMsg] = useState('');

  
const checkifsame = (User, user) => {
  if(User.username === user.username) {
    check = 1;
  }
    else {console.log('nothing')}
  
  if(User.password === user.password1 && User.username === user.username1) {
    check2 = 1;
  }
}


  const handleOnSubmitRegister = (user) => {
    
    props.users.map((User) => ( 
      checkifsame(User, user)
    ))
   
    if(check === 1){
      let errorMsg = 'Username in use!';
      setErrorMsg(errorMsg);
      console.log(errorMsg);
      check = 0;
    } else {
      props.setUsers([user, ...props.users]);  
    }
  };

///////////////////////////////////////////////////////

  const handleOnSubmitLogin = (user) => {

    props.users.map((User) => ( 
      checkifsame(User, user)
    ))

    if(check2 === 1) {
      props.setLogedinuser([user]);
      routeChange();
      check2 = 0;
    }
    else {
      let errorMsg = 'No such user!';
      setErrorMsg(errorMsg);
      console.log(errorMsg);
    }

    
  };

  //////////////////////////////////////////////////////

  const handleloggout = () => {
    props.setLogedinuser([]);
    let errorMsg = 'You are logged out!';
      setErrorMsg(errorMsg);
      console.log(errorMsg);
  }

  //////////////////////////////////////////////////////

  const checkifsamepass = (User, pas) => {
    if(User.password1 === pas){
      check3 = 1;
    }
  }

  const handleRemoveAcc = (password) => {

    props.logedinuser.map((User) => ( 
      checkifsamepass(User, password)
    ))

    if(check3 === 1) {
      props.setUsers(props.users.filter((user) => (user.password !== password) ));
      props.setLogedinuser([]);
      let errorMsg = 'User is removed!';
      setErrorMsg(errorMsg);
      console.log(errorMsg);
      check3 = 0;
    }
    else {
      let errorMsg = 'Wrong password! Or you are not logged in!';
      setErrorMsg(errorMsg);
      console.log(errorMsg);
    }
    
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }


  return (
    <React.Fragment>
      <LogInWindow handleOnSubmitRegister={handleOnSubmitRegister} handleOnSubmitLogin={handleOnSubmitLogin} handleRemoveAcc={handleRemoveAcc} handlelogout={handleloggout} />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </React.Fragment>
  );
};

export default LogIn

