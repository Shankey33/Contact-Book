import React from 'react'
import Header from './Components/Header'
import Contacts from './Components/Contacts'
import AddContact from './Components/AddContact'
import EmptyContactList from './Components/EmptyContactList'

const App = () => {
  return (
    <div className='app'>
        <Header />
        <Contacts />
        <AddContact />
        <EmptyContactList />
    </div>
  )
}

export default App
