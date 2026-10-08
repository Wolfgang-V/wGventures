import Link from "next/link";

export const KEYS = ["clay", "teal", "plum", "ochre", "indigo", "blue"] as const;

export function Logo({ className = "logo" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x="2.5" y="2.5" width="59" height="59" fill="none" stroke="currentColor" strokeWidth="3" />
      <polygon points="15,11 53,11 47,21 9,21" fill="var(--clay)" />
      <polygon points="15,27 53,27 47,37 9,37" fill="var(--blue)" />
      <polygon points="15,43 53,43 47,53 9,53" fill="var(--ochre)" />
    </svg>
  );
}

function Spectrum({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      {KEYS.map((k) => (
        <i key={k} style={{ background: `var(--${k})` }} />
      ))}
    </div>
  );
}

export function SheetIndex() {
  return (
    <nav className="index" aria-label="Sheet index">
      <Spectrum className="index__bar" />
      <div className="index__in">
        <Link className="index__brand" href="/" aria-label="wG Ventures — home">
          <Logo />
          <span className="index__mark">
            wG <span>Ventures</span>
          </span>
        </Link>
        <ul className="index__links">
          <li>
            <Link href="/#work">
              <em>02</em>Work
            </Link>
          </li>
          <li>
            <Link href="/#stack">
              <em>03</em>Stack
            </Link>
          </li>
          <li>
            <Link href="/#method">
              <em>04</em>Method
            </Link>
          </li>
          <li>
            <Link href="/#record">
              <em>05</em>Record
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <em>06</em>Hire me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function Contact() {
  return (
    <footer id="contact" className="contact">
      <Spectrum className="contact__bar" />
      <div className="wrap">
        <span className="mono" style={{ color: "#818A78" }}>
          Sheet 06 — Contact
        </span>
        <h2 style={{ marginTop: 18 }}>Tell me what you&apos;re building.</h2>
        <p className="lede" style={{ marginTop: 16 }}>
          Describe the project in a few lines and I&apos;ll come back with an honest answer on whether
          I&apos;m the right fit, what it will realistically cost, and how long it will take. If
          it&apos;s not a fit, I&apos;ll say so.
        </p>

        <div className="contact__grid">
          <div className="contact__cell">
            <span className="plate__k">Email</span>
            <a href="mailto:adedotunibrahim37@gmail.com">adedotunibrahim37@gmail.com</a>
          </div>
          <div className="contact__cell">
            <span className="plate__k">Phone &amp; WhatsApp</span>
            <a href="https://wa.me/2348133944036" target="_blank" rel="noopener">
              0813 394 4036
            </a>
          </div>
          <div className="contact__cell">
            <span className="plate__k">Code</span>
            <a href="https://github.com/Wolfgang-V" target="_blank" rel="noopener">
              github.com/Wolfgang-V
            </a>
          </div>
          <div className="contact__cell">
            <span className="plate__k">Based in</span>
            <span className="static">Lagos, Nigeria — remote worldwide</span>
          </div>
          <div className="contact__cell">
            <span className="plate__k">Overlap</span>
            <span className="static">GMT+1 · full UK/EU day, US mornings</span>
          </div>
        </div>

        <div className="footmark">
          <Logo />
          <span>
            <strong>wG Ventures</strong>
            <br />
            Adedotun Ibrahim Adekunle
          </span>
        </div>

        <div className="colophon">
          <span>© 2026 Adedotun Ibrahim Adekunle · WG Ventures</span>
          <span>Drawing set — 6 sheets · Rev. J</span>
        </div>
      </div>
    </footer>
  );
}
