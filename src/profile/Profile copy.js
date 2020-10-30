import React, {Component} from 'react';
import logo from './logo.svg';
import './profile.css';

class Profile extends React.Component {
    constructor(){
        super();
        this.state={
            Name: "Name",
            image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            edit: true,
            error: ""
        }
    }
    changeEdit=()=>{
        this.setState({edit:!this.state.edit})
        
    }
    changeText=()=>{
        if(this.refs.textInput1.value===""||this.refs.textInput2.value==="")
        {
            this.setState({
                error:"Please fill the details",
                edit:true
    
            })
        }
        else{
            this.setState({
                Name:this.refs.textInput1.value,
                image:this.refs.textInput2.value,
                edit:false,
                error:""
            })
        }    
        
    
    }
    renderEdit=()=>{
        return <div>
            <p>Enter Name</p>
            <input type="text" size="15"ref="textInput1"
      defaultValue={this.state.Name}/>
            
            <p className="link">Paste link of the Image</p>
            
            <input type="text" size="15"ref="textInput2"
      defaultValue={this.state.image}/>
      <button className="updatex" onClick={this.changeEdit}>x</button>
        <button className="updateOk" onClick={this.changeText}>ok</button>
        </div>
    }
    Nul=()=>{
        return <div/>
    }
   
    render(){
        return(   
            <div className="box">
                <img className="profileImage" src={this.state.image} alt="Profile Picture"/>
                <button type="button" onClick={this.changeEdit} className="smallButton">Edit</button>
                <h3 className="name-display">{this.state.Name}</h3>
                {this.state.edit?this.renderEdit():  this.Nul()}

            </div> 
        
        )
    }
}
export default Profile;    