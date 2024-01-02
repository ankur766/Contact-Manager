import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddList(props) {

  const [contact,setcontact]=useState({id: 0, fname: "", lname: "",email: "" })
  /*  set value in contact  from form */
  const handleChange = (e) => {
    contact.id=contact.id+1;
    const { name, value } = e.target;
    setcontact({ ...contact, [name]: value });
  };

  /* add Data */
  const addData = (e) => {
    e.preventDefault();
    if ( contact.fname === "" || contact.lname === "") {
        alert("All columns are required");
    }
    else{
      props.addData(contact);
      console.log( "this is Add.js",{contact})
      setcontact({
        fname:"",lname:"",email:""
      })
      

    }
    
};
 
  return (
    <>
      <form  onSubmit={addData}>
  <label htmlFor="fname">First name:</label>
  <br />
  <input type="text"  name="fname" placeholder='First Name'  value={contact.fname} onChange={handleChange}/>
  <br />
  <label htmlFor="lname">Last name:</label>
  <br />
  <input type="text"  name="lname" placeholder='Last Name' value={contact.lname} onChange={handleChange}/>
<br/>

  <label htmlFor="Ename" >Email:</label>
  <br />
  <input type="text"  name="email" placeholder='Email' value={contact.email}  onChange={handleChange}/>
  <br/>
  <button  type='Submit'> Submit</button>
  <Link to={"/"}>
      <button>  contact Details</button>
      </Link>
</form>

    </>
  )
}
