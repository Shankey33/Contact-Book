import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const AddContact = ({setContacts}) => {
  
  const [newContact, setNewContact] = useState({name: '', number: ''});
  

  const handleAddDone = () => {
    console.log(newContact);
    setContacts(prevContacts => [...prevContacts, {id: prevContacts.length > 0 ? prevContacts[prevContacts.length-1].id + 1 : 1, ...newContact}]);
    setNewContact({name: '', number: ''});
  }

  return (
    <div className="add-contact-container">
      <div className="add-contact-header">
        <h3>Add New Contact</h3>
      </div>
      <div className="add-contact-form">
        <input 
          type="text" 
          placeholder='Enter name' 
          className="contact-input"
          value={newContact.name}
          onChange={e =>{setNewContact({...newContact, name: e.target.value})}} 
        />
        <input 
          type="text" 
          placeholder='Enter phone number' 
          className="contact-input"
          value={newContact.number}
          onChange={e => setNewContact({...newContact, number: e.target.value})} 
        />
        <div className="add-contact-actions">
          <Link to="/" className="action-btn cancel-btn">
            <i className="fa-solid fa-xmark"></i> Cancel
          </Link>
          <Link to="/" className="action-btn save-btn" onClick={handleAddDone}>
            <i className="fa-solid fa-check"></i> Save
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddContact
