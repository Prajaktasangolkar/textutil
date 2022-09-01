// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm  from './components/TextForm'
import React, {useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import React from "react";
// import { Link } from 'react-router-dom'
/*   //in 17 video we comment out this router
import {
  BrowserRouter as Router,
  Switch,
  Route, 
 
} from "react-router-dom";
*/

function App() {
  //this is by deault light
  const[mode,setmode]=useState('light');   //state variable whether dark mode is enable or not
  const[alert,setalert]=useState(null);   //we make alert as a object
  //setAlert means which set the useState 

  //showAlert is function which help to show msg
  const showAlert=(message,type)=>{
    setalert({     //1st object is null and here we declare alert
      msg:message,
      type:type
    })
    //This will show alert for 2 sec only then it will go 
    setTimeout(()=>{
      setalert(null);
    },2000);
  }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
}








  /*
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
     showAlert("Dark mode has been enable","success")

    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success")
    }

  }
  
 */ 

//for 20th we change toggleMode

const togglemode=(cls)=>{
  //when u go to light to dark theme or dark to light theme ...cls is null
 removeBodyClasses();
 
  console.log(cls)
 document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
   showAlert("Dark mode has been enable","success")
   //this will show title is in dark mode
   document.title='textUtils-Dark Mode';
   setInterval(()=>{
     document.title=' TextUtils is a Amazing Mode';
   },2000)
   setInterval(()=>{
    document.title='Install TextUtils Now';
  },1500)
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enable","success")
    //this will show title is in Light mode
    document.title='textUtils-Light Mode'
  }

}



  return (
    <>
{/* <Navbar></Navbar> */}
{/* <Navbar title="TextUtil"   /> */}

{/* use router 16 */}
{/* in 17 video we comment out this router */}
{/* <Router> */}
<Navbar title="TextUtil" mode={mode} togglemode={togglemode} />   
{/* this darkmode will take true or false */}

<Alert alert={alert}/>   {/* the state variable-------const[alert,setalert]=useState(null); */} 
<div className="container my-3">

  {/* why to use exact
      /users -->Component 1
      /users/home-->Component 2
  */}
          {/* 
          <Switch> 
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading="Enter The text" mode={mode} /> 
          </Route>
        </Switch> */}
      <TextForm  showAlert={showAlert} heading="Enter The text" mode={mode} /> 
    
   {/* in a container  */}
  
  

</div>
{/* </Router> */}
</>
  );
}

export default App;



/*
/////
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React with Praju
  </a>
</header>
</div>
*/
