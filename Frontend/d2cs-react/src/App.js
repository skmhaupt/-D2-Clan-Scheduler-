import './Styles/App.css'
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home'
import Gambit from './Components/Pages/Gambit'

export const UserContext = createContext(null);
export const GambitContext = createContext(null);

export const fetchData = async () => {
  let data = await fetch("http://localhost:5073/Activitys");
  let dataJson = await data.json();
  return dataJson;
}

function App() {
  const [storedGambitActivitys, setStoredGambitActivitys] = useState([]);
  const logedInUser = {
    id: 4,
    name: 'seb'
  }

  useEffect(() => {
    async function getData() {
      let jsondata = await fetchData();
      console.log(jsondata);
      const GambitActivitys = jsondata.filter((activity) => activity.type === "Gambit");
      console.log(GambitActivitys);
      setStoredGambitActivitys(GambitActivitys);
    };
    getData();
  }, [])



  return (
    <UserContext.Provider value={logedInUser}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact element={<Home />} />
          <Route path='/gambit' element={
            <GambitContext.Provider value={storedGambitActivitys}>
              <Gambit />
            </GambitContext.Provider>
          } />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
