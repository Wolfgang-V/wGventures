import Image from "next/image";
import Link from "next/link";
import type { Project, Shot } from "@/lib/projects";

export function Shots({ shots, limit }: { shots: Shot[]; limit?: number }) {
  const list = limit ? shots.slice(0, limit) : shots;
  if (!list.length) return null;
  const phones = list.every((s) => s.phone);
  return (
    <div className={phones && list.length > 1 ? "shots shots--phones" : "shots"}>
      {list.map((s) => (
        <figure key={s.src} className={s.phone ? "shot shot--phone" : "shot"}>
          <div className="shot__frame">
            <Image
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              sizes={s.phone ? "(max-width: 620px) 100vw, 280px" : "(max-width: 900px) 100vw, 620px"}
            />
          </div>
          <figcaption className="shot__cap">{s.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Assembly({ p }: { p: Project }) {
  return (
    <>
      <span className="mono">Assembly — exploded view</span>
      <div className="assembly">
        {p.layers.map((l) => (
          <div className="layer" key={l.name}>
            <div className="layer__plate">
              <span>
                <span className="layer__name">{l.name}</span>
                <span className="layer__tech">{l.tech}</span>
              </span>
            </div>
            <div className="layer__lead" />
            <div className="layer__ref">{l.ref}</div>
          </div>
        ))}
      </div>
      <p className="assembly__hint">{p.figure}</p>
    </>
  );
}

export function Specs({ p }: { p: Project }) {
  if (!p.specs?.length) return null;
  return (
    <dl className="specs">
      {p.specs.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Note({ p }: { p: Project }) {
  return (
    <div className="note">
      <h4>{p.note.heading}</h4>
      <p>{p.note.body}</p>
    </div>
  );
}

/** Card as it appears on the index sheet. */
export function CaseCard({ p }: { p: Project }) {
  const lead = p.shots[0];
  return (
    <article className={`case k-${p.key}`} tabIndex={0}>
      <div className="case__flag" aria-hidden="true" />
      <div className="case__top">
        <div>
          <div className="case__id">
            <span className="tag key">{p.dwg}</span>
            {p.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <h3>{p.title}</h3>
          <p className="case__what">{p.what}</p>
        </div>
        <div className="case__role">{p.role}</div>
      </div>

      <div className="case__body">
        <div className="case__left">
          {lead ? <Shots shots={[lead]} /> : null}
          <Assembly p={p} />
        </div>

        <div className="case__right">
          <Specs p={p} />
          <ul className="built">
            {p.built.slice(0, 5).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Note p={p} />
          <div className="case__links">
            <Link className="btn btn--fill" href={`/work/${p.slug}`}>
              Open the drawing
            </Link>
            {p.live ? (
              <a className="btn" href={p.live.href} target="_blank" rel="noopener">
                {p.live.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
