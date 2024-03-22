import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';


function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  }, [])
  


  return (
    <div className="App"> 
      <div>
        <Button onClick={onToggleButton}>Toggle</Button>
      </div>
 
    </div>
  );
}

export default App;
