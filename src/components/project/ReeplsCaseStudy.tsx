import { useEffect, useState } from 'react';

const INTENTS = [
  { key: 'learn', label: 'LEARN', color: '#60a5fa', elements: ['PROGRAMS', 'COURSES', 'RESOURCES'] },
  { key: 'work', label: 'WORK', color: '#a78bfa', elements: ['OPPORTUNITIES', 'PROFESSIONALS'] },
  { key: 'connect', label: 'CONNECT', color: '#f59e0b', elements: ['EVENTS', 'COMMUNITY'] },
  { key: 'build', label: 'BUILD', color: '#34d399', elements: ['PRODUCTS', 'PROJECTS'] },
  { key: 'space', label: 'SPACE', color: '#22d3ee', elements: ['SPACES', 'HUBS'] },
  { key: 'partner', label: 'PARTNER', color: '#f472b6', elements: ['PARTNERSHIPS', 'PROGRAMS'] },
];

const journeySteps = [
  'ARRIVE WITH INTENT',
  'CHOOSE A PATH',
  'DISCOVER THE RIGHT ECOSYSTEM',
  'MOVE TO A RELEVANT DESTINATION',
  'TAKE ACTION WITH CLARITY',
];

export default function ReeplsCaseStudy() {
  const [activeIntent, setActiveIntent] = useState('learn');
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % journeySteps.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="space-y-20 pb-16 text-white">
      <section className="pt-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">REEPLS</p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none tracking-[-0.06em] md:text-6xl">
                Designing clarity into a growing digital ecosystem.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#d8d2cc]">
                Reepls brings together learning, community, spaces, products, events and opportunities. The challenge was not to remove anything — it was to give each visitor a clearer path into the ecosystem without forcing them to decode the entire structure first.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <InfoCard label="ROLE" value="UI/UX Designer" />
                <InfoCard label="PLATFORM" value="Responsive Web" />
                <InfoCard label="FOCUS" value="Ecosystem clarity" />
                <InfoCard label="OUTCOME" value="Intent-led navigation" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#c4c9ce]">REEPLS</span>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,#1d2732_0%,#0d1115_45%,#090b0d_100%)] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">WHY IT MATTERS</div>
                      <div className="mt-3 font-display text-3xl tracking-[-0.06em] text-white">WHAT ARE YOU HERE TO DO?</div>
                    </div>
                    <div className="rounded-full border border-[#8fe0ba]/30 bg-[#8fe0ba]/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#d8f8eb]">
                      user intent
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {INTENTS.map((item) => (
                      <button
                        key={item.key}
                        onMouseEnter={() => setActiveIntent(item.key)}
                        onFocus={() => setActiveIntent(item.key)}
                        className={`relative overflow-hidden rounded-[18px] border p-3 text-left transition-all duration-300 ${
                          activeIntent === item.key
                            ? 'border-white/20 bg-white/8 shadow-[0_20px_40px_rgba(0,0,0,0.20)]'
                            : 'border-white/8 bg-white/4'
                        }`}
                        style={{
                          transform: activeIntent === item.key ? 'translateY(-4px)' : 'translateY(0)',
                          boxShadow: activeIntent === item.key ? `inset 0 0 0 1px ${item.color}66` : 'none',
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-lg text-white">{item.label}</span>
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                        </div>
                        <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#c9d4dd]">
                          {item.elements[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE REAL PROBLEM</div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-[28px] border border-white/10 bg-[#0d1014] p-6">
              <p className="max-w-3xl text-xl leading-relaxed text-[#e7e3df]">
                The platform had plenty of valuable content, but it was all competing for attention at the same time. Users were arriving with different goals, and the site was expecting them to understand the entire ecosystem before they could take a single meaningful step.
              </p>
              <div className="mt-8 text-4xl font-display leading-none tracking-[-0.06em] text-white md:text-6xl">
                WHEN EVERYTHING IS IMPORTANT,<br /> NOTHING FEELS IMPORTANT.
              </div>
            </div>

            <div className="space-y-4">
              <MetricCard label="01" title="too many entry points" value="everything was visible, nothing was prioritized" />
              <MetricCard label="02" title="unclear audience intent" value="visitors did not know which path best matched their need" />
              <MetricCard label="03" title="high cognitive load" value="the homepage asked users to learn the system before using it" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE DESIGN SHIFT</div>
          <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <div className="font-display text-3xl tracking-[-0.06em] text-white md:text-5xl">I stopped designing pages. I started designing relationships.</div>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#d8d2cc]">
                  Instead of treating programs, products, spaces and events as disconnected destinations, I organized them by the reasons people were arriving. This transformed the homepage from a content dump into a decision-making tool.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {INTENTS.map((item) => (
                  <div
                    key={item.key}
                    className="rounded-[22px] border border-white/8 bg-[#11161a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
                    style={{ boxShadow: activeIntent === item.key ? `inset 0 0 0 1px ${item.color}66` : 'none' }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-white">{item.label}</span>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-[#d8d2cc]">
                      {item.elements.map((entry) => (
                        <div key={entry} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: item.color }} />
                          <span>{entry}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE 3D EXPLANATION</div>
          <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <LayeredCard title="ARRIVAL" text="A visitor lands with a goal, not a roadmap." accent="#8fe0ba" />
                <LayeredCard title="DIRECTION" text="The homepage narrows the decision to a few likely paths." accent="#c4b5fd" />
                <LayeredCard title="ACTION" text="The user moves into the right ecosystem without friction." accent="#fbbf24" />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#121a20,#0c1117_35%,#090b0d)] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.5)]">
                <div className="relative h-[360px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,#122d2d_0%,#0d1114_45%,#090b0d_100%)]">
                  <div className="absolute inset-0 opacity-70" style={{ background: 'linear-gradient(135deg, rgba(143,224,186,0.14), transparent 35%, rgba(196,181,253,0.12))' }} />
                  {[0, 1, 2, 3, 4].map((layer) => (
                    <div
                      key={layer}
                      className="absolute left-1/2 top-1/2 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm"
                      style={{
                        width: `${260 - layer * 20}px`,
                        height: `${160 - layer * 18}px`,
                        transform: `translate(-50%, -50%) rotateX(${18 + layer * 8}deg) rotateY(${(-18 + layer * 10).toString()}deg) translateY(${layer * 16}px)`,
                        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                      }}
                    />
                  ))}

                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8fe0ba]/40 bg-[#0d110f] px-7 py-5 text-center shadow-[0_0_35px_rgba(143,224,186,0.25)]">
                    <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">KEY IDEA</div>
                    <div className="mt-2 font-display text-2xl tracking-[-0.05em] text-white">INTENT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE EXPERIENCE FLOW</div>
          <div className="grid gap-4 md:grid-cols-5">
            {journeySteps.map((stepName, index) => (
              <div
                key={stepName}
                className={`rounded-[22px] border p-4 transition-all duration-300 ${
                  step === index ? 'border-[#8fe0ba]/40 bg-[#8fe0ba]/10 shadow-[0_25px_60px_rgba(143,224,186,0.16)]' : 'border-white/8 bg-[#0d1014]'
                }`}
              >
                <div className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#c4c9ce]">0{index + 1}</div>
                <div className="mt-4 font-display text-xl text-white">{stepName}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 lg:grid-cols-3">
            <ResultCard number="01" title="Clearer entry" text="The homepage speaks to user intent immediately instead of dumping everything at once." />
            <ResultCard number="02" title="Better discovery" text="Visitors can move from curiosity to relevance without friction." />
            <ResultCard number="03" title="Higher trust" text="The experience feels structured, generous and confident rather than crowded." />
          </div>
        </div>
      </section>
    </article>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-white/8 bg-white/4 p-4">
      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{label}</div>
      <div className="mt-2 text-[#f2f0ee]">{value}</div>
    </div>
  );
}

function MetricCard({ label, title, value }: { label: string; title: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-[#101418] p-5">
      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{label}</div>
      <div className="mt-3 font-display text-2xl tracking-[-0.04em] text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{value}</p>
    </div>
  );
}

function LayeredCard({ title, text, accent }: { title: string; text: string; accent: string }) {
  return (
    <div
      className="relative rounded-[22px] border border-white/8 bg-[#11161a] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
      style={{ transform: 'perspective(900px) rotateX(12deg) rotateY(-8deg)' }}
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="flex items-center justify-between">
        <span className="font-display text-xl text-white">{title}</span>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{text}</p>
    </div>
  );
}

function ResultCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-[#0d1014] p-5">
      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{number}</div>
      <div className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{text}</p>
    </div>
  );
}

