import React from 'react'
import ContactList from './ContactList'
import { Link } from 'react-router-dom'

const Contacts = ({contacts, deleteContact, updateContact}) => {
  return (
    <div className='contacts-body'>
        <div className="contacts-body-up">
            <h2 className="contacts-title">Contacts</h2>
            <Link to="/add" className="add-contact-link">
              <i className="fa-solid fa-user-plus"></i>
            </Link>
        </div>
        <div className="contacts-body-down">
            <ContactList contacts={contacts} deleteContact={deleteContact} updateContact={updateContact}/>
        </div>
    </div>
  )
}

export default Contacts
