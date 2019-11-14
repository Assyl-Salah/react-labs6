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
            <form>
<label name="n" type="text">Name:</label>
<br/>
<label name="age" type="number">Age :</label>
<br/>
<label name="active" type="checkbox">IsActive:</label>
<br/>
<label name="com" type="text">Company:</label>
<br/>
<label name="email" type="text">Email</label>
<br/>
<button type="submit" >Add</button>

            </form>
        )

    }
}
export default Form;
