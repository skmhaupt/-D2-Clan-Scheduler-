import React, {useState} from 'react'
import { Button } from './Button';
import useLocalStorage from './useLocalStorage';
import './LFGPage.css'
import PlayerContainer from './PlayerContainer';


var ch = 0
export const LFGPage =({
    id,
    activityname,
    date,
    handleRemoveActivity,
    logedinuser,
    specialId,
    storedActivity,
    setStoredActivity
}) => {
    
    const [errorMsg, setErrorMsg] = useState('');

    const [storedPlayers, setStoredPlayers] = useLocalStorage(specialId, []);
   
const checkName = (name, loginname) => {
    if(name === loginname) ch = 1;
}

//////////////////////////////////////////////////////////////

const handleOnJoin = () => {
    storedPlayers.map((name) => (
        checkName(name, logedinuser[0].username1)
    ))
    let errorMsg = '';
    if(logedinuser.length === 0) {
        errorMsg = 'You are not loged in'
        setErrorMsg(errorMsg);
        console.log('Not loged in')
    }else if (ch === 1) {
        errorMsg = 'You already joined'
        setErrorMsg(errorMsg);
        console.log('Already joined')
        ch = 0;
    }else {
        console.log(logedinuser[0])
        setStoredPlayers([ logedinuser[0].username1, ...storedPlayers])
    }
}

////////////////////////////////////////////////////////////////

const handleLeave = () => {
    setStoredPlayers(storedPlayers.filter((name) => name !== logedinuser[0].username1))
}

/////////////////////////////////////////////////////////////////

const [edit, setEdit] = useState(false);
const closeEdit = () => setEdit(false);
  

const handleEdit = () => {
    console.log('pen clicked');
    console.log(storedActivity)
    setEdit(!edit)
}

/////////////////////////////////////////////////

const [activity, setActivity] = useState({
    id: specialId,
    activityname: activityname,
    date: date
});
  
const { activityname5, date5 } = activity;

const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'activitiyname':
          setActivity((prevState) => ({
            ...prevState,
            [name]: value
          }));
          console.log(activity)
        break;
      default:
        setActivity((prevState) => ({
          ...prevState,
          [name]: value
        }));
        console.log(activity)
    }
  };

  const editclicked = () => {
    const activityToEdit = storedActivity.find((activity) => activity.id === specialId);
    const filteredactivity = storedActivity.filter((activity) => activity.id !== specialId);
    setStoredActivity([activity, ...filteredactivity]);
  }

/////////////////////////////////////////////////

return (
    <div className="lfgPageContainer">
        <div className={edit? 'editContainer active' : 'editContainer'}>
            <h2>Edit activity</h2>
            <form >
              <label>
                <h4>New activity name:</h4>
                <input onChange={handleInputChange} type="text" name="activityname" value={activityname5} placeholder='OOF!'/>
                <h4>New date:</h4>
                <input onChange={handleInputChange} type="Date" name='date' value={date5}/>
              </label>
              <div className="buttonContainer">
                <Button onClick={editclicked} type='submit' buttonStyle='btn--outline'>Change</Button>
              </div>
            </form>
            <Button onClick={closeEdit} buttonStyle='btn--outline'>Cancel</Button>
        </div>
        <h2>Activity: {activityname}</h2> 
        <h2>Date: {date}</h2>
        <h2>Players: </h2>
        <div className='playersContainer'>
        {storedPlayers.map((player) => (
            <PlayerContainer key={player} {...player} playername={player} />
        ))}
        </div>
        <div className='buttonContainer'>
            <Button onClick={handleOnJoin} type='submit' buttonStyle='btn--outline'>Join</Button>
            <Button onClick={handleLeave} type='submit' buttonStyle='btn--outline'>Leave</Button>
            <Button onClick={() => handleRemoveActivity(id)} variant='danger' buttonStyle='btn--outline'>Delete</Button>
        </div>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <i onClick={handleEdit} className='fa-solid fa-pen'></i>
    </div>
);
};

