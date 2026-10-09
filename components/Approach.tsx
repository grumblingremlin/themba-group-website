import { approach, sectors } from "../data/site";

const approachIcons = ["◇", "⌘", "→"];
const sectorIcons = ["◈", "ϟ", "▥", "⌘"];

export default function Approach() {
  return (
    <section id="approach" className="approach-section">
      <div className="section-container">
        <div className="approach-grid">
          <div className="approach-heading">
            <p className="section-label">How we work</p>
            <h2>
              Local
              <br />
              intelligence.
              <br />
              Cross-market
              <br />
              perspective.
            </h2>
          </div>

          <div className="approach-steps">
            {approach.map((step, index) => (
              <article className="approach-step" key={step.number}>
                <span className="step-number">{step.number}</span>

                <span className="step-icon" aria-hidden="true">
                  {approachIcons[index]}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="sectors">
          <p className="section-label">Where we create access</p>

          <div className="sector-grid">
            {sectors.map((sector, index) => (
              <div className="sector-item" key={sector}>
                <span className="sector-icon" aria-hidden="true">
                  {sectorIcons[index]}
                </span>
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}