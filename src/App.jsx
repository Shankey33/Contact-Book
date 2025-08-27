import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Header from './Components/Header'
import Contacts from './Components/Contacts'
import AddContact from './Components/AddContact'

const App = () => {

    const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts'));
        return savedContacts || [];
    });

    
    // Save contacts to local storage whenever contacts state changes
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

    //function for deleting a contact
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts)
    }

    //function for updating a contact
    const updateContact = (id, updatedContact) => {
        console.log(id);
        setContacts(contacts.map(contact =>
            contact.id === id ? { ...contact, ...updatedContact } : contact
        ));
    }
        
    

    return (
        <BrowserRouter basename='/Contact-Book/'>
        <div className='app'>
            <Header />
            <Routes>
                    <Route path="/" element={<Contacts contacts={contacts} deleteContact={deleteContact} updateContact={updateContact}/>}></Route>
                    <Route path="/add" element={<AddContact setContacts={setContacts} />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App
