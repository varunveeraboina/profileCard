import React from 'react';
import Box from './Box';
import Box2 from './Box2';
import Box3 from './Box3';
import Profile from './Profile';
import Navbars from './Navbars';
import './App.css';

class One extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div>
  <Navbars/>
<Box3 heading="Contact" subHeading1="Phone" subHeading2="E-mail" data="suppp broooo??"/>
<br/>
<Box3 heading="Location" subHeading1="City" subHeading2="Country"/>
<br/>
<Box heading="Description" data="asdasd"/>
<br/>

<Profile/> 
    </div>
  )
}
}

export default One;