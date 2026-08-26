import React, { useEffect, useRef, useState } from 'react';

const INTENTS = [
  { key: 'learn', label: 'LEARN', color: '#2563EB', elements: ['PROGRAMS', 'COURSES', 'RESOURCES'] },
  { key: 'work', label: 'WORK', color: '#7C3AED', elements: ['OPPORTUNITIES', 'PROFESSIONALS'] },
  { key: 'connect', label: 'CONNECT', color: '#F97316', elements: ['EVENTS', 'COMMUNITY'] },
  { key: 'build', label: 'BUILD', color: '#10B981', elements: ['PRODUCTS', 'PROJECTS'] },
  { key: 'space', label: 'SPACE', color: '#06B6D4', elements: ['SPACES', 'HUBS'] },
  { key: 'partner', label: 'PARTNER', color: '#FB7185', elements: ['PARTNERSHIPS', 'PROGRAMS'] },
];

export default function ReeplsCaseStudy() {
  const [active, setActive] = useState<string | null>(null);
  const [reorganized, setReorganized] = useState(false);
  const particleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (!particleRef.current) return;
    let raf = 0;
    let t0 = performance.now();
    const loop = (t: number) => {
      const p = ((t - t0) / 2000) % 1;
      // simple circular motion when no active path
      const r = 120;
      const cx = 320;
      const cy = 160;
      const a = p * Math.PI * 2;
      particleRef.current!.setAttribute('cx', String(cx + Math.cos(a) * r));
      particleRef.current!.setAttribute('cy', String(cy + Math.sin(a) * r));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="space-y-20">
      {/* HERO */}
      <section className="pt-6">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">REEPLS</p>
              <h1 className="mt-4 font-display text-4xl md:text-6xl">Designing clarity into a growing digital ecosystem.</h1>
              <p className="mt-4 text-lg text-[#d8d2cc] max-w-2xl">Reepls is a technology and learning ecosystem with programs, events, spaces, products and opportunities. The challenge was not to make Reepls smaller — it was to make it easier to understand.
              I reframed the homepage around user intent so people could enter the ecosystem through what they wanted to do rather than first having to understand how the organization was structured.</p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#c9c3bb]">
                <div><strong className="block text-white">ROLE</strong> UI/UX Designer</div>
                <div><strong className="block text-white">PLATFORM</strong> Responsive Web</div>
                <div><strong className="block text-white">FOCUS</strong> Ecosystem clarity</div>
                <div><strong className="block text-white">OUTCOME</strong> Structured discoverability</div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[340px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 overflow-visible">
                <svg viewBox="0 0 640 320" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  {/* center */}
                  <g>
                    <circle cx={320} cy={160} r={48} fill="#0b0b0a" stroke="#374151" strokeWidth={2} />
                    <text x={320} y={166} textAnchor="middle" fill="#fff" fontWeight={700} fontSize={18}>REEPLS</text>
                  </g>

                  {/* intents and paths */}
                  {INTENTS.map((it, i) => {
                    const angle = (i / INTENTS.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 320 + Math.cos(angle) * 140;
                    const y = 160 + Math.sin(angle) * 110;
                    const pathD = `M ${320} ${160} Q ${(320 + x) / 2} ${(160 + y) / 2 - 30} ${x} ${y}`;
                    return (
                      <g key={it.key} onMouseEnter={() => setActive(it.key)} onMouseLeave={() => setActive(null)} style={{ cursor: 'pointer' }}>
                        <path d={pathD} stroke={it.color} strokeWidth={active === it.key ? 3 : 2} fill="none" opacity={0.9} strokeLinecap="round" />
                        <g>
                          <circle cx={x} cy={y} r={28} fill={it.color} opacity={0.98} />
                          <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={700}>{it.label}</text>
                        </g>
                        {/* related nodes */}
                        {it.elements.map((el, j) => {
                          const ex = x + (j - 1) * 44;
                          const ey = y + 56;
                          return (
                            <g key={el} opacity={active && active !== it.key ? 0.18 : 1}>
                              <path d={`M ${x} ${y + 20} Q ${x + (ex - x) / 2} ${y + 36} ${ex} ${ey}`} stroke={it.color} strokeWidth={1.2} fill="none" strokeLinecap="round" />
                              <rect x={ex - 28} y={ey - 16} rx={8} width={56} height={28} fill="#0b0b0a" stroke={it.color} />
                              <text x={ex} y={ey + 4} textAnchor="middle" fill="#fff" fontSize={10}>{el}</text>
                            </g>
                          );
                        })}
                      </g>
                    );
                  })}

                  {/* particle */}
                  <circle ref={particleRef} r={4} fill="#fff" opacity={0.95} />
                </svg>
              </div>
              <div className="mt-3 text-xs text-[#9ca3af]">Interactive ecosystem: hover intents to illuminate related elements.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & CONTEXT */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE PROBLEM WASN'T LACK OF CONTENT</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#d8d2cc]">The platform contained many valuable offerings. When everything is important, nothing is prioritized. Different people arrive with different intentions: a course-seeker, an event-goer, a partner, a product user, someone looking for a workspace or someone simply trying to understand what Reepls does.</p>
          <div className="mt-6 text-3xl md:text-5xl font-display text-white">WHEN EVERYTHING IS IMPORTANT,<br/>NOTHING IS PRIORITIZED.</div>

          {/* Complexity visual */}
          <div className="mt-8 bg-slate-900 rounded-2xl p-6">
            <ComplexityTransform reorganized={reorganized} onToggle={() => setReorganized((s) => !s)} />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH (statement) */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-3xl">DESIGNING RELATIONSHIPS, NOT JUST PAGES.</h2>
          <blockquote className="mt-4 text-xl text-[#d8d2cc]">"I stopped designing isolated pages and started designing relationships."</blockquote>
          <p className="mt-3 text-[#c9c3bb]">Instead of treating programs, events, products and spaces as separate destinations, I looked at how they relate to the reasons people actually arrive. The homepage became a directional entry point. Rather than asking users to understand Reepls first, it asks a simpler question: What are you here to do?</p>

          <div className="mt-6">
            <IntentMap onHover={(k) => setActive(k)} active={active} />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">02 — ARCHITECTURE EXPLORATION</h3>
          <p className="mt-3 text-[#c9c3bb]">Large visual diagrams showed how programs, events, products and spaces connected — the design kept the relationships central.</p>
          <div className="mt-6 bg-slate-900 rounded-2xl p-6">
            <ArchitectureNetwork active={active} setActive={setActive} />
          </div>
        </div>
      </section>

      {/* SHIFT editorial */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="font-display text-5xl leading-tight text-white">I STOPPED DESIGNING<br/>ISOLATED PAGES.</h2>
          <h3 className="mt-6 font-display text-4xl text-[#8fe0ba]">AND STARTED DESIGNING<br/>RELATIONSHIPS.</h3>
          <p className="mt-6 text-[#c9c3bb]">Behind the typography, the ecosystem reconnects — disconnected nodes gradually align to the six intents.</p>
        </div>
      </section>

      {/* WIREFRAMING */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">03 — WIREFRAMING</h3>
          <p className="mt-3 text-[#c9c3bb]">Wireframes focused on hierarchy and decision points: what deserves attention, what can wait, and where reassurance should appear.</p>
          <WireframeSequence />
        </div>
      </section>

      {/* Design principles */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">DESIGNING FOR DISCOVERABILITY</h3>
          <p className="mt-3 text-[#c9c3bb]">Design principles guided decisions throughout the project.</p>
          <DesignPrinciples />
        </div>
      </section>

      {/* Final experience (coded homepage) */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE FINAL EXPERIENCE</h3>
          <CodedHomepage />
        </div>
      </section>

      {/* User journey, impact, deliverables, learnings */}
      <section>
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">FROM ARRIVAL TO ACTION</h3>
          <p className="mt-3 text-[#c9c3bb]">This explains how the user moves through the system from intent to action.</p>
          <UserJourney />

          <h3 className="mt-10 font-display text-2xl">THE OUTCOME</h3>
          <p className="mt-3 text-[#c9c3bb]">The homepage functions as an entry point rather than an information dump. Clear choices reduce friction and let users enter the ecosystem through intent, preserving the value of each offering while making the whole easier to navigate.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900 rounded-lg"> <strong className="block text-white">INFORMATION ARCHITECTURE</strong><p className="mt-2 text-sm text-[#c9c3bb]">Mini animated ecosystem network</p></div>
            <div className="p-6 bg-slate-900 rounded-lg"> <strong className="block text-white">HOMEPAGE DESIGN</strong><p className="mt-2 text-sm text-[#c9c3bb]">Mini browser UI</p></div>
            <div className="p-6 bg-slate-900 rounded-lg"> <strong className="block text-white">DESIGN SYSTEM</strong><p className="mt-2 text-sm text-[#c9c3bb]">Typography, color, buttons, cards</p></div>
          </div>

          <h3 className="mt-10 font-display text-2xl">WHAT THIS PROJECT TAUGHT ME</h3>
          <p className="mt-3 text-2xl">"Complexity often lives in relationships, not in content quantity."</p>
        </div>
      </section>
    </article>
  );
}

function ComplexityTransform({ reorganized, onToggle }: { reorganized: boolean; onToggle: () => void }) {
  const nodes = ['PROGRAMS','EVENTS','PRODUCTS','SPACES','COMMUNITY','COURSES','OPPORTUNITIES','PARTNERSHIPS','RESOURCES'];
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="p-4 bg-slate-800 rounded-lg h-64 relative">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3">
          {nodes.map((n, i) => (
            <div key={n} className={`px-3 py-2 text-xs rounded border ${reorganized ? 'opacity-40 translate-y-0' : 'bg-white/5'}`} style={{ transform: `translate(${(Math.random()-0.5)*120}px, ${(Math.random()-0.5)*80}px)` }}>{n}</div>
          ))}
        </div>
        <div className="absolute left-3 top-3 text-xs text-[#9ca3af]">Dense ecosystem</div>
      </div>
      <div className="p-4 bg-slate-800 rounded-lg h-64 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3">
            {['LEARN','WORK','CONNECT','BUILD','SPACE','PARTNER'].map((k) => (
              <div key={k} className="px-4 py-3 text-sm rounded-md bg-gradient-to-br from-slate-700 to-slate-600 text-white text-center">{k}</div>
            ))}
          </div>
        </div>
        <div className="absolute left-3 top-3 text-xs text-[#9ca3af]">Reorganized around intent</div>
      </div>
      <div className="col-span-2 text-right">
        <button onClick={onToggle} className="inline-flex items-center gap-2 rounded-full bg-[#8fe0ba] px-4 py-2 text-sm font-medium text-[#0b0b0a]">{reorganized ? 'Show dense' : 'Reorganize'}</button>
      </div>
    </div>
  );
}

function IntentMap({ onHover, active }: { onHover: (k: string | null) => void; active: string | null }) {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {INTENTS.map((it) => (
        <div key={it.key} onMouseEnter={() => onHover(it.key)} onMouseLeave={() => onHover(null)} className={`p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border ${active===it.key ? 'ring-2 ring-white/20' : ''}`}>
          <div className="flex items-center gap-3">
            <div style={{background: it.color}} className="w-3 h-3 rounded" />
            <div className="font-display text-lg text-white">{it.label}</div>
          </div>
          <div className="mt-3 text-sm text-[#c9c3bb]">
            {it.elements.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitectureNetwork({ active, setActive }: { active: string | null; setActive: (s: string | null) => void }) {
  // a compact network visualization
  return (
    <div className="w-full h-72">
      <svg viewBox="0 0 700 300" className="w-full h-full">
        {INTENTS.map((it, i) => {
          const x = 100 + i * 95;
          const y = 60;
          return (
            <g key={it.key} onMouseEnter={() => setActive(it.key)} onMouseLeave={() => setActive(null)}>
              <circle cx={x} cy={y} r={26} fill={it.color} />
              <text x={x} y={y+5} textAnchor="middle" fill="#fff" fontSize={10}>{it.label}</text>
              {it.elements.map((el, j) => (
                <g key={el}>
                  <line x1={x} y1={y+20} x2={x-20 + j*40} y2={y+80} stroke={it.color} strokeWidth={1} opacity={active && active!==it.key ? 0.2 : 0.9} />
                  <rect x={x-36 + j*40} y={y+80} width={72} height={22} rx={6} fill="#0b0b0a" stroke={it.color} />
                  <text x={x-36 + j*40 + 36} y={y+96} textAnchor="middle" fontSize={9} fill="#fff">{el}</text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function WireframeSequence() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-6 grid md:grid-cols-4 gap-4">
      {[0,1,2,3].map((i) => (
        <div key={i} className={`p-4 rounded border ${step===i ? 'border-white/20 bg-slate-800' : 'bg-slate-900'}`}>
          <div className="h-6 bg-white/5 rounded w-3/4 mb-3" />
          <div className="h-3 bg-white/3 rounded w-1/2 mb-6" />
          <div className="grid gap-3">
            <div className="h-12 bg-white/5 rounded" />
            <div className="h-28 bg-white/5 rounded" />
            <div className="flex gap-3">
              <div className="flex-1 h-10 bg-white/5 rounded" />
              <div className="w-20 h-10 bg-white/5 rounded" />
            </div>
          </div>
          <div className="mt-3 text-xs text-[#9ca3af]">Wireframe {i+1}</div>
        </div>
      ))}
    </div>
  );
}

function DesignPrinciples() {
  const cards = [
    {title: 'CLEAR ENTRY POINTS', desc: 'Users should be able to recognize their intent immediately.', color: '#60A5FA'},
    {title: 'PROGRESSIVE DISCLOSURE', desc: 'Not everything needs to compete for attention at the same moment.', color: '#F97316'},
    {title: 'RELATIONSHIPS OVER CATEGORIES', desc: 'Programs, events, products and spaces become more useful when their relationships are visible.', color: '#10B981'},
    {title: 'DIRECTION OVER DENSITY', desc: 'The homepage should help users decide where to go next.', color: '#FB7185'},
  ];
  return (
    <div className="mt-6 grid md:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <div key={i} className="p-4 rounded-lg bg-slate-800 text-white">
          <div className="flex items-center gap-3">
            <div style={{background: c.color}} className="w-3 h-3 rounded" />
            <div className="font-medium">{c.title}</div>
          </div>
          <div className="mt-3 text-sm text-[#d8d2cc]">{c.desc}</div>
        </div>
      ))}
    </div>
  );
}

function CodedHomepage() {
  return (
    <div className="mt-6 border rounded-lg overflow-hidden bg-slate-900">
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/6">
        <div className="font-display text-lg">REEPLS</div>
        <nav className="flex gap-4 text-sm text-[#c9c3bb]"><div>Academy</div><div>Solutions</div><div>Events</div><div>Hackathon Hub</div><div>Blog</div></nav>
      </div>
      <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-display">WHAT ARE YOU HERE TO DO?</h2>
          <p className="mt-3 text-[#c9c3bb]">Entry points aligned to user intent make choices obvious.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {INTENTS.map((it) => (
              <button key={it.key} className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 text-white text-left">
                <div className="font-semibold">{it.label}</div>
                <div className="text-xs mt-1 text-[#c9c3bb]">{it.elements.join(' • ')}</div>
              </button>
            ))}
          </div>
        </div>
        <aside className="p-4 bg-slate-800 rounded-lg">
          <div className="text-sm text-[#d8d2cc]">Quick actions</div>
          <div className="mt-4 space-y-3">
            <div className="h-8 bg-white/6 rounded" />
            <div className="h-8 bg-white/6 rounded" />
          </div>
        </aside>
      </div>
    </div>
  );
}

function UserJourney() {
  const stages = ['ARRIVE AT REEPLS','WHAT ARE YOU HERE TO DO?','INTENT CHOSEN','RELEVANT ECOSYSTEM','RELEVANT DESTINATION','ACTION'];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((s) => Math.min(s+1, stages.length-1)), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        {stages.map((s, i) => (
          <div key={s} className={`p-4 rounded-md ${i===active ? 'bg-slate-800' : 'bg-slate-900'}`}>
            <div className="text-sm text-[#9ca3af]">{i+1}</div>
            <div className="font-medium text-white">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
