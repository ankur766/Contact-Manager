
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AddList from './components/AddList';

import axios from 'axios';
import Contactlist from './components/Contactlist';
import Header from './components/Header';
import UpdateContact from './components/UpdateContact';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
   
 
  

  const [contacts,setcontacts]=useState([])
  

  //add data in localstorage 
  //  const addData=(contact)=>
  //  { 
  //   setcontacts(prevContacts => [...prevContacts, contact]);
   
  //     console.log(contact)
  //  }

  const addData=async(contact)=>{
    try {
      console.log(contact);
      const response = await axios.post('http://localhost:3006/contacts', contact);
      
      // Assuming the response.data contains the newly added contact object
      const newContact = response.data;

      // Update the state by adding the new contact to the existing contacts array
      setcontacts([...contacts, newContact]);
    } catch (error) {
      // Handle any error that might occur during the POST request
      console.error('Error adding contact:', error);
    }
    }

    const updateByByid= async(id)=>{
      console.log("Hi this Update fiele")
      console.log(id)
      await axios.get(`http://localhost:3006/contacts/${id}`);

      const newContactList=contacts.filter((contact) => {
            return contact.id === id;
      
      
      });
      setcontacts(newContactList);

    }
    const removeContactHandler = async(id) => {

      console.log(id);
      await axios.delete(`http://localhost:3006/contacts/${id}`);

      const newContactList=contacts.filter((contact) => {
            return contact.id !== id;
      
      
      });
      setcontacts(newContactList);
    };

   

/*delete items from Id */
  //  const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

    // setcontacts(newContactList);
  // };
  //  const retrieveContact=async()=>{
  // const response=await contactApi.get('/contacts');
  // return response.data
  //  }
  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const response = await axios.get(' http://localhost:3006/contacts');
        console.log(response.data)
        setcontacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error.message);
      }
    };
  
    getAllContacts();
  },[]);



// local stroage data for test
  /* useEffect(() => {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retriveContacts) setcontacts(retriveContacts);
    }, []);*/

    // useEffect(() => {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }, [contacts]);



  return (<>
   <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddList addData={addData} />} />
        <Route path="/" element={<Contactlist contact={contacts} deleteByid={removeContactHandler} updateByByid={updateByByid} />} />
        <Route path="/edit" element={<UpdateContact updateByByid={updateByByid}/>} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
