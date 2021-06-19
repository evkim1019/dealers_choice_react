import React from 'react';

const Side = (props) => {
  const goHome = props.goHome;

  return(
    <div id="side">
      <div className="logo"><img src="http://baileypreston.com/wp-content/uploads/2017/05/EA-logo-2017.png" alt="" /></div>
      <div className="goHome" onClick={ goHome }>Home</div>
    </div>
  )
}

export default Side;  