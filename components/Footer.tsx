import Image from "next/image";
import { contact } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#top" className="footer-brand">
          <Image
            src="/logos/themba-mark.png"
            alt=""
            width={44}
            height={44}
          />
          <span>THEMBA GROUP</span>
        </a>

        <p>
          Building ventures. Creating access. Connecting markets.
        </p>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn ↗
        </a>

        <span className="footer-copyright">
          © 2026 Themba Group
        </span>
      </div>
    </footer>
  );
}