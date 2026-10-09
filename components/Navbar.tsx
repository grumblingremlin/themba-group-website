import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="brand" aria-label="Themba Group home">
        <Image
          src="/logos/transparent_logo.png"
          alt=""
          width={54}
          height={54}
          className="brand-logo"
          priority
        />

        <span className="brand-name">THEMBA GROUP</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#ventures">Ventures</a>
        <a href="#approach">Approach</a>
      </nav>

      <a
        href="mailto:info@thembagroup.com.au?subject=Themba%20Group%20Partnership%20Enquiry"
        className="nav-contact"
      >
        Partner with us <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}