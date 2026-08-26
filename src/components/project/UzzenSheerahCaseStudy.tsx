import { useState } from 'react';

const navItems = ['HOME', 'ABOUT', 'PROGRAMS', 'ENGAGE'];

const visitorIntents = [
  {
    title: 'UNDERSTAND',
    copy: 'Someone arrives curious and needs context before anything else.',
    accent: '#8fe0ba',
  },
  {
    title: 'EXPLORE',
    copy: 'Someone wants to understand what the initiative actually does.',
    accent: '#c9d4ff',
  },
  {
    title: 'ENGAGE',
    copy: 'Someone is ready to contribute, collaborate or take part.',
    accent: '#f4c58b',
  },
];

const designPrinciples = [
  {
    title: 'LEAD WITH PURPOSE',
    text: 'Instead of opening with dense institutional detail, the website establishes who Uzzen Sheerah is before the visitor is asked to go deeper.',
    accent: '#8fe0ba',
  },
  {
    title: 'MAKE THE WORK DISCOVERABLE',
    text: 'Programs, initiatives and community opportunities should be easy to recognize without forcing someone to decode the structure.',
    accent: '#a5b4fc',
  },
  {
    title: 'USE CONTENT TO BUILD TRUST',
    text: 'Story, purpose and community belong together. Trust grows from clarity, not overload.',
    accent: '#f4c58b',
  },
  {
    title: 'LET ACTION FOLLOW UNDERSTANDING',
    text: 'Calls to action work best when they arrive after context and clarity, not before.',
    accent: '#fbcfe8',
  },
];

export default function UzzenSheerahCaseStudy() {
  const [activeCard, setActiveCard] = useState('ABOUT');

  return (
    <article className="case-study-shell space-y-20 pb-16 text-white">
      <section className="pt-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">UZZEN SHEERAH</div>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none tracking-tight md:text-6xl">
                Designing a digital front door for impact.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#d8d2cc]">
                Uzzen Sheerah needed a website that could communicate mission, community and purpose in a way that felt immediate and welcoming. The objective was to make the organization easier to understand without losing the warmth and intention behind it.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <InfoCard label="ROLE" value="UI/UX Designer" />
                <InfoCard label="PROJECT" value="NGO / Social Impact" />
                <InfoCard label="FOCUS" value="Clarity + engagement" />
                <InfoCard label="PLATFORM" value="Responsive Web" />
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#c4c9ce]">UZZEN SHEERAH</span>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,#1d2d30_0%,#111619_46%,#090b0d_100%)] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-display text-2xl tracking-tight text-white">UZZEN SHEERAH</div>
                  <div className="flex gap-2 text-[10px] uppercase tracking-[0.12em] text-[#d6dfe5]">
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onMouseEnter={() => setActiveCard(item)}
                        onFocus={() => setActiveCard(item)}
                        className={`rounded-full px-2.5 py-1.5 transition ${
                          activeCard === item ? 'bg-[#8fe0ba] text-[#0b0b0a]' : 'bg-white/4 text-[#d8d2cc]'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ['ABOUT', 'Identity + purpose', '#8fe0ba'],
                    ['PROGRAMS', 'Work + initiatives', '#a5b4fc'],
                    ['ENGAGE', 'Community + action', '#f4c58b'],
                  ].map(([title, copy, color]) => (
                    <div
                      key={title}
                      className="rounded-[18px] border border-white/8 bg-white/4 p-4 transition duration-300 hover:-translate-y-1"
                      style={{ boxShadow: activeCard === title ? `inset 0 0 0 1px ${color}66` : 'none' }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">{title}</span>
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                      </div>
                      <div className="mt-3 text-sm text-[#f2f0ee]">{copy}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE ALIGNED STRATEGY</div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-6 md:p-8">
              <p className="max-w-4xl text-xl leading-relaxed text-[#e7e3df]">
                The main challenge was not lack of meaning, it was the need to make that meaning immediately legible. The organization had a strong story, but it needed a structure that helped visitors feel the mission before asking them to understand everything all at once.
              </p>
              <div className="mt-8 font-display text-4xl leading-none tracking-tight text-white md:text-6xl">
                DON’T MAKE PEOPLE LEARN THE ORGANIZATION BEFORE THEY FEEL IT.
              </div>
            </div>

            <div className="space-y-4">
              {visitorIntents.map((item, index) => (
                <VisitorIntentCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE DESIGN IN A FEW LAYERS</div>
          <div className="rounded-[30px] border border-white/10 bg-[#0d1014] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <LayeredCard title="PURPOSE" text="Lead with the mission so the visitor understands the organization before exploring the details." accent="#8fe0ba" />
                <LayeredCard title="DISCOVERY" text="Create clear pathways into programs, community involvement and impact areas." accent="#a5b4fc" />
                <LayeredCard title="ACTION" text="Let engagement follow context so participation feels natural and intentional." accent="#f4c58b" />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#10181c,#0d1014_38%,#090b0d)] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.5)]">
                <div className="story-3d-stage relative h-[360px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,#13302d_0%,#10181c_45%,#090b0d_100%)]">
                  {[0, 1, 2, 3].map((layer) => (
                    <div
                      key={layer}
                      className="story-layer absolute left-1/2 top-1/2 rounded-[22px] border border-white/10 bg-white/4 backdrop-blur-sm"
                      style={{
                        width: `${265 - layer * 22}px`,
                        height: `${165 - layer * 18}px`,
                        transform: `translate(-50%, -50%) rotateX(${14 + layer * 8}deg) rotateY(${(-12 + layer * 12).toString()}deg) translateY(${layer * 18}px)`,
                        boxShadow: '0 25px 50px rgba(0,0,0,0.22)',
                      }}
                    />
                  ))}

                  <div className="story-orb absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8fe0ba]/35 bg-[#0b110f] px-7 py-5 text-center shadow-[0_0_35px_rgba(143,224,186,0.20)]">
                    <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">MISSION</div>
                    <div className="mt-2 font-display text-2xl tracking-tight text-white">PURPOSE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">DESIGN PRINCIPLES</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {designPrinciples.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-white/8 bg-[#0d1014] p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.accent }} />
                  <div className="font-display text-xl text-white">{item.title}</div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#d8d2cc]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE OUTCOME</div>
          <div className="grid gap-6 md:grid-cols-3">
            <ResultCard number="01" title="clarity" text="Visitors understand the mission immediately without needing a long explanation." />
            <ResultCard number="02" title="discoverability" text="Programs and community pathways feel visible, structured and easy to explore." />
            <ResultCard number="03" title="engagement" text="Calls to action become natural because the context arrives before the ask." />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">VIEW LIVE</div>
          <div className="flex justify-center">
            <a
              href="https://uzzensheerah.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#8fe0ba] px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[#0b0b0a] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(143,224,186,0.25)]"
            >
              VIEW LIVE WEBSITE →
            </a>
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

function VisitorIntentCard({ item, index }: { item: { title: string; copy: string; accent: string }; index: number }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-[#101418] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15">
      <div className="flex items-center justify-between">
        <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">0{index + 1}</span>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.accent }} />
      </div>
      <div className="mt-4 font-display text-2xl tracking-tight text-white">{item.title}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{item.copy}</p>
    </div>
  );
}

function LayeredCard({ title, text, accent }: { title: string; text: string; accent: string }) {
  return (
    <div
      className="relative rounded-[22px] border border-white/8 bg-[#11161a] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)]"
      style={{ transform: 'perspective(900px) rotateX(10deg) rotateY(-8deg)' }}
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
      <div className="mt-4 font-display text-2xl tracking-tight text-white">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{text}</p>
    </div>
  );
}

