import React from 'react';
import "./SidebarOption.css";

function sidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default sidebarOption
