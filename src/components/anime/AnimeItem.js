import React, { useState, useEffect, useRef } from 'react';

function AnimeItem({anime}) {
  return (
    <>
    <img className="card-img" src={anime.image} alt='' />
    <Navbar anime={anime}>
        <span className="card-title"><strong>{anime.name}</strong></span>
        <NavItem anime={anime} icon ='😄'>
              <DropdownMenu/>
        </NavItem>
    </Navbar>
    </>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return(
    <div className='dropdown'>
      <DropdownItem>Profiles</DropdownItem>
      <DropdownItem rightIcon='🦘'>More</DropdownItem>
      <DropdownItem leftIcon = '🐸'>Plot</DropdownItem>
    </div>
  )
}

export default AnimeItem;