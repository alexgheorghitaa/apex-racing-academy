"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value.trim();
    const consent = (form.elements.namedItem("consent") as HTMLInputElement).checked;

    if (!name || !contact) {
      setError("Please add your name and a way to reach you.");
      setSent(false);
      return;
    }
    if (!consent) {
      setError("Please tick the data-processing consent.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <label htmlFor="cf-name">Your name</label>
      <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="First and last name" required />
      <label htmlFor="cf-contact">Phone or email</label>
      <input id="cf-contact" name="contact" type="text" autoComplete="email" placeholder="How can we reach you" required />
      <label htmlFor="cf-subject">Subject</label>
      <select id="cf-subject" name="subject" defaultValue="Details for my child">
        <option>Details for my child</option>
        <option>I&apos;d like to become a partner</option>
        <option>Something else</option>
      </select>
      <label htmlFor="cf-message">Your message</label>
      <textarea id="cf-message" name="message" placeholder="A few lines…" />
      <div className="gdpr">
        <input id="cf-consent" name="consent" type="checkbox" />
        <label htmlFor="cf-consent">
          I agree to my data being processed so the club can contact me.
        </label>
      </div>
      <button className="btn-o" type="submit">
        Send message
      </button>
      {error && (
        <p className="form-status show" role="alert" style={{ background: "#FDECEC", borderColor: "#E23A2E" }}>
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-status show" role="status">
          Thanks! Your message has been logged — we&apos;ll get back to you within 24 hours. ✓
        </p>
      )}
    </form>
  );
}
