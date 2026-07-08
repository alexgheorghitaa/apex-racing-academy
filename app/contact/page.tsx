import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Apex Racing Academy",
  description: "Contactează clubul — pentru părinți și pentru parteneri.",
};

export default function Contact() {
  return (
    <>
      <header className="sub-head">
        <h1>Contact</h1>
        <p className="lead">Fie că ești părinte, fie că reprezinți o firmă — începe cu un mesaj.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="contact-big">
            <a className="mail" href="mailto:salut@apexracing.example">
              salut@apexracing.example
            </a>
            <div className="loc">Răspundem în 24 de ore · România</div>
          </div>
          <div className="cta-duo">
            <a className="btn-o" href="mailto:salut@apexracing.example?subject=Detalii%20pentru%20p%C4%83rin%C8%9Bi">
              Detalii pentru părinți
            </a>
            <a className="btn-o dark" href="mailto:salut@apexracing.example?subject=Parteneriat%20Apex%20Racing">
              Devino partener
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
