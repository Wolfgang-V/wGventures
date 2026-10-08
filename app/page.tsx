import { Contact, SheetIndex } from "@/components/Chrome";
import { CaseCard } from "@/components/Case";
import { projects } from "@/lib/projects";

const bom: { key: string; label: string; value: React.ReactNode }[] = [
  {
    key: "clay",
    label: "Interface",
    value: (
      <>
        <b>Next.js (App Router, Server Actions, Route Handlers)</b> · <b>React</b> ·{" "}
        <b>TypeScript</b> · <b>Tailwind CSS</b> · <b>semantic HTML5 / CSS3 / vanilla JS</b> · Redux
        Toolkit · RTK Query
      </>
    ),
  },
  {
    key: "ochre",
    label: "Mobile",
    value: (
      <>
        <b>Progressive Web Apps</b> (installable, offline shell, <b>Web Push notifications</b>) ·
        mobile-first layout from 360px · React Native (in progress) · Play Store wrapping path
      </>
    ),
  },
  {
    key: "indigo",
    label: "Server",
    value: (
      <>
        <b>Node.js</b> · <b>Express</b> · serverless functions · <b>Supabase Edge Functions</b> ·
        pg_cron · REST API design · role-based access control · rate limiting · Python
      </>
    ),
  },
  {
    key: "teal",
    label: "Data",
    value: (
      <>
        <b>PostgreSQL</b> · <b>Prisma</b> · <b>Supabase</b> · <b>MongoDB / Mongoose</b> · row-level
        security · GIN indexing · cursor pagination · schema design and migrations
      </>
    ),
  },
  {
    key: "blue",
    label: "Money & identity",
    value: (
      <>
        <b>Paystack</b> (charges, platform fees, refunds) · <b>BetterAuth</b> · <b>JWT</b> · OTP
        verification · transaction ledgers and receipts
      </>
    ),
  },
  {
    key: "plum",
    label: "Real-time & simulation",
    value: (
      <>
        <b>Socket.io</b> · <b>Web Push</b> · <b>OpenFOAM CFD</b> · Three.js · glTF · Upstash Redis
      </>
    ),
  },
  {
    key: "clay",
    label: "Ship & run",
    value: (
      <>
        <b>Vercel</b> · <b>Git / GitHub</b> (protected branches, PR review) · Resend · Nodemailer ·
        WSL / Linux · production debugging
      </>
    ),
  },
];

const method = [
  {
    key: "clay",
    n: "01",
    h: "Scope before code",
    p: "We agree exactly what's being built and what it costs before I start. No surprise invoice, no quiet scope creep, and I'll tell you honestly if I'm the wrong person for the job.",
  },
  {
    key: "plum",
    n: "02",
    h: "You watch it get built",
    p: "A live preview URL from day one and a written update every week. You never wait for a reveal, and nothing that surprises you arrives at the end.",
  },
  {
    key: "teal",
    n: "03",
    h: "You own everything",
    p: "On delivery the source code, the database and every third-party account are yours outright. Nothing is locked to me — you can hire anyone to continue.",
  },
  {
    key: "ochre",
    n: "04",
    h: "I stay after handover",
    p: "Bug fixes after delivery are included. Building it is easy compared to keeping it running, and I've done the second part on my own products.",
  },
];

