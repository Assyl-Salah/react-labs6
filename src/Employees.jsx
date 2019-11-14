import React from 'react';
import Employee from './Employee';
class Employees extends React.Component 
{
constructor(props){
    super(props);
    this.state={
        isLoading :true ,
        dsource :null,
        isEmpty : false
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

render(){
    if(this.state.isLoading){
        return(
            <p>isloading...</p>
        )
    }

    return(
        <div>
        {this.state.dsource.map((e, ind) => { return (

            <div key={ind}><h4>Employee :{e.id}</h4>
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
