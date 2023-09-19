import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: !emailPattern.test(formData.email) ? 'Invalid email format' : '',
      }));
    }
  }, [formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name[0].toUpperCase() + name.slice(1)} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
  };

  return (
    <section id='contact'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
        {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} autoComplete="message"></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
    </section>
  );
}

export default Contact;
