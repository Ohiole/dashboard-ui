import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { ShareContext } from './context/ShareContext';
import Body from './Page/Body';

function App() {
  const [display, setDisplay] = useState(false)

  return (
    <div className="App flex">
      <ShareContext.Provider value={{display, setDisplay}}>
        <Sidebar />
        <Body />
      </ShareContext.Provider>
    </div>
  );
}

export default App;
