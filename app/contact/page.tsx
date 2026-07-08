import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Apex Racing Academy",
  description: "Get in touch with the club — for parents and for partners.",
};

export default function Contact() {
  return (
    <>
      <header className="sub-head">
        <h1>Contact</h1>
        <p className="lead">Whether you&apos;re a parent or represent a company — start with a message.</p>
      </header>
      <div className="sub-body">
        <div className="sub-wrap">
          <div className="contact-big">
            <a className="mail" href="mailto:hello@apexracing.example">
              hello@apexracing.example
            </a>
            <div className="loc">We reply within 24 hours · Europe</div>
          </div>
          <div className="cta-duo">
            <a className="btn-o" href="mailto:hello@apexracing.example?subject=Junior%20academy%20enquiry">
              Details for parents
            </a>
            <a className="btn-o dark" href="mailto:hello@apexracing.example?subject=Partnership%20%E2%80%94%20Apex%20Racing">
              Become a partner
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
