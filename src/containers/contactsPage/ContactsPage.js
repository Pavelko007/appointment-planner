import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicateName) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    };
  }

  //check for contact name in the contacts array
  useEffect(() =>
    setIsDuplicateName(contacts.some(contact => contact.name === name))
    , [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};
