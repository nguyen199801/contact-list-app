import React, { useState } from 'react';
import './App.css';


// Mock data
const mockContacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-555-5555' },
];

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="container">
      <h1>Contact List</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <li
            key={contact.id}
            className={`contact ${selectedContact?.id === contact.id ? 'selected' : ''}`}
            onClick={() => handleSelectContact(contact)}
          >
            {contact.name}
          </li>
        ))}
      </ul>
      {selectedContact && (
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;