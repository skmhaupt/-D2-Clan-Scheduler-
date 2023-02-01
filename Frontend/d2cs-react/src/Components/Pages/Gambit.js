import '../../Styles/App.css';
import React, { useContext, useEffect, useState } from 'react'
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button';
import { LFGPage } from '../LFGPage';
import { UserContext } from "../../App.js";
import { GambitContext } from "../../App.js";
import { fetchData } from '../../App.js';


function Gambit() {
  const [click, setClick] = useState(false);
  let [storedActivity, setStoredActivity] = useState([]);
  let storedActivitys = useContext(GambitContext);
  const User = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    activityname: '',
    date: '',
    time: ''
  });


  /////////////////////////////////////////////////////////////////////////
  const remErMsg = () => {
    let errorMsg = '';
    setTimeout(function () { setErrorMsg(errorMsg); }, 2000);
  }


  /////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    setStoredActivity(storedActivitys);
    if (storedActivity.length === 0) {
      async function getData() {
        let jsondata = await fetchData();
        const GambitActivitys = jsondata.filter((activity) => activity.type === "Gambit");
        setStoredActivity(GambitActivitys);
        storedActivitys = GambitActivitys;
      };
      getData();
    }
  }, [onchange])


  const toggleNewFierteam = () => {
    if (User.name === undefined) {
      console.log('no user');
      let errorMsg = 'You are not logged in!';
      setErrorMsg(errorMsg);
      remErMsg();
    } else setClick(!click);
  }





  /////////////////////////////////////////////////////////////////////////

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };


  function checkProperties(obj) {
    let check = true;
    for (var key in obj) {
      const value = `${obj[key]}`.trim();
      if (value === null | value === "")
        check = false;
    }
    return check;
  }



  function sendData() {
    let payload = {
      id: uuidv4(),
      type: 'Gambit',
      creator: { id: User.id, name: User.name },
      name: form.activityname,
      date: '2012-04-23T18:25:43.511Z',
      players: [{ "id": User.id, "name": User.name }]
    };
    let data = JSON.stringify(payload);

    (async () => {
      const rawResponse = await fetch('http://localhost:5073/Activity', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      })
      //   .then((response) => response.text())
      //   .then((responseText) => {
      //     alert(responseText);
      //   });
      console.log(rawResponse);
    })();

    async function getData() {
      let jsondata = await fetchData();
      const GambitActivitys = jsondata.filter((activity) => activity.type === "Gambit");
      storedActivitys = GambitActivitys;
      console.log(storedActivitys);
      console.log(GambitActivitys);
    };
    getData();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorMsg = '';


    if (checkProperties(form)) {
      console.log("Full");
      console.log(form);

      try {
        sendData();
      } catch (error) {
        console.log(error);
      }

      setClick(!click);
    } else errorMsg = 'Please fill out all the fields.';
    setErrorMsg(errorMsg);
    remErMsg();
  };


  return (
    <>
      <div className='backgroundContainer'>
        <div className='gambitContainer pageContainer'>
          <Button onClick={toggleNewFierteam} name='NewFierteamButton' buttonStyle='btn--outline'>Create new Fireteam</Button>
          <h1 className='title'>Gambit</h1>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <div className={click ? 'popup active' : 'popup'}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="activityname">Activity name:</label><br></br>
                <input id="activityname" type="text" value={form.activityname} onChange={handleChange} placeholder='OOF!' />
              </div>
              <div>
                <label htmlFor="date">Date:</label><br></br>
                <input id='date' type="date" value={form.date} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="time">Time:</label><br></br>
                <input id='time' type="time" value={form.time} onChange={handleChange} />
              </div>
              <Button name="SubmitNewFierteamButton" type='submit' buttonStyle='btn--outline'>Create</Button>


            </form>
            <Button onClick={toggleNewFierteam} name="CancleNewFierteamButton" buttonStyle='btn--outline'>Cancel</Button>
          </div>
          <div className="canvas">
            {!_.isEmpty(storedActivitys) ? (
              storedActivitys.map((activitiy) => (
                <LFGPage activity={activitiy} key={activitiy.id} />
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

export default Gambit




// useEffect(() => {
//   // const button1 = document.getElementsByClassName("NewFierteamButton");
//   // button1[0].addEventListener('click', function () {
//   //   if (User.name === undefined) {
//   //     console.log('no user');
//   //     let errorMsg = 'You are not logged in!';
//   //     setErrorMsg(errorMsg);
//   //     remErMsg();
//   //   } else setClick(!click);
//   // });



//   const button2 = document.getElementsByClassName("CancleNewFierteamButton");
//   button2[0].addEventListener('click', function () {
//     if (User.name === undefined) {
//       console.log('no user');
//       let errorMsg = 'You are not logged in!';
//       setErrorMsg(errorMsg);
//       remErMsg();
//     } else setClick(!click);
//   });


//   const button3 = document.getElementsByClassName("SubmitNewFierteamButton");
//   button3[0].addEventListener('click', function () {
//     if (User.name === undefined) {
//       console.log('no user');
//       let errorMsg = 'You are not logged in!';
//       setErrorMsg(errorMsg);
//       remErMsg();
//     } else setClick(!click);
//   });
// }, []);






// useEffect(() => {
  //   const form = document.getElementsByTagName('form');
  //   // console.log(form[0]);
  //   //const button = document.getElementsByClassName("CreateNewFierteamButton");
  //   form[0].addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     //alert(formtest.activityname + ' ' + formtest.date + ' ' + formtest.time);
  //     console.log(formtest.activityname);
  //     console.log(formtest.date);
  //     console.log(formtest.time);
  //     // let values = [activityname, date, time];
  //     // //console.log(values);
  //     // let errorMsg = '';

  //     // const allFieldsFilled = values.every((field) => {
  //     //   const value = `${field}`.trim();
  //     //   return value !== '' && value !== '0';
  //     // });

  //     // if (allFieldsFilled) {
  //     //   const activity = {
  //     //     activityname,
  //     //     date,
  //     //     time
  //     //   };
  //     //   console.log(activity);
  //     //   values = [];
  //     //   console.log(activity);
  //     //   //   setStoredActivity([activity, ...storedActivity]);
  //     // } else {
  //     //   errorMsg = 'Please fill out all the fields.';
  //     // }
  //     // setErrorMsg(errorMsg);
  //     // remErMsg();
  //   });
  // }, []);