import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName]= useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicated, setDuplicated] = useState('');

  useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicated) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
    
  };

  useEffect(() => {
    const nameIsDuplicated = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicated()) {
      setDuplicated(true);
    } else {
      setDuplicated(false);
    }
  }, [name, contacts, duplicated]);

  return (
    <div>
      <section>
        <h2>Add Contact {duplicated ? "This is already a contact" : ""}</h2> 
      <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={setEmail}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