const record = [
  {
    key: "clay",
    kind: "Experience",
    title: "IT Support Officer — University of Lagos",
    body: "Department of Political Science. Systems support, maintenance and user training across departmental infrastructure.",
    when: "2022 – 2023",
  },
  {
    key: "indigo",
    kind: "Experience",
    title: "IT Specialist — Waldos Computers, Lagos",
    body: "Hardware and software integration, diagnostics and repair across macOS and Windows.",
    when: "2012 – 2023",
  },
  {
    key: "teal",
    kind: "Education",
    title: "Higher National Diploma — Yaba College of Technology",
    when: "2021 – 2023",
  },
  {
    key: "ochre",
    kind: "Education",
    title: "National Diploma — Yaba College of Technology",
    when: "2018 – 2020",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>
      <SheetIndex />

      <header className="cover wrap">
        <div className="cover__eyebrow">
          <span className="mono">Sheet 01 — Cover</span>
        </div>

        <h1>
          I build the parts of a product <span className="thin">that</span>{" "}
          <span className="mark">actually have to work</span> on launch day.
        </h1>

        <div className="cover__body">
          <div>
            <p className="lede">
              Full-stack web and mobile developer in Lagos. Marketplaces, e-commerce, banking,
              real-time apps and aerodynamic simulation — built end to end, from the database schema
              up to the refund button. Real businesses trade on the last thing I shipped.
            </p>
            <div className="case__links" style={{ marginTop: 22 }}>
              <a className="btn btn--fill" href="#work">
                See the work
              </a>
              <a className="btn" href="#contact">
                Start a project
              </a>
            </div>
          </div>

          <div className="plate">
            <div className="plate__row">
              <div className="plate__cell full">
                <span className="plate__k">Drawn by</span>
                <span className="plate__v">Adedotun Ibrahim Adekunle</span>
              </div>
            </div>
            <div className="plate__row">
              <div className="plate__cell">
                <span className="plate__k">Discipline</span>
                <span className="plate__v">Full-stack web &amp; mobile</span>
              </div>
              <div className="plate__cell">
                <span className="plate__k">Located</span>
                <span className="plate__v">Lagos, NG · GMT+1</span>
              </div>
            </div>
            <div className="plate__row">
              <div className="plate__cell">
                <span className="plate__k">Shipped</span>
                <span className="plate__v">6 systems</span>
              </div>
              <div className="plate__cell">
                <span className="plate__k">Core stack</span>
                <span className="plate__v">Next.js · React</span>
              </div>
            </div>
            <div className="plate__row tint">
              <div className="plate__cell full">
                <span className="plate__k">Status</span>
                <span className="plate__v blue">
                  <span className="livedot" aria-hidden="true" />
                  Open to client work &amp; roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="strip" aria-label="Currently">
        <div className="strip__in">
          <div className="strip__item s-clay">
            <span className="mono">Now — running</span>
            <p>
              <strong>Dermalé</strong> — a multi-vendor skincare marketplace, live with six
              retailers, clinics and professionals trading on it.
            </p>
          </div>
          <div className="strip__item s-ochre">
            <span className="mono">Now — shipping</span>
            <p>
              <strong>Tracka+</strong> — a skincare routine tracker with a scheduling engine and push
              reminders, live at trackaplus.app.
            </p>
          </div>
          <div className="strip__item s-blue">
            <span className="mono">Now — available</span>
            <p>
              Contract work: e-commerce builds, booking platforms, and rescuing half-finished React
              projects.
            </p>
          </div>
        </div>
      </section>

      <main id="work" className="sheet wrap">
        <div className="sheet__head">
          <span className="sheet__no">02</span>
          <h2>Selected work</h2>
          <span className="rule" />
          <span className="mono hoverhint">Hover a drawing to separate the layers</span>
        </div>
        <div className="cases">
          {projects.map((p) => (
            <CaseCard key={p.slug} p={p} />
          ))}
        </div>
      </main>

      <section id="stack" className="sheet wrap">
        <div className="sheet__head">
          <span className="sheet__no">03</span>
          <h2>Bill of materials</h2>
          <span className="rule" />
          <span className="mono">Bold = shipped to production</span>
        </div>
        <div className="bom">
          {bom.map((r, i) => (
            <div className={`bom__row k-${r.key}`} key={`${r.label}-${i}`}>
              <div className="bom__k">{r.label}</div>
              <div className="bom__v">{r.value}</div>
            </div>
          ))}
        </div>
        <p className="bom__note">
          I don&apos;t list things I&apos;ve only read about. Everything in bold has been through a
          deploy, a bug, and a fix.
        </p>
      </section>

      <section id="method" className="sheet wrap">
        <div className="sheet__head">
          <span className="sheet__no">04</span>
          <h2>How I work with clients</h2>
          <span className="rule" />
        </div>
        <div className="method">
          {method.map((m) => (
            <div className={`method__item k-${m.key}`} key={m.n}>
              <span className="method__n">{m.n}</span>
              <h3>{m.h}</h3>
              <p>{m.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="record" className="sheet wrap">
        <div className="sheet__head">
          <span className="sheet__no">05</span>
          <h2>Record</h2>
          <span className="rule" />
        </div>
        <div className="record">
          {record.map((r) => (
            <div className={`rrow k-${r.key}`} key={r.title}>
              <div className="rrow__k">{r.kind}</div>
              <div className="rrow__m">
                <strong>{r.title}</strong>
                {r.body ? <span>{r.body}</span> : null}
              </div>
              <div className="rrow__w">{r.when}</div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
