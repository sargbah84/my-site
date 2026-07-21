import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');

const Contact = ({ data }) => {
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Netlify captures submissions posted back to the site root as form-encoded
    // data. The matching static form lives in index.html so the build-time
    // scanner can register it.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setStatus('sent');
        setForm({ email: '', name: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="contact-section position-relative" id="contact">
      <span className="section-ghost" aria-hidden="true">
        connect
        <br />
        with me
      </span>

      <div className="container px-md-0 px-4 position-relative">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="section-heading">
              <span className="section-mark" aria-hidden="true" />
              contact us
            </h2>
            <p className="section-lead">
              Have a project in mind or just want to say hello? Send a message
              and I will get back to you.
            </p>

            <ul className="contact-list">
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              </li>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{data.contact.location}</span>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={`mailto:${data.contact.email}`}>Available on request</a>
              </li>
            </ul>
          </div>

          <div className="col-md-7">
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="d-none">
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>

              <label className="visually-hidden" htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label className="visually-hidden" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label className="visually-hidden" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>

              {status === 'sent' && (
                <p className="form-status form-status-ok" role="status">
                  Thanks — your message is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status-error" role="alert">
                  Something went wrong. Please email {data.contact.email}{' '}
                  directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
