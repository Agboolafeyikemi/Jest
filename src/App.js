

import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const[btnEnabled, setBtnEnabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'grey' : 'red';


  return (
    <div >
      <button 
        disabled={btnEnabled}
        style={{backgroundColor: buttonColor, color:'white'}}
        onClick={()=> setButtonColor(newButtonColor)}
        >
        Change to {newButtonColor}
      </button>
      <input onChange={e => setBtnEnabled(e.target.checked)} type='checkbox'/>
    </div>
  );
}

export default App;