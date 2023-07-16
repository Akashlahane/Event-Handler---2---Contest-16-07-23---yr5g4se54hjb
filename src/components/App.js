import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
      const z= event.currentTarget.id;
      let str = `Button id is:-{z}`;
      console.log(z);

  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClick}>Button A</button>
      <button id="button-b" onClick={handleClick}>Button B</button>
    </div>
  )
}


export default App;
