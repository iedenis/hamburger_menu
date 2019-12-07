import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {

  const [sideDrawerOpener, setsideDrawOpener] = useState(false)
  const drawerToggleHandler = () => {
    setsideDrawOpener((prevState) => ({
      ...prevState, sideDrawerOpener: !sideDrawerOpener
    }))
  }

  const drawerCloser = () => {
    setsideDrawOpener(false);
  }

  return (
    <div >
      <Toolbar drawerClickHandler={drawerToggleHandler} ></Toolbar>
      <SideDrawer show={sideDrawerOpener} />
      <Backdrop drawerClose={drawerCloser} />
      <main style={{ marginTop: '64px' }}>This is the page content</main>
    </div>
  );
}

export default App;
