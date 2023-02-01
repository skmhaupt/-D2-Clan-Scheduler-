import '../Styles/LFGPage.css'
import React, { useState, useContext } from 'react'
import { Button } from './Button';
import { PlayerContainer } from './PlayerContainer';
import { UserContext } from "../App.js"

export const LFGPage = ({
  activity
}) => {

  const User = useContext(UserContext);
  const { newActivityname, newDate } = activity;
  const [errorMsg, setErrorMsg] = useState('');
  const [edit, setEdit] = useState(false);
  const closeEdit = () => setEdit(false);

  //////////////////////////////////////////////////////////////
  const remErMsg = () => {
    let errorMsg = '';
    setTimeout(function () { setErrorMsg(errorMsg); }, 2000);
  }

  //////////////////////////////////////////////////////////////
  const handleOnJoin = () => {
    if (User.name === undefined) {    //Will probably have to change
      let errorMsg = 'You are not logged in!';
      setErrorMsg(errorMsg);
      remErMsg();
    } else {
      const check = activity.players.filter((player) => (player.name === User.name && player.id === User.id));

      let errorMsg = '';

      if (check.length === 0) {
        console.log(User.name)        //To Add action on join!!!!!!
      } else {
        errorMsg = 'You already joined'
        setErrorMsg(errorMsg);
        remErMsg();
        console.log('Already joined')
      }
    }
  }

  ////////////////////////////////////////////////////////////////
  const handleLeave = () => {
    if (User.name === undefined) {    //Will probably have to change
      let errorMsg = 'You are not logged in!';
      setErrorMsg(errorMsg);
      remErMsg();
    } else {
      const check = activity.players.filter((player) => (player.name === User.name && player.id === User.id));
      if (check.length === 0) {
        let errorMsg = 'You have yet to join'
        setErrorMsg(errorMsg);
        remErMsg();
        console.log('You have yet to join')
      } else {
        console.log(User.name)        //To Add action on leave!!!!!!
      }
    }
  }

  /////////////////////////////////////////////////////////////////
  const handleEditButtonClicked = () => {
    if (activity.creator.id === User.id && activity.creator.name === User.name) {
      console.log('pen clicked');
      setEdit(!edit)
    } else {
      let errorMsg = 'You are not the creator!';
      setErrorMsg(errorMsg);
      remErMsg();
      console.log('You are not the creator!')
    }
  }



  /////////////////////////////////////////////////

  // const [activity, setActivity] = useState({
  //   id: specialId,
  //   activityname: activityname,
  //   date: date
  // });


  const handleRemoveActivity = (event) => {
    if (activity.creator.id === User.id && activity.creator.name === User.name) {
      console.log('Removing act');
    } else {
      let errorMsg = 'You are not the creator!';
      setErrorMsg(errorMsg);
      remErMsg();
      console.log('You are not the creator!')
    }
  }

  const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   switch (name) {
    //     case 'activitiyname':
    //       setActivity((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //       }));
    //       console.log(activity)
    //       break;
    //     default:
    //       setActivity((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //       }));
    //       console.log(activity)
    //   }
  };

  const handleSubmitEditclicked = () => {
    //   //const activityToEdit = storedActivity.find((activity) => activity.id === specialId);
    //   const filteredactivity = storedActivity.filter((activity) => activity.id !== specialId);
    //   setStoredActivity([activity, ...filteredactivity]);
  }



  /////////////////////////////////////////////////

  return (
    <div className="lfgPageContainer">
      <div className={edit ? 'editContainer active' : 'editContainer'}>
        <h2>Edit activity</h2>
        <form >
          <label>
            <h4>New activity name:</h4>
            <input onChange={handleInputChange} type="text" name="activityname" value={newActivityname} placeholder='OOF!' />
            <h4>New date:</h4>
            <input onChange={handleInputChange} type="Date" name='date' value={newDate} />
          </label>
          <div className="buttonContainer">
            <Button onClick={handleSubmitEditclicked} type='submit' buttonStyle='btn--outline'>Change</Button>
          </div>
        </form>
        <Button onClick={closeEdit} buttonStyle='btn--outline'>Cancel</Button>
      </div>
      <h2>Activity: {activity.name}</h2>
      <h2>Date: {activity.date}</h2>
      <h2>Players: </h2>
      <div className='playersContainer'>
        {activity.players.map((player) => (
          <PlayerContainer key={player.id} playername={player.name} />
        ))}
      </div>
      <div className='buttonContainer'>
        <Button onClick={handleOnJoin} type='submit' buttonStyle='btn--outline'>Join</Button>
        <Button onClick={handleLeave} type='submit' buttonStyle='btn--outline'>Leave</Button>
        <Button onClick={handleRemoveActivity} variant='danger' buttonStyle='btn--outline'>Delete</Button>
      </div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <i onClick={handleEditButtonClicked} className='fa-solid fa-pen'></i>
    </div>
  );
};

