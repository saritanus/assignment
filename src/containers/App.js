import '../css/App.css';
import React from 'react';
import Welcome from './Welcome';
import MainContainer from './MainContainer';

function App() {
  return (
     <div >
       <div className="App">
       <header className="App-header"> 
         <Welcome /> 
        <p>Welcome to Appliance Management Application</p> 
        </header>
        <div>
       </div>
       <MainContainer />
       </div>
   </div>
  );
}

export default App;
