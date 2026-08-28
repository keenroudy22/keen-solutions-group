'use client';

import { FormEvent, useState } from 'react';

const emptyForm = {
  name: '',
  business: '',
  email: '',
  locations: '',
  internet: '',
  phones: '',
  timing: '',
  notes: '',
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
      `Locations / addresses: ${form.locations || 'Not provided'}`,
      `Internet today: ${form.internet || 'Not provided'}`,
      `Phone system / phone users: ${form.phones || 'Not provided'}`,
      `Timing: ${form.timing || 'Not provided'}`,
      `Anything else to know: ${form.notes || 'Not provided'}`,
    ];
    window.location.href = `mailto:info@keensolutionsgroup.com?subject=${encodeURIComponent(`Service review — ${form.business || form.name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <>
      <button className="review-button" type="button" onClick={() => setIsOpen(true)}>Request a free service review</button>
      {isOpen && (
        <div className="review-dialog-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section className="review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" aria-label="Close form" onClick={() => setIsOpen(false)}>×</button>
            <p className="eyebrow">Free service review</p>
            <h2 id="review-title">Tell us what you have today.</h2>
            <p className="dialog-intro">A few details are enough to start a useful conversation. This will open a pre-filled email for you to send.</p>
            <form onSubmit={submitRequest}>
              <div className="form-grid">
                <label>Your name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label>
                <label>Business name<input required value={form.business} onChange={(event) => setForm({ ...form, business: event.target.value })} /></label>
                <label className="full-width">Work email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label>
                <label>How many locations?<input placeholder="For example: 2 locations in Indianapolis" value={form.locations} onChange={(event) => setForm({ ...form, locations: event.target.value })} /></label>
                <label>Internet today<input placeholder="Provider, speed, or current issue" value={form.internet} onChange={(event) => setForm({ ...form, internet: event.target.value })} /></label>
                <label>Phone system and users<input placeholder="Current provider and number of users" value={form.phones} onChange={(event) => setForm({ ...form, phones: event.target.value })} /></label>
                <label>When is a change needed?<input placeholder="Move date, contract end, or timeline" value={form.timing} onChange={(event) => setForm({ ...form, timing: event.target.value })} /></label>
                <label className="full-width">Anything else we should know?<textarea rows={3} placeholder="Service problems, new location, backup needs, or goals" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label>
              </div>
              <button className="form-submit" type="submit">Create my review request</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
