/* 경력 기술서 — 렌더링 컴포넌트 (프리미엄 리디자인) */

function Stat({ s }) {
  return (
    <div className="stat">
      <div>
        <span className="stat-value">{s.value}</span>
        <span className="stat-suffix">{s.suffix}</span>
      </div>
      <div className="stat-label">{s.label}</div>
    </div>
  );
}

function TopNav({ data, active }) {
  return (
    <nav className="topnav">
      {data.nav.map(n => (
        <a key={n.id} href={"#" + n.id} className={active === n.id ? "active" : ""}>{n.label}</a>
      ))}
    </nav>
  );
}

function Masthead({ data }) {
  const p = data.profile;
  return (
    <header className="masthead">
      <div className="mast-eyebrow" data-reveal>{p.role} · {p.domain}</div>
      <h1 className="mast-name" data-reveal>{p.name}<span className="mast-name-en">{p.nameEn}</span></h1>
      <p className="mast-role" data-reveal>E-커머스 백엔드 전문 개발자 · 상품 · 주문 · 프로모션 · 클레임 도메인을 설계·개발·운영합니다.</p>

      <div className="mast-contact" data-reveal>
        <span className="cc-item">
          <span className="cc-key">Email</span>
          <a href={"mailto:" + p.email}>{p.email}</a>
        </span>
        {p.links.map((l, i) => (
          <span className="cc-item" key={i}>
            <span className="cc-key">{l.label}</span>
            <a href={l.href} target="_blank" rel="noreferrer">{l.text}</a>
          </span>
        ))}
      </div>

      <div className="mast-stats">
        {data.stats.map((s, i) => <Stat key={i} s={s} />)}
      </div>
    </header>
  );
}

function Section({ num, en, title, id, children }) {
  return (
    <section className="section" id={id}>
      <div className="sec-rail">
        <span className="sec-index">{num}</span>
        <span className="sec-en">{en}</span>
      </div>
      <div className="sec-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Blocks({ sections, twoCol }) {
  return (
    <div className={twoCol ? "blocks-2col" : ""}>
      {sections.map((b, i) => (
        <div className="block" key={i}>
          <div className="block-title">{b.title}</div>
          <ul className="block-list">
            {b.items.map((it, j) => <li key={j}>{it}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Tech({ tech }) {
  if (!tech || !tech.length) return null;
  return (
    <div className="tech">
      {tech.map((t, i) => <span className="tech-tag" key={i}>{t}</span>)}
    </div>
  );
}

function FeaturedProject({ pr }) {
  return (
    <article className="card featured" data-reveal>
      <div className="entry-top">
        <span className="feat-badge">Featured</span>
        <span className="entry-period">{pr.period.split(" · ")[0]}</span>
        <span className="entry-duration">{pr.period.split(" · ").slice(1).join(" · ")}</span>
        {pr.status && <span className="entry-status live">{pr.status}</span>}
      </div>
      <div className="entry-head"><h3 className="entry-title">{pr.name}</h3></div>
      <Blocks sections={pr.sections} twoCol={true} />
      <Tech tech={pr.tech} />
    </article>
  );
}

function ProjectEntry({ pr }) {
  const [head, ...rest] = pr.period.split(" · ");
  return (
    <article className="card" data-reveal>
      <div className="entry-top">
        <span className="entry-period">{head}</span>
        {rest.length > 0 && <span className="entry-duration">{rest.join(" · ")}</span>}
        {pr.status && <span className="entry-status">{pr.status}</span>}
      </div>
      <div className="entry-head"><h3 className="entry-title">{pr.name}</h3></div>
      {pr.link && (
        <p className="entry-sub">
          <a href={pr.link.href} target="_blank" rel="noreferrer">↗ {pr.link.text}</a>
        </p>
      )}
      <Blocks sections={pr.sections} />
      <Tech tech={pr.tech} />
    </article>
  );
}

function CareerEntry({ c }) {
  return (
    <article className="card" data-reveal>
      <div className="entry-top">
        <span className="entry-period">{c.period}</span>
        <span className="entry-duration">{c.duration}</span>
        <span className="entry-company">{c.company}</span>
        {c.status && <span className="entry-status live">{c.status}</span>}
      </div>
      <div className="entry-head"><h3 className="entry-title">{c.role}</h3></div>
      <ul className="point-list">
        {c.points.map((pt, i) => <li key={i}>{pt}</li>)}
      </ul>
    </article>
  );
}

function Resume({ data, active }) {
  const featured = data.projects.find(p => p.featured);
  const rest = data.projects.filter(p => !p.featured);
  return (
    <div className="page">
      <TopNav data={data} active={active} />
      <Masthead data={data} />

      <main>
        <Section num="01" en="About" id="intro" title="소개">
          <p className="intro-lead">{data.intro.lead}</p>
          <div className="intro-body">
            {data.intro.body.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </Section>

        <Section num="02" en="Skills" id="skills" title="핵심 기술">
          <div className="skills-grid">
            {data.skills.map((g, i) => (
              <div className="skill-group" key={i}>
                <div className="skill-title">{g.title}</div>
                <div className="skill-chips">
                  {g.items.map((it, j) => <span className="tag" key={j}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section num="03" en="Experience" id="career" title="경력">
          {data.career.map((c, i) => <CareerEntry key={i} c={c} />)}
        </Section>

        <Section num="04" en="Projects" id="projects" title="대표 프로젝트">
          {featured && <FeaturedProject pr={featured} />}
          {rest.map((p, i) => <ProjectEntry key={i} pr={p} />)}
        </Section>

        <Section num="05" en="Side" id="side" title="사이드 프로젝트">
          {data.side.map((p, i) => <ProjectEntry key={i} pr={p} />)}
        </Section>

        <Section num="06" en="Education" id="education" title="교육 · 자격">
          <ul className="edu-grid">
            {data.education.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </Section>

        <Section num="07" en="More" id="etc" title="그 외">
          {data.etc.map((e, i) => (
            <div className="etc-item" key={i}>
              <div className="etc-head">
                <h3 className="etc-title">{e.title}</h3>
                {e.href
                  ? <a className="etc-meta" href={e.href} target="_blank" rel="noreferrer">{e.meta}</a>
                  : <span className="etc-meta">{e.meta}</span>}
              </div>
              <p className="etc-body">{e.body}</p>
            </div>
          ))}
        </Section>

        <footer className="resume-footer">
          <span>© 2026 김성진 · 서버 백엔드 엔지니어</span>
          <span>KIM SEONGJIN · BACKEND ENGINEER</span>
        </footer>
      </main>
    </div>
  );
}

Object.assign(window, { Resume });
