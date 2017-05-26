import React from 'react'
import {Link} from 'react-router'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Interplanetary School District</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/campuses"activeStyle={{color: 'blue'}} onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/students"activeStyle={{color: 'blue'}}onlyActiveOnIndex={true}>Students</Link></li>
        </ul>
      </div>
    </nav>
  )
}
