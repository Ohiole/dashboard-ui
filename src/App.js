import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { ShareContext } from './context/ShareContext';
import Body from './Page/Body';

function App() {
  const [display, setDisplay] = useState(false)

  const [openTable, setOpenTable] = useState(false)

  const [invoice, setInvoice] = useState({})

  const [showInv, setShowInv] = useState(false)
  
  const [showPlatforms, setShowPlatforms] = useState(false)

  return (
    <div className="App flex text-sans">
      <ShareContext.Provider value={{display, setDisplay, openTable, setOpenTable, invoice, setInvoice, showInv, setShowInv, showPlatforms, setShowPlatforms}}>
        <Sidebar />
        <Body />
      </ShareContext.Provider>
    </div>
  );
}

export default App;
