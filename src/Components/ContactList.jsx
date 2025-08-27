import React, {useState} from 'react'

const ContactList = ({contacts, updateContact, deleteContact}) => {

  const [editingContactId, setEditingContactId] = useState(null);
  const [updatedContact, setUpdatedContact] = useState({name: '', number: ''});
  
  const handleEdit = (id) => {
    setEditingContactId(id);
    const contactToEdit = contacts.find(contact => contact.id === id);
    if (contactToEdit){
      setUpdatedContact({ name: contactToEdit.name, number: contactToEdit.number });
    }
  }
  
  const handleEditDone = (id) => {
    updateContact(id, updatedContact);
    setEditingContactId(null);
  }

  const handleDelete = (id) => {
    deleteContact(id);
  }

  return (
    <div className='contact-list'>
      {contacts.length > 0 ? (
        contacts.map(contact => {
          return(
            <div key={contact.id} className="contact-item">
              {editingContactId === contact.id?(
                <div className="contact-edit-card">
                  <div className="edit-inputs">
                    <input 
                      type="text" 
                      value={updatedContact.name} 
                      placeholder="Enter name"
                      className="edit-input"
                      onChange={e => setUpdatedContact({...updatedContact, name: e.target.value})} 
                    />
                    <input 
                      type="text" 
                      value={updatedContact.number} 
                      placeholder="Enter number"
                      className="edit-input"
                      onChange={e => setUpdatedContact({...updatedContact, number: e.target.value})} 
                    />
                  </div>
                  <div className="edit-actions">
                    <span className="action-icon save-icon" onClick={()=>handleEditDone(contact.id)}>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span className="action-icon cancel-icon" onClick={() => setEditingContactId(null)}>
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              ):(
              <div className="contact-card">
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-number">{contact.number}</div>
                </div>
                <div className="contact-actions">
                  <span className="action-icon edit-icon" onClick={() => handleEdit(contact.id)}>
                    <i className="fa-solid fa-user-pen"></i>
                  </span>
                  <span className="action-icon delete-icon" onClick={() => handleDelete(contact.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                </div>
              </div>)}     
            </div>
          )
        })
      ) : (
        <div className="no-contacts">
          <i className="fa-solid fa-address-book"></i>
          <p>No contacts available</p>
          <p className="no-contacts-subtitle">Add your first contact to get started</p>
        </div>
      )}   
    </div>
  )
}

export default ContactList
