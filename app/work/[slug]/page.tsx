import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Assembly, Note, Shots, Specs } from "@/components/Case";
import { Contact, SheetIndex } from "@/components/Chrome";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} — ${p.role}`;
  const description = p.what;
  const image = p.shots[0]?.src ?? "/og.png";
  return {
    title: p.title,
    description,
    openGraph: {
      title,
      description,
      url: `/work/${p.slug}`,
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <>
      <SheetIndex />

      <main className={`proj wrap k-${p.key}`}>
        <Link className="proj__back" href="/#work">
          ← All work
        </Link>

        <div className="proj__head">
          <div className="case__id">
            <span className="tag key">{p.dwg}</span>
            {p.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <h1>{p.title}</h1>
          <p className="case__what">{p.what}</p>
          <div className="proj__meta">
            <span>{p.role}</span>
            {p.live ? (
              <a href={p.live.href} target="_blank" rel="noopener">
                {p.live.href.replace(/^https?:\/\//, "")} ↗
              </a>
            ) : null}
          </div>
        </div>

        <div className="proj__grid">
          <div>
            {p.shots.length ? (
              <div className="proj__sec">
                <span className="mono">Screens</span>
                <Shots shots={p.shots} />
              </div>
            ) : null}

            <div className="proj__sec">
              <span className="mono">What I built</span>
              <ul className="built">
                {p.built.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <Note p={p} />

            {p.live ? (
              <div className="case__links">
                <a className="btn btn--fill" href={p.live.href} target="_blank" rel="noopener">
                  {p.live.label}
                </a>
              </div>
            ) : null}
          </div>

          <aside className="proj__aside">
            <div className="case" style={{ boxShadow: "4px 4px 0 rgba(18,22,15,.1)" }}>
              <div className="case__flag" aria-hidden="true" />
              <div className="case__left" style={{ borderRight: 0 }}>
                <Assembly p={p} />
              </div>
              {p.specs?.length ? (
                <div className="case__right" style={{ paddingTop: 0 }}>
                  <Specs p={p} />
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="proj__next">
          {prev ? (
            <div>
              <span>Previous</span>
              <Link href={`/work/${prev.slug}`}>← {prev.title}</Link>
            </div>
          ) : (
            <span />
          )}
          {next ? (
            <div style={{ textAlign: "right" }}>
              <span>Next</span>
              <Link href={`/work/${next.slug}`}>{next.title} →</Link>
            </div>
          ) : null}
        </div>
      </main>

      <Contact />
    </>
  );
}
