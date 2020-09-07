import React, { useState, useEffect, useRef } from 'react';

function AnimeDetails({anime}) {
  return (
    <Navbar/>
    //   //<NavItem icon={<PlusIcon />} />
    //   <NavItem icon={<BellIcon />} />
    //   <NavItem icon={<MessengerIcon />} />

    //   <NavItem icon={<CaretIcon />}>
    //     <DropdownMenu></DropdownMenu>
    //   </NavItem>
    // </Navbar>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export default AnimeDetails;