// import { useEffect } from 'react';
// import { connect } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter'
import ContactList from './components/ContactList'
import * as contactsApi from './services/contacts-api';

function App() {
  contactsApi.getAllContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
