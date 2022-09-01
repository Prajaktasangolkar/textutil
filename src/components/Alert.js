import React from 'react'

function Alert(props) {

    //capitalize suceess=Suceess.............S
 const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
 }


  return (
  
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

  <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
 
 {/* This button is for 'X' Sign in any Alert */}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    //props.alert &&    if this will not null then only this will run if null then it will not null
  )
}

export default Alert


