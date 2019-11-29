import React from 'react';
import { withRouter } from "react-router-dom";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class PageEmployeeList extends React.Component 
{
constructor(props){
    super(props);
    this.state={
      isLoading :true ,
      dsource :null,
     isform : false,
    isSaving :false
    };
    this.onDelete.bind(this);
}

componentDidMount(){
   this.updateForm();
}

updateForm()
{
    fetch('http://localhost:3004/employees')
   .then(Response=>{ return Response.json();})
   .then (source=>{ console.log(source)

    this.setState({
    dsource:source,
    isLoading:false,
    isform :false,
    isSaving : false ,
    idDeleting : null ,
 isDeleting :false
       });
   }
   );
}


  onDelete(event,id) {

    console.log(id);
   this.setState({idDeleting: id});

 fetch(`http://localhost:3004/employees/${id}`, {
   method: "delete"
  })
    .then(response => response.json())
   .then(() => this.setState({idDeleting: null}))
   .then(() => this.updateForm());
   
   }


render(){
    if(this.state.isLoading){
        return(
            <p>isloading...</p>
        )
    }
    return(
      
     <div>
        {this.state.dsource.map((e, i) => {return(
            <div key={i} >
          {this.state.idDeleting==null ?
          <div>
            <p>{e.id}</p>
             <p>{e.name} {e.age}  {e.isActive.toString()}   {e.company} {e.email} </p>
             <button onClick={(event) => {this.onDelete(event , e.id )}}> Delete  employee </button>    </div>
          :
       <p>Deleting...</p>} 
             </div>
        )
        })
        
        }
        <Link to="/new"><button >Create new Employee</button></Link> 
      </div>
          )
      }
}

export default withRouter(PageEmployeeList);
