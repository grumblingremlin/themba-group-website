import { contact } from "../data/site";

export default function Founder() {
  return (
    <section className="founder-section">
      <div className="founder-monogram" aria-hidden="true">
        LN
      </div>

      <div className="founder-content">
        <div className="founder-inner">
          <p className="section-label">Founder</p>

          <h2>Led by Lisa Nyoni</h2>

          <p className="founder-description">
            A Zimbabwean-born, Perth-based entrepreneur building at the
            intersection of commerce, community and the African diaspora.
            Lisa&apos;s work is grounded in a simple conviction: the people
            who understand both markets can help build the strongest
            bridges between them.
          </p>

          <div className="founder-links">
            <a
              href={`mailto:${contact.email}?subject=Themba%20Group%20Partnership%20Enquiry`}
            >
              Connect with Lisa <span>→</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}