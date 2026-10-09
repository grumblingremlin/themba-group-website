

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span />
          Australia ↔ Africa
        </p>

        <h1>
          Building ventures.
          <br />
          Creating access.
          <br />
          <em>Connecting markets.</em>
        </h1>

        <p className="hero-description">
          Themba Group builds commercial pathways where Australian capability,
          African opportunity and diaspora expertise meet.
        </p>

        <div className="hero-actions">
          <a href="#ventures" className="button button-primary">
            Explore our ventures
          </a>

          <a
            href="mailto:info@thembagroup.com.au"
            className="button-secondary"
          >
            Start a conversation
          </a>
        </div>
      </div>

      <div className="hero-meta">
        <span>⌖ &nbsp; Perth, Western Australia</span>
        <span>Trade · Energy · Market Access</span>
      </div>
    </section>
  );
}