import React from 'react'
import PropTypes from 'prop-types'   //.......impt
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
// {/* <nav className="navbar navbar-expand-lg bg-light">
//  */}  //..............this is real in 12th video change done
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
          {/* But this Link is not running properly */}
        {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
      {/* 20th video 4 color  palletes add    */}
    <div className="d-flex">
      <div className="bg-primary rounded mx-2"  onClick={()=>props.togglemode('primary')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
      <div className="bg-danger rounded mx-2"  onClick={()=>props.togglemode('danger')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
      <div className="bg-success rounded mx-2"  onClick={()=>props.togglemode('success')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
      <div className="bg-warning rounded mx-2"  onClick={()=>props.togglemode('warning')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
      <div className="bg-light rounded mx-2"  onClick={()=>props.togglemode('light')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
      <div className="bg-dark rounded mx-2"  onClick={()=>props.togglemode('dark')} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} ></div>
{/* onclick want function not function call */}
    </div>


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      {/* greeen code is name as success */}
      {/* primary-blue */}
      </form>

{/* this is a javascript {} inside this */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>props.togglemode('primary')} role="switch" id="flexSwitchCheckDefault"/>
  {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label> */}
{/* for 20thvideo */}
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>

</div>

    </div>
  </div>
</nav>
  )
}
//pts-PropTypes.string
Navbar.propTypes={
  //<Navbar title="" aboutText="" /> isthere then this   so default will run
  // title: PropTypes.string,  
  
  //<Navbar/>
  title: PropTypes.string.isRequired,   //but for this default is not there then  run it is mendetary

  aboutText: PropTypes.string.isRequired
}

//<Navbar title="" aboutText="" /> is not there and only <Navbar/> is there then it will run
Navbar.defaultProps={
  title:'Set Title here',
  aboutText:'About '
};


