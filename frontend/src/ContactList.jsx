import React from 'react';

/**
 * ContactList component to display a list of contacts with options to update or delete.
 * 
 * @param {Object} props - Component props.
 * @param {Array} props.contacts - Array of contact objects to display.
 * @param {Function} props.updateContact - Function to call when updating a contact.
 * @param {Function} props.updateCallback - Callback function to call after deleting a contact.
 * 
 * @returns {JSX.Element} The rendered ContactList component.
 */
const ContactList = ({ contacts, updateContact, updateCallback }) => {
    /**
     * Handles the deletion of a contact.
     * 
     * @param {number} id - The ID of the contact to delete.
     */
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            alert(error);
        }
    };

    return <div>
        <h2>Contacts</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button onClick={() => updateContact(contact)}>Update</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
};

export default ContactList;
