import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setMode] = useState('light');
  const ShowAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      ShowAlert("Dark Mode is Enabled", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAlert("Light Mode is Enabled", 'success');
    }
  }

  return (
    <>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading='Enter Text Here' />
        <About />
      </div>
    </>
  );
}

export default App;
