
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import localStorage from '../services/localStorage'
import logo from '../images/ikea-logo.f7d9229f806b59ec64cb.svg'
const Header = () => {
  const [menuDispaly, setMenuDisplay] = React.useState('none')
  const superUsers = ['chaitali.jadhav@ingka.ikea.com'];
  const userEmail = localStorage.get('user_email');
  const showMobileMenu = () => {
    setMenuDisplay(menuDispaly == 'none' ? 'block' : 'none')
  }
  const location = useLocation();
  const logout = () => {
    localStorage.remove('user-token');
    localStorage.remove('user-unit');
    localStorage.remove('user-function');
    localStorage.remove('user_email');
    localStorage.remove('user-store-id');
    localStorage.remove('x-access-token');
    window.location.href = "/login"
  }
  const userLink = () => {
    return superUsers.includes(userEmail) ? 'block' : 'none';
  }
  const state = {
    AuthStatus: localStorage.get('user-token') ? true : false,
    userUnit: localStorage.get('user-unit'),

    menu: {
      'store': [
        <li key="nav-1" className="nav-item">
          <Link className={location.pathname === '/create_case' ? 'nav-link active_nav_font' : 'nav-link'} to="/create_case">Create case</Link>
        </li>,
        <li key="nav-2" className="nav-item">
          <Link className={location.pathname === '/case_list' ? 'nav-link active_nav_font' : 'nav-link'} to="/case_list">Cases list</Link>
        </li>,
        <li key="nav-3" className="nav-item">
          <Link className={location.pathname === '/case_associated' ? 'nav-link active_nav_font' : 'nav-link'} to="/case_associated">Associated Cases</Link>
        </li>,
        <li key="nav-4" className="nav-item">
          <Link className={location.pathname === '/update_password' ? 'nav-link active_nav_font' : 'nav-link'} to="/update_password" >Update Password</Link>
        </li>,
        <li key="nav-5" className="nav-item">
          <Link className="nav-link pull-right" onClick={logout} >Logout ({localStorage.get('user_email')})</Link>
        </li>
      ],
      'SO': [
        <li key="nav-6" className="nav-item">
          <Link className={location.pathname.includes('dashboard') ? 'nav-link active_nav_font' : 'nav-link'} to="/dashboard/new_cases">Dashboard <span className="sr-only"></span></Link></li>,
        <li key="nav-7" className="nav-item">
          <Link className={location.pathname === '/create_case' ? 'active_nav_font nav-link' : 'nav-link'} to="/create_case">Create case</Link>
        </li>,
        <li key="nav-8" className="nav-item">
          <Link className={location.pathname === '/update_password' ? 'nav-link active_nav_font' : 'nav-link'} to="/update_password" >Update Password</Link>
        </li>,
        <li key="nav-9" className="nav-item" style={{ display: userLink() }}>
          <Link className={location.pathname === '/users' ? 'nav-link active_nav_font' : 'nav-link'} to="/users" >Users</Link>
        </li>,
        <li key="nav-10" className="nav-item">
          <Link className="nav-link pull-right" onClick={logout} >Logout</Link>
        </li>
      ]

    }
  }


  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-ikea">
        <img src={logo} /> &nbsp;
        <span className="navbar-brand" >IN - Food deviation report</span>
        <button onClick={showMobileMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ display: menuDispaly }} className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {state.AuthStatus ? state.menu[state.userUnit] : ''}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;