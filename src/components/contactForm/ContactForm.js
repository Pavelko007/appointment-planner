import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type='text' value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Phone XXXXXXXXXX: <input type='tel' value={phone} pattern='^\d{10}$'
          onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Email: <input type='email' value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

