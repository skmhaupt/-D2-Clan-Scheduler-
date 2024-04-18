import React, { useState } from 'react'
import { Button } from '../Button';
import { LFGPage } from '../LFGPage';
import useLocalStorage from './../useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import '../../App.css'

function Destinations(props) {
  const [storedActivity, setStoredActivity] = useLocalStorage('Destination_Activities', []);

  const [activity, setActivity] = useState({
    activityname: props.activity ? props.activity.activityname : '',
    date: props.acativity ? props.activity.date : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { activityname, date } = activity;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [activityname, date];
    let errorMsg = '';

  const allFieldsFilled = values.every((field) => {
    const value = `${field}`.trim();
    return value !== '' && value !== '0';
  });

  if (allFieldsFilled) {
      const activity = {
        id: uuidv4(),
        activityname,
        date
      };
      console.log(activity);
      setStoredActivity([ activity, ...storedActivity]);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'activitiyname':
          setActivity((prevState) => ({
            ...prevState,
            [name]: value
          }));
        break;
      default:
        setActivity((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };  

  const handleRemoveActivity = (id) => {
    setStoredActivity(storedActivity.filter((acativity) => acativity.id !== id));
  };

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeWindow = () => setClick(false);


  return (
    <>
      <div className='backgroundContainer'>
      <div className='destinationsContainer pageContainer'>
        <Button onClick={handleClick} buttonStyle='btn--outline'>Create new Fireteam</Button>
        <h1 className='crucible'>Destinations</h1>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className={click? 'popup active' : 'popup'}>
          <div className="popup-icon" onClick={closeWindow}>
            <i className='fas fa-times'/>
          </div>
          <form onSubmit={handleOnSubmit}>
            <label>
              <h3>Activity name:</h3>
              <input onChange={handleInputChange} type="text" name="activityname" value={activityname} placeholder='What will it be?'/>
              <h3>Date:</h3>
              <input onChange={handleInputChange} type="Date" name='date' value={date}/>
            </label>
            <div className="buttonContainer">
              <Button onClick={closeWindow} type='submit' buttonStyle='btn--outline'>Create</Button>
            </div>
          </form>
          <Button onClick={closeWindow} buttonStyle='btn--outline'>Cancel</Button>
        </div>
        <div className="canvas">
        {!_.isEmpty(storedActivity) ? (
          storedActivity.map((activitiyname) => (
            <LFGPage storedActivity={storedActivity} setStoredActivity={setStoredActivity} logedinuser={props.logedinuser} specialId={activitiyname.id} key={activitiyname.id} {...activitiyname} handleRemoveActivity={handleRemoveActivity} />
          ))
        ) : (
          <p className="message">No activity available. Please add one.</p>
        )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Destinations