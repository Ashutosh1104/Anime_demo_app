import React from 'react';

function AnimeItem({ anime, setActiveExpansion, activeExpand }) {
  return (
    <>
      <div className="card-img-container"><img className="card-img" src={anime.image} alt='' /></div>
      <Navbar anime={anime}>
        <li className="card-title"><span><strong>{anime.name}</strong></span></li>
        <NavItem activeExpand={activeExpand} setActiveExpansion={setActiveExpansion} anime={anime} icon='😄'>
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
  return (
    <li className="nav-item">
      <button className="expand-button" onClick={() => {
        if (props.activeExpand === props.anime.name) {
          props.setActiveExpansion('')
        }
        else {
          props.setActiveExpansion(props.anime.name)
        }
      }}>
        {props.icon}
      </button>
    </li>
  );
}

export default AnimeItem;