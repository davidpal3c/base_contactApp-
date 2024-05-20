import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";
import ContactForm from "./ContactForm";

/**
 * The main App component that manages the state and interactions of the contact management system.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  /**
   * Fetches the list of contacts from the backend API and sets the contacts state.
   */
  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  /**
   * Closes the modal and resets the current contact state.
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  /**
   * Opens the modal for creating a new contact.
   */
  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  /**
   * Opens the modal for editing an existing contact.
   * 
   * @param {Object} contact - The contact to be edited.
   */
  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  /**
   * Callback function to close the modal and refresh the contacts list.
   */
  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <>
      <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
        </div>
      </div>}
    </>
  );
}

export default App;
