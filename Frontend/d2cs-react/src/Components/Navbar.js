import '../Styles/Navbar.css'
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { UserContext } from "../App.js"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    let logintext = ''
    const User = useContext(UserContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    if (User.name == []) {
        logintext = 'Log In';

    } else {
        logintext = User.name;
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo full-text" onClick={closeMobileMenu}>
                        D2 CLAN SCHEDULER
                    </Link>
                    <Link to="/" className="navbar-logo short-text" onClick={closeMobileMenu}>
                        D2CS
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/raids' className='nav-links' onClick={closeMobileMenu}>
                                Raids
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/dungeons' className='nav-links' onClick={closeMobileMenu}>
                                Dungeons
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/destinations' className='nav-links' onClick={closeMobileMenu}>
                                Destinations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/specialevents' className='nav-links' onClick={closeMobileMenu}>
                                Special Events
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/vanguard' className='nav-links botom' onClick={closeMobileMenu}>
                                Vanguard
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/crucible' className='nav-links botom' onClick={closeMobileMenu}>
                                Crucible
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gambit' className='nav-links botom' onClick={closeMobileMenu}>
                                Gambit
                            </Link>
                        </li>
                        <li>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                {logintext}
                            </Link>
                        </li>
                    </ul>
                    {button && <Button purpose='destination' destination='log-in' buttonStyle='btn--outline'>{logintext}</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar