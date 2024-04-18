import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Raids from './components/pages/Raids'
import Dungeons from './components/pages/Dungeons'
import Destinations from './components/pages/Destiantions'
import SpecialEvents from './components/pages/SpecialEvents'
import Vanguard from './components/pages/Vanguard'
import Crucible from './components/pages/Crucible'
import Gambit from './components/pages/Gambit'
import LogIn from './components/pages/LogIn'
import useLocalStorage from './components/useLocalStorage';



function App() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [logedinuser, setLogedinuser] = useLocalStorage('loged in users', []);


  return (
    <>
    <Router>
      <Navbar logedinuser={logedinuser} setLogedinuser={setLogedinuser} />
        <Switch>
          <Route path='/' exact element={<Home/>} />
          <Route path='/raids' element={<Raids logedinuser={logedinuser} />} />
          <Route path='/dungeons' element={<Dungeons logedinuser={logedinuser} />} />
          <Route path='/destinations' element={<Destinations logedinuser={logedinuser} />} />
          <Route path='/specialevents' element={<SpecialEvents logedinuser={logedinuser} />} />
          <Route path='/vanguard' element={<Vanguard logedinuser={logedinuser} />} />
          <Route path='/crucible' element={<Crucible logedinuser={logedinuser} />} />
          <Route path='/gambit' element={<Gambit logedinuser={logedinuser} />} />
          <Route path='/log-in' element={<LogIn logedinuser={logedinuser} setLogedinuser={setLogedinuser} users={users} setUsers={setUsers}/>} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
