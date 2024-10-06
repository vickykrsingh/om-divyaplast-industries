// components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_f7vyt4v',
        'template_nd35idu', 
        e.target,
        'gaww4X9AYI0GwyyCg'
      )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send the message.');
    });
  };

  return (
    <section id="contact" className="bg-background p-6">
      <h2 className="text-3xl text-textPrimary mb-4">Contact Us</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="block w-full p-2 border border-gray-300" 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="block w-full p-2 border border-gray-300" 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          className="block w-full p-2 border border-gray-300" 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit" className="bg-primary text-white py-2 px-4">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
