import React, {Component} from 'react';
import logo from './logo.svg';
import './box3.css';

class Box3 extends React.Component {
    constructor(){
        super();
        this.state={
            value1: "",
            value2: "",
            edit: false,
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
                error:"Input cant be null",
                edit:true
    
            })
        }
        else{
            this.setState({
                value1:this.refs.textInput1.value,
                value2:this.refs.textInput2.value,
                edit:false,
                error:""
            })
        }    
        
    }
    renderEdit=()=>{
      return <div>
      {this.props.subHeading1}:
      <input type="text" size="20"ref="textInput1"
      defaultValue={this.state.value1}/>
      <br/>
      {this.props.subHeading2}:
      <input type="text" size="20"ref="textInput2"
      defaultValue={this.state.value2}/>
        <button className="updatex" onClick={this.changeEdit}>x</button>
        <button className="updateOk" onClick={this.changeText}>ok</button>
      </div>
    }
    renderDefault=()=>{
        return <div>
        {this.props.subHeading1 }:
        {this.state.value1}
        <br/>
        {this.props.subHeading2 }:
        {this.state.value2}
        </div>

    }
    showError=()=>{
        this.setState({
            error:"Field can't be empty"

        })
    }
    // dismissError=()=>{
    //     this.setState({
    //         error:""

    //     })
    // }

    
     render(){
     return(    
     <div class="card">
     <h6>{this.state.error}</h6>
     
  <div class="card-header">
  <p className="heading">{this.props.heading}</p>
  

  <button type="button" onClick={this.changeEdit} className="smallButton">Edit</button>
  </div>
  <div class="card-body">
       
    {this.state.edit?this.renderEdit():this.renderDefault()}
 
  
  </div>
</div>)
     }
  }
  export default Box3;