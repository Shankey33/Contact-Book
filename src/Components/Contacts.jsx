import React from 'react'

const Contacts = () => {
  return (
    <div className='contacts-body'>
        <div className="contacts-body-upper">
            <p>Contacts</p>
            <span>+</span>
        </div>
        <div className="contacts-body-middle">
            <ContactList />
        </div>
    </div>
  )
}

export default Contacts
