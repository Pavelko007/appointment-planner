import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"; // Import the ContactPicker component

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type='text' name='title' value={title}
          onChange={e => setTitle(e.target.value)} />
      </label>

      <ContactPicker contacts={contacts} onChange={setContact} />

      <label>
        Date: <input type='date' name='date' value={date} min={getTodayString()}
          onChange={e => setDate(e.target.value)} />
      </label>

      <label>
        Time: <input type='time' name='time' value={time}
          onChange={e => setTime(e.target.value)} />
      </label>
      <button type='submit'>Submit</button> 
    </form>
  );
};
