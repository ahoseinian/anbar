import React from 'react'
import {Link} from 'react-router'
import {css} from 'glamor'
import {color} from './theme'

const style = {
  navbar: {
    padding: 0
  },
  navLink: {
    color: 'white',
    borderRadius: '0 !important',
    ':hover': {
      backgroundColor: color.lightBlue,
      color: 'white'
    },
  },
  'active': {
    backgroundColor: color.darkBlue,
    color: 'white'
  }
}

export default() => (
  <nav className="navbar navbar-light bg-primary" style={style.navbar}>
    <ul className="nav nav-pills nav-justified p-0 container">
      <NavItem to="/anbar" name="صفحه اصلی" icon="home"/>
      <NavItem to="/insert" name="ثبت" icon="plus"/>
      <NavItem to="/models" name="مدل" icon="tag"/>
      <NavItem to="/vizhegi" name="ویژگی" icon="star"/>
      <NavItem to="/groups" name="گروه ها" icon="object-group"/>
    </ul>
  </nav>
)

const NavItem = ({to, name, icon}) => (
  <li className="nav-item">
    <Link to={to} className="nav-link" activeStyle={style.active} {...css(style.navLink)}>
      {icon && <span className={"ml-2 fa fa-" + icon}></span>}
      {name}
    </Link>
  </li>
)
