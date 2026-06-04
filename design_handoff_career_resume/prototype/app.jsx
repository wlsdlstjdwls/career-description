/* 경력 기술서 — 루트 앱: 방향 전환 + 스크롤 스파이 + 리빌 + 인쇄 */
const { useState: useStateA, useEffect: useEffectA } = React;

const DIRS = [
  { id: "dark",    label: "다크" },
  { id: "light",   label: "라이트" },
  { id: "minimal", label: "미니멀" }
];

function App() {
  const [dir, setDir] = useStateA(() => {
    const v = localStorage.getItem("cv-dir");
    if (["light", "dark", "minimal"].includes(v)) return v;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });
  const [active, setActive] = useStateA("intro");

  useEffectA(() => {
    document.body.className = dir;
    const r = document.querySelector(".resume");
    r.setAttribute("data-dir", dir);
    localStorage.setItem("cv-dir", dir);
    window.scrollTo({ top: 0 });
  }, [dir]);

  // scroll-spy
  useEffectA(() => {
    const ids = window.RESUME.nav.map(n => n.id);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-25% 0px -68% 0px", threshold: 0 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [dir]);

  return (
    <React.Fragment>
      <Resume data={window.RESUME} active={active} />

      <div className="switcher">
        <span className="sw-label">테마</span>
        {DIRS.map(d => (
          <button key={d.id} className={dir === d.id ? "active" : ""} onClick={() => setDir(d.id)}>{d.label}</button>
        ))}
      </div>

      <button className="print-btn" onClick={() => window.print()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        <span>PDF로 저장</span>
      </button>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
