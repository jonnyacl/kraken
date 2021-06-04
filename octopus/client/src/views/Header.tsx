import React, { useState } from 'react';
import SidebarSelector from '../components/SidebarSelector';

const Header = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header>
      <div className="App-header">
        <div className="name">
          octopus energy
        </div>
        <SidebarSelector showSidebar={showSidebar} onClick={() => setShowSidebar(!showSidebar)}/>
      </div>
    </header>
  );
}

export default Header;
