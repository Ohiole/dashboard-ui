import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { ShareContext } from './context/ShareContext';
import Body from './Page/Body';
import Logo from './assets/Logo.png'

function App() {
  const [display, setDisplay] = useState(false)

  const [openTable, setOpenTable] = useState(false)

  const [invoice, setInvoice] = useState({})

  const [showInv, setShowInv] = useState(false)
  
  const [showPlatforms, setShowPlatforms] = useState(false)

  const [openSide, setOpenSide] = useState(false)

  const [nav, setNav] = useState(false)

  return (
    <div className="App flex text-sans">
      <ShareContext.Provider value={{display, setDisplay, openTable, setOpenTable, invoice, setInvoice, showInv, setShowInv, showPlatforms, setShowPlatforms, openSide, setOpenSide, nav, setNav}}>
        <div onClick={() => setOpenSide(true)} className={`${openSide ? 'scale-0' : 'scale-100'} block sm:hidden fixed left-0 top-20 duration-200`}>
            <img src={Logo} alt='Company Logo' className='cursor-pointer w-[40px] h-[40px] duration-200 ease-in-out hover:-translate-y-2'/>
        </div>
        <Sidebar />
        <Body />
      </ShareContext.Provider>
    </div>
  );
}

export default App;
