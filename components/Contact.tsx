import { contact } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="contact-label">Partnership enquiries</p>

        <h2>
          Let&apos;s build the
          <br />
          next pathway.
        </h2>

        <p className="contact-description">
          For retail pilots, energy opportunities, Australia–Africa
          market access and strategic partnerships.
        </p>

        <a
          className="contact-button"
          href={`mailto:${contact.email}?subject=Themba%20Group%20Partnership%20Enquiry`}
        >
          {contact.email}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}