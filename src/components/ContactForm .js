
import React from 'react';


const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;