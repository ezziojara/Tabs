import logo from './logo.svg';
import './App.css';
import Tabs from './views/Tabs';
import React,{ useState } from 'react';

function App() {

  const [tabs, setTabs] = useState([
    {
      nombre: "Tab 1",
      mensaje: "Este es el tab 1",
      seleccionado: "selected"
    },
    {
      nombre:"Tab 2",
      mensaje:"Este es el tab 2",
      seleccionado: ""
      
    }
  ])

  return (
    <Tabs tabs={tabs}/>
  );
}

export default App;
