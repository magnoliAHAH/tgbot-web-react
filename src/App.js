import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  }, [])
  


  return (
    <div className="App"> 
      <div>
        <img src='./public/logo192.png'></img>
      </div>
 
    </div>
  );
}

export default App;
