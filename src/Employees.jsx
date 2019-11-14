import React from 'react';
import Form from './Form';

class Employees extends React.Component 
{
constructor(props){
    super(props);
    this.state={
        isLoading :true ,
        dsource :null,
       isform : false,
       hideform :true
    }
}

componentDidMount(){
    fetch('http://localhost:3004/employees')
   .then(Response=>{
       return Response.json();
   })
   .then (source=>{
       console.log(source)
       //or .then(source=>this.setstate({dsource:source}))
    this.setState({
    dsource:source,
    isLoading:false
       });
   }
   );
}
showhandler=(e)=>{
    this.setState({isform:true})
}
hidehandler=(e)=>{
    this.setState({hideform:false})
}
render(){
    if(this.state.isLoading){
        return(
            <p>isloading...</p>
        )
    }
    return(
        <div>
            <button onClick={this.showhandler}>Add Employee</button>
            {this.state.isform ?<div><Form/><button onClick={this.hidehandler}>Cancel</button></div>:null}
        {this.state.dsource.map((e, i) => { return (
            <div key={i}><h4>Employee :{e._id}</h4>
             <p>Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>isActive: {e.isActive.toString()}</p>
              <p>Company: {e.company}</p>
              <p>Email: {e.email}</p>           
            </div>
          )
        })
        }
      </div>
          )
      }
}

export default Employees;
