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
      isSaving :false

    };
    this.onDelete.bind(this);
}

componentDidMount(){
   return this.updateForm();
}

updateForm()
{
    fetch('http://localhost:3004/employees')
   .then(Response=>{ return Response.json();})
   .then (source=>{ console.log(source)
       //or .then(source=>this.setstate({dsource:source}))
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

onSubmith=(e)=>{
    e.preventDefault();
    const dataform = new FormData(e.target);
 this.setState({isSaving:true});

 fetch('http://localhost:3004/employees' ,{
     method :"POST",
     headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: dataform .get("name"),
            age: Number(dataform .get("age")),
            isActive: dataform .get("isActive")==="true" ? true : false,
				company: dataform .get("company"),
				email: dataform .get("email")

          })
 } 
 )
 .then(Response=>Response.json())
 .then(()=>this.setState({isSaving:false}))
.then(()=>this.updateForm());
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

showhandler=(e)=>{
    this.setState({isform:true})
}
hidehandler=(e)=>{
    this.setState({isform:false})
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
             {/* {this.state.isform ?<div><Form hidehandler={this.hidehandler}/></div>:null}  task2*/}
           
          {/*task3*/}
            { this.state.isform ?this.state.isSaving ? <p>Saving ...</p> : <Form onSubmith={this.onSubmith}  onchange={this.onChangehandler} hidehandler={this.hidehandler} />: null } 

  {/*task4*/}
             

        {this.state.dsource.map((e, i) => {return(
             

            <div key={i} ><h4>Employee :{e.id}</h4>
          {this.state.idDeleting==null ?
          <div>
             <p>Name: {e.name}</p>
              <p>Age: {e.age}</p>
              <p>isActive: {e.isActive.toString()}</p>
              <p>Company: {e.company}</p>
              <p>Email: {e.email}</p>      
             <button onClick={(event) => {this.onDelete(event , e.id )}}> Delete  employee </button>    </div>
          :
       <p>Deleting...</p>} 
             </div>
        //please try deleting from the top because it's really fast 
        )
        })
        
        }
      </div>
          )
      }
}

export default Employees;
