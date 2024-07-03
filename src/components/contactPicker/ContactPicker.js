import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <label>
      Contact:
      <select value={value} name={name}
        onChange={e => onChange(e.target.value)}>
        <option key={-1} value=''>No Contact Selected</option>
        {contacts.map((contact) =>
          <option key={contact.name} value={contact.name}>{contact.name}</option>)
        }
      </select>
    </label>

  );
};
