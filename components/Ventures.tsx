// components/Ventures.tsx

import { ventures } from "../data/site";

export default function Ventures() {
  return (
    <section id="ventures" className="ventures-section">
      <div className="section-container">
        <div className="section-header">
          <div>
            <p className="section-label">What we are building</p>
            <h2>
              One group.
              <br />
              Three pathways to access.
            </h2>
          </div>

          <p>
            Our ventures create opportunities across distribution,
            venture development and media, connecting businesses,
            markets and communities across Australia and Africa.
          </p>
        </div>

        <div className="venture-grid">
          {ventures.map((venture) => (
            <article className="venture-card" key={venture.title}>
              <span className="venture-number">{venture.number}</span>

              <h3>{venture.title}</h3>

              <p>{venture.description}</p>

              <ul>
                {venture.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              {venture.href && (
                <a href={venture.href} className="venture-link">
                  View product range →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}