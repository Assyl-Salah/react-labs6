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
            <form >
<label  type="text">Name:</label><input></input>
<br/>
<label name="age" type="number">Age :</label><input></input>
<br/>
<label name="active" >IsActive:</label><input type="checkbox"></input>
<br/>
<label name="com" type="text">Company:</label><input></input>
<br/>
<label name="email" type="text">Email</label><input></input>
<br/>
<button type="submit" >Add</button>
<button onClick={this.props.hidehandler}>Cancel</button>
            </form>
        )

    }
}
export default Form;
