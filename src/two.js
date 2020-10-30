import React from 'react';
import Box from './Box';
import Box2 from './Box2';
import Box3 from './Box3';
import Profile from './Profile';
import Navbars from './Navbars';
import './App.css';

class Two extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div>
  <Navbars/>
<Box3 heading="Previous Job" subHeading1="Start Date" subHeading2="Job Title" data="suppp broooo??"/>
<br/>
<Box3 heading="Preferred Job" subHeading1="Seeking Job Title" subHeading2="Industry"/>
<br/>

{/* <Box heading="Industry" data="asdasd"/> */}
<br/>


    </div>
  )
}
}

export default Two;