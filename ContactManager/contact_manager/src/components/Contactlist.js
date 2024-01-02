import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom';
export default function Contactlist(props) {
  const deleteByid=(id)=>
  {
    props.deleteByid(id);
  }
 
  if (!Array.isArray(props.contact) || props.contact.length === 0) {
    return <div>No contacts available</div>;
}
  const contactlistDetails=props.contact.map((contact)=>{
    return <ContactCard key={contact.fname} contact={contact}  deleteByid={deleteByid}  />
  })
  return (
    <div>
      <div>
      <h2>  Contact Details</h2>
      <Link to={"/add"}>
      <button> Add contact Details</button>
      </Link>
      </div>
       {contactlistDetails}
    </div>
  )
}
