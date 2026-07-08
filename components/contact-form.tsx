"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <label htmlFor="cf-nume">Numele tău</label>
      <input id="cf-nume" name="nume" type="text" autoComplete="name" placeholder="Nume și prenume" />
      <label htmlFor="cf-contact">Telefon sau email</label>
      <input id="cf-contact" name="contact" type="text" autoComplete="email" placeholder="Cum te putem contacta" />
      <label htmlFor="cf-subiect">Subiect</label>
      <select id="cf-subiect" name="subiect" defaultValue="Vreau detalii pentru copilul meu">
        <option>Vreau detalii pentru copilul meu</option>
        <option>Vreau să devin partener</option>
        <option>Altceva</option>
      </select>
      <label htmlFor="cf-mesaj">Mesajul tău</label>
      <textarea id="cf-mesaj" name="mesaj" placeholder="Scrie-ne pe scurt…" />
      <div className="gdpr">
        <input id="cf-gdpr" type="checkbox" />
        <label htmlFor="cf-gdpr">
          Sunt de acord cu prelucrarea datelor pentru a fi contactat.
        </label>
      </div>
      <button className="btn-o" type="submit">
        Trimite mesajul
      </button>
      <p className={`form-status${sent ? " show" : ""}`} role="status">
        Mulțumim! Mesajul a fost înregistrat — revenim în cel mult 24 de ore. ✓
      </p>
    </form>
  );
}
