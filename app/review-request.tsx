'use client';

import { FormEvent, useState } from 'react';

const emptyForm = {
  name: '',
  business: '',
  email: '',
  phone: '',
  preferredContact: 'Email',
  locations: '',
  serviceToday: '',
  change: '',
};

export default function ReviewRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      'Free Business Connectivity Review',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred contact method: ${form.preferredContact}`,
      `Locations / addresses: ${form.locations || 'Not provided'}`,
      `Internet and phone service today: ${form.serviceToday || 'Not provided'}`,
      `What needs to change: ${form.change || 'Not provided'}`,
    ];
    window.location.href = `mailto:info@keensolutionsgroup.com?subject=${encodeURIComponent(`Service review — ${form.business || form.name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <>
      <button className="review-button" type="button" onClick={() => setIsOpen(true)}>Start a service review</button>
      {isOpen && (
        <div className="review-dialog-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section className="review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" aria-label="Close form" onClick={() => setIsOpen(false)}>×</button>
            <p className="eyebrow">Service review</p>
            <h2 id="review-title">Tell us what is not working.</h2>
            <p className="dialog-intro">Start with a few details. KSG will follow up using the method you prefer.</p>
            <form onSubmit={submitRequest}>
              <div className="form-grid">
                <label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
                <label>Business name<input required value={form.business} onChange={(event) => setForm({ ...form, business: event.target.value })} /></label>
                <label>Work email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
                <label>Best phone number<input required={form.preferredContact !== 'Email'} type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
                <label className="full-width">Best way to reach you<select value={form.preferredContact} onChange={(event) => setForm({ ...form, preferredContact: event.target.value })}><option>Email</option><option>Phone call</option><option>Text message</option></select></label>
                <label className="full-width">Locations / service address<input placeholder="For example: 2 locations in Indianapolis" value={form.locations} onChange={(event) => setForm({ ...form, locations: event.target.value })} /></label>
                <label className="full-width">What service do you have today?<textarea rows={2} placeholder="Internet provider and speed, phone provider, or how many people use the phones" value={form.serviceToday} onChange={(event) => setForm({ ...form, serviceToday: event.target.value })} /></label>
                <label className="full-width">What needs to change?<textarea rows={2} placeholder="An issue you are having, move date, new location, contract end, or goal" value={form.change} onChange={(event) => setForm({ ...form, change: event.target.value })} /></label>
              </div>
              <button className="form-submit" type="submit">Send my review request</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
