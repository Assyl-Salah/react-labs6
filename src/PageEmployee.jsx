import React from 'react';
import PageEmployeeList from "./PageEmployeeList"
class PageEmployee extends React.Component 
{
    //new
constructor(props)
    {
    super(props);
    
    this.state={
        dsource :null,
       isform : false,
      isSaving :false,
      id: null,
      isActive: false,
      age: 0,
      name: null,
      company: null,
      email: null,
    }
    this.onChangeEvent=this.onChangeEvent.bind(this);
    this.onSubmith=this.onSubmith.bind(this);
}
 
onSubmith=(e)=>{
    e.preventDefault();
 this.setState({isSaving:true});

 fetch('http://localhost:3004/employees' ,{
     method :"POST",
     headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "name": this.state.name,
            "age": this.state.age,
            "isActive": this.state.isActive,
				"company": this.state.company,
				"email": this.state.email

          })
 } 
 )
  .then(Response=>Response.json())
  .then(()=>this.setState({isSaving:false}))
  //.then(()=>window.reload)
 }
 showhandler=(e)=>{
    this.setState({isform:true})
}
hidehandler=(e)=>{
    this.setState({isform:false})
}
onChangeEvent(event) {
    this.setState({[event.target.name]: event.target.value});
}
render()
    { return(
       
      
      <div>
         { this.state.isSaving ? <p>Saving ...</p>  : '' } 
 <form  onSubmit={this.onSubmith}>
<label>Name:</label><input   type="text" onChange={this.onChangeEvent} name="name"></input>
<br/>
<label >Age :</label><input type="number" onChange={this.onChangeEvent}  name="age"></input>
<br/>
<label >IsActive:</label><input   onChange={this.onChangeEvent}  name="isActive" type="checkbox"></input>
<br/>
<label >Company:</label><input type="text" onChange={this.onChangeEvent}  name="company"></input>
<br/>
<label>Email :</label><input type="text" onChange={this.onChangeEvent}  name="email"></input>
<br/>
<button type="submit" onClick={this.onSubmith}>Submit</button>
<button onClick={this.hidehandler}>Cancel</button>    
            </form>
            </div>
        )

    }
}
export default PageEmployee;
