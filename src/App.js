import './App.css';
// import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  // const [display, setDisplay] = useState({
  //   sidebar: 'bg-sidebarBg',
  //   nav: '#B2ABAB',
  //   category: '#0D062D',

  // })

  return (
    <div className="App flex">
      <Sidebar />
    </div>
  );
}

export default App;
