import React from 'react';
class Form extends React.Component 
{
constructor(props)
    {
    super(props);
    }
render()
    {
        return(
            <form  onSubmit={this.props.onSubmith}>
<label type="text">Name:</label><input name="name"></input>
<br/>
<label type="number">Age :</label><input name="age"></input>
<br/>
<label >IsActive:</label><input name="isActive" type="checkbox"></input>
<br/>
<label  type="text">Company:</label><input name="company"></input>
<br/>
<label  type="text">Email :</label><input name="email"></input>
<br/>
<button type="submit"  >Add</button>
<button onClick={this.props.hidehandler}>Cancel</button>
              
              
            </form>
        )

    }
}
export default Form;
