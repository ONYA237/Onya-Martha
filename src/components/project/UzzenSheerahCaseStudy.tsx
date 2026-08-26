import { useState } from "react";

const navItems = ["HOME", "ABOUT", "PROGRAMS", "ENGAGE"];

const visitorIntents = [
  {
    title: "UNDERSTAND",
    copy: "Someone arrives curious and needs context before anything else.",
    accent: "#8fe0ba",
  },
  {
    title: "EXPLORE",
    copy: "Someone wants to understand what the initiative actually does.",
    accent: "#c9d4ff",
  },
  {
    title: "ENGAGE",
    copy: "Someone is ready to contribute, collaborate or take part.",
    accent: "#f4c58b",
  },
];

const intentCards = [
  {
    title: "THE CURIOUS VISITOR",
    text: "I want to understand what this initiative is about.",
    need: "CLARITY",
    response: "Lead with purpose, context and a clear narrative entry point.",
    accent: "#8fe0ba",
  },
  {
    title: "THE PARTICIPANT",
    text: "I want to discover something I can take part in.",
    need: "DISCOVERY",
    response: "Create visible pathways into work, initiatives and community activity.",
    accent: "#a5b4fc",
  },
  {
    title: "THE PARTNER",
    text: "I want to understand the organization before reaching out.",
    need: "CREDIBILITY",
    response: "Use structure, trust-building content and clear organizational context.",
    accent: "#f4c58b",
  },
  {
    title: "THE SUPPORTER",
    text: "I want to know how I can contribute.",
    need: "ACTION",
    response: "Place clear calls to action after understanding, not before it.",
    accent: "#fbb4d1",
  },
];

const designPrinciples = [
  {
    title: "LEAD WITH PURPOSE",
    text: "Instead of opening with a dense collection of institutional information, the experience establishes who Uzzen Sheerah is before asking the visitor to go deeper.",
    accent: "#8fe0ba",
  },
  {
    title: "MAKE THE WORK DISCOVERABLE",
    text: "Programs and initiatives should be visible and easy to understand without forcing the visitor to decode a navigation system.",
    accent: "#a5b4fc",
  },
  {
    title: "USE CONTENT TO BUILD TRUST",
    text: "The organization’s story, purpose and community are part of the same experience. Trust is built through clarity and context, not volume.",
    accent: "#f4c58b",
  },
  {
    title: "LET ACTION FOLLOW UNDERSTANDING",
    text: "The strongest calls to action arrive when a visitor has enough context to act intentionally.",
    accent: "#fbb4d1",
  },
];

const outcomeCards = [
  { title: "CLARITY", text: "A clearer introduction to the organization." },
  { title: "DISCOVERABILITY", text: "A more structured way to explore its work." },
  { title: "ENGAGEMENT", text: "More intentional pathways toward participation and connection." },
];

const learningCards = [
  {
    title: "A GOOD STORY STILL NEEDS HIERARCHY.",
    text: "Mission-driven organizations often have meaningful stories everywhere. The designer’s job isn’t to make every part equally loud. It’s to decide what someone needs to understand first.",
  },
  {
    title: "CLARITY ISN’T ABOUT SAYING LESS.",
    text: "It’s about helping people understand what matters when it matters.",
  },
  {
    title: "ACTION WORKS BETTER WITH CONTEXT.",
    text: "I became more deliberate about where I placed calls to action. I wanted engagement to feel like a natural continuation of the experience rather than an interruption.",
  },
  {
    title: "DESIGN CAN MAKE PURPOSE FEEL CLOSER.",
    text: "For me, the most rewarding part of this project was translating something as intangible as organizational purpose into an interface people could actually navigate.",
  },
];

function InfoList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 text-sm text-[#d8d2cc]">
          <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[#8fe0ba]" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function HeroPreview() {
  const [active, setActive] = useState("ABOUT");
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0f1113] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#a7b0b5]">UZZEN SHEERAH</div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="font-display text-xl tracking-[-0.04em] text-white">UZZEN SHEERAH</div>
        <div className="flex gap-2 text-[10px] text-[#c4c9ce]">
          {navItems.map((item) => (
            <button
              key={item}
              onMouseEnter={() => setActive(item)}
              onFocus={() => setActive(item)}
              className={`rounded-full px-2.5 py-1.5 transition ${active === item ? "bg-[#8fe0ba] text-[#0b0b0a]" : "bg-white/4 text-[#d8d2cc]"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_top,#1f2a2f_0%,#111517_50%,#0b0c0d_100%)] p-6">
          <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">MISSION</div>
          <h3 className="mt-4 max-w-md font-display text-3xl leading-[0.98] tracking-[-0.05em] text-white md:text-5xl">
            BUILDING<br />COMMUNITY THROUGH PURPOSE.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#d8d2cc]">
            Uzzen Sheerah is built around people, purpose and community. The website needed to make that intention clear and give visitors a simple way to understand and participate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "ABOUT",
              "EXPLORE",
              "GET INVOLVED",
            ].map((tag, index) => (
              <button
                key={tag}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  index === 0
                    ? "border-[#8fe0ba]/35 bg-[#8fe0ba]/12 text-[#c8f8de]"
                    : index === 1
                      ? "border-[#b9c8ff]/35 bg-[#b9c8ff]/10 text-[#dfe7ff]"
                      : "border-[#f4c58b]/35 bg-[#f4c58b]/10 text-[#f7e7c4]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["ABOUT", "Identity + purpose", "#8fe0ba"],
            ["EXPLORE", "Work + initiatives", "#a5b4fc"],
            ["GET INVOLVED", "Community + action", "#f4c58b"],
          ].map(([label, caption, color]) => (
            <div
              key={label}
              className="rounded-[18px] border border-white/8 bg-white/4 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-white/15"
              style={{ boxShadow: `inset 0 0 0 1px ${color}22` }}
            >
              <div className="flex items-center justify-between">
                <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#d8d2cc]">{label}</div>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
              </div>
              <div className="mt-3 text-sm text-[#f4f1ee]">{caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisitorIntentCard({ item, index }: { item: (typeof visitorIntents)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-[#101315] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-white/15"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-6px)" : undefined }}
    >
      <div className="flex items-center justify-between">
        <span className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#d8d2cc]">0{index + 1}</span>
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: item.accent }} />
      </div>
      <div className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">{item.title}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{item.copy}</p>
      <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#c5d9d4]">
        <span>NEED</span>
        <span className="text-[#8fe0ba]">→</span>
        <span>{item.title === "UNDERSTAND" ? "CLARITY" : item.title === "EXPLORE" ? "DISCOVERY" : "ACTION"}</span>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/3 to-transparent transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0.2 }}
      />
    </div>
  );
}

function ArchitectureCard() {
  const [active, setActive] = useState("ABOUT");
  const branches = [
    { name: "ABOUT", x: 0, y: 56 },
    { name: "PROGRAMS", x: 108, y: 32 },
    { name: "COMMUNITY", x: 164, y: 92 },
    { name: "ENGAGE", x: 196, y: 16 },
  ];

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0e0f12] p-6">
      <div className="flex items-center justify-between">
        <div className="font-display text-2xl tracking-[-0.04em] text-white">UZZEN SHEERAH</div>
        <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">NAVIGATION</div>
      </div>

      <div className="relative mt-8 h-64 overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_center,#152327_0%,#0e1114_48%,#090b0c_100%)]">
        <svg viewBox="0 0 420 220" className="absolute inset-0 h-full w-full">
          <path d="M210 100 L180 150" stroke="#8fe0ba" strokeOpacity={0.8} strokeWidth={2} />
          <path d="M210 100 L120 70" stroke="#8fe0ba" strokeOpacity={0.8} strokeWidth={2} />
          <path d="M210 100 L290 72" stroke="#8fe0ba" strokeOpacity={0.8} strokeWidth={2} />
          <path d="M210 100 L240 162" stroke="#8fe0ba" strokeOpacity={0.8} strokeWidth={2} />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8fe0ba]/40 bg-[#0d110f] text-center font-display text-sm tracking-[-0.04em] text-white">
          UZZEN
          <br />
          SHEERAH
        </div>

        {branches.map((branch) => (
          <button
            key={branch.name}
            onMouseEnter={() => setActive(branch.name)}
            onFocus={() => setActive(branch.name)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
              active === branch.name
                ? "border-[#8fe0ba]/50 bg-[#8fe0ba]/18 text-white shadow-[0_0_20px_rgba(143,224,186,0.35)]"
                : "border-white/10 bg-black/20 text-[#d8d2cc]"
            }`}
            style={{ left: `${50 + branch.x}px`, top: `${50 + branch.y}px` }}
          >
            {branch.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProcessCard({ title, text, visual }: { title: string; text: string; visual: string }) {
  return (
    <div className="group rounded-[24px] border border-white/10 bg-[#0d1012] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
      <div className="mb-4 flex items-center justify-between">
        <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{title}</div>
        <div className="text-xs text-[#c9c3bb]">{visual}</div>
      </div>
      <p className="text-base leading-relaxed text-[#d8d2cc]">{text}</p>
      <div className="mt-6 rounded-[18px] border border-white/8 bg-[#111417] p-4">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-10 flex-1 rounded-md border border-white/8 bg-white/4"
              style={{ opacity: 0.5 + index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WireframeCard({ title, kind }: { title: string; kind: string }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-[#0d1012] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#8fe0ba]">{title}</div>
        <div className="text-[10px] uppercase tracking-[0.12em] text-[#c9c3bb]">{kind}</div>
      </div>
      <div className="space-y-3 rounded-[18px] border border-white/8 bg-[#12171a] p-4">
        <div className="h-4 w-20 rounded-full bg-white/8" />
        <div className="h-8 w-full rounded-md bg-white/6" />
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="h-20 rounded-md bg-white/6" />
          <div className="h-20 rounded-md bg-white/4" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-md bg-white/5" />
          <div className="h-10 rounded-md bg-white/5" />
          <div className="h-10 rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function BrowserMockup({ activeTab }: { activeTab: string }) {
  const tabs = ["HOME", "ABOUT", "PROGRAMS", "ENGAGE"];
  const current = tabs.includes(activeTab) ? activeTab : "HOME";

  const contentMap: Record<string, JSX.Element> = {
    HOME: (
      <div className="space-y-4">
        <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(135deg,#122a2d,#0d1012_40%,#101416_100%)] p-5">
          <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">MISSION</div>
          <div className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-white">DESIGNING A DIGITAL FRONT DOOR FOR IMPACT.</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            "ABOUT",
            "EXPLORE",
            "GET INVOLVED",
          ].map((label) => (
            <div key={label} className="rounded-[14px] border border-white/8 bg-white/4 p-3 text-sm text-[#f1efed]">
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    ABOUT: (
      <div className="space-y-4">
        <div className="h-16 rounded-[14px] bg-white/6" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-28 rounded-[14px] bg-white/5" />
          <div className="h-28 rounded-[14px] bg-white/4" />
        </div>
      </div>
    ),
    PROGRAMS: (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-28 rounded-[14px] border border-white/8 bg-white/5" />
          ))}
        </div>
      </div>
    ),
    ENGAGE: (
      <div className="space-y-4">
        <div className="h-12 rounded-[12px] bg-[#8fe0ba]/15" />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-24 rounded-[14px] bg-white/5" />
          <div className="h-24 rounded-[14px] bg-white/5" />
        </div>
      </div>
    ),
  };

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0f1214] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111416] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex gap-2 text-[10px] uppercase tracking-[0.14em] text-[#c4c9ce]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => (window as any).dispatchEvent?.(new CustomEvent("set-uzzen-tab", { detail: tab }))}
              className={`rounded-full px-2.5 py-1.5 transition ${current === tab ? "bg-[#8fe0ba] text-[#0b0b0a]" : "bg-white/4 text-[#d8d2cc]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 md:p-6">{contentMap[current]}</div>
    </div>
  );
}

function DeviceCard({ label, size }: { label: string; size: string }) {
  return (
    <div className="rounded-[26px] border border-white/8 bg-[#0e1113] p-4">
      <div className="mb-4 text-center text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">{label}</div>
      <div className="mx-auto flex items-center justify-center rounded-[18px] border border-white/8 bg-[#111517] p-3" style={{ width: size }}>
        <div className="w-full rounded-[12px] border border-white/8 bg-[#0a0d0f] p-3">
          <div className="mb-3 h-2.5 w-14 rounded-full bg-white/8" />
          <div className="h-12 rounded-md bg-[#8fe0ba]/10" />
          <div className="mt-3 grid gap-2">
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignSystemCard() {
  const tokens = [
    { name: "COLORS", value: "Forest / stone / warm accent" },
    { name: "TYPOGRAPHY", value: "Editorial headlines + clear sans copy" },
    { name: "BUTTONS", value: "Simple, confident, low-noise CTAs" },
    { name: "CARDS", value: "Soft borders, layered surfaces, calm depth" },
    { name: "SPACING", value: "Generous rhythm, easy scanning" },
    { name: "NAVIGATION", value: "Clear and purposeful, not decorative" },
  ];

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0e1214] p-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tokens.map((token) => (
          <div key={token.name} className="rounded-[18px] border border-white/8 bg-white/4 p-4">
            <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{token.name}</div>
            <div className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{token.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UzzenSheerahCaseStudy() {
  const [activeScreen, setActiveScreen] = useState("HOME");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <article className="space-y-20 pb-12">
      <section className="pt-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">UZZEN SHEERAH INITIATIVE</div>
              <h1 className="mt-4 max-w-3xl font-display text-[3.1rem] leading-[0.9] tracking-[-0.06em] text-white md:text-[5.5rem]">
                DESIGNING A DIGITAL FRONT DOOR FOR IMPACT.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d8d2cc]">
                Uzzen Sheerah is an initiative built around people, purpose and community. The challenge was to create a digital experience that could communicate that purpose clearly while giving visitors an intuitive way to discover the organization’s work and find where they could engage.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">ROLE</div>
                  <div className="mt-2 text-[#f0eeeb]">UI/UX Designer</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">PROJECT TYPE</div>
                  <div className="mt-2 text-[#f0eeeb]">NGO / Social Impact Website</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">FOCUS</div>
                  <div className="mt-2 text-[#f0eeeb]">Clarity · Discoverability · Engagement</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">PLATFORM</div>
                  <div className="mt-2 text-[#f0eeeb]">Responsive Web</div>
                </div>
              </div>
            </div>

            <div className="lg:pt-6">
              <HeroPreview />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-6 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE WEBSITE HAD TO CARRY THE MISSION.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            For organizations built around people and purpose, a website does more than communicate information. It becomes part of the first impression.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            Someone may arrive knowing nothing about the initiative. Someone else may already know the work and simply want to find a program, event or opportunity. Another visitor may be looking for a way to collaborate. That meant the experience couldn’t assume the visitor already understood the organization. It had to introduce the story.
          </p>

          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="font-display text-4xl leading-none tracking-[-0.06em] text-white md:text-7xl">
              DON’T MAKE PEOPLE<br />
              UNDERSTAND THE ORGANIZATION<br />
              BEFORE THEY CAN EXPERIENCE IT.
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visitorIntents.map((intent, index) => (
              <VisitorIntentCard key={intent.title} item={intent} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE CHALLENGE</div>
          <p className="max-w-4xl text-xl leading-relaxed text-[#f0eeeb]">
            The challenge wasn’t simply that there was information to organize. It was that different pieces of information served different purposes.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The organization’s story needed to establish identity. Its programs needed to demonstrate the work. Its community needed to communicate the human side. And the calls to action needed to tell people what they could do next. If all of these compete equally for attention, the visitor is left to construct the story themselves. I wanted the interface to do more of that work.
          </p>

          <div className="mt-8 max-w-md rounded-[26px] border border-white/10 bg-[#0c1214] p-5">
            <div className="flex flex-col items-center gap-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">
              <span>INFORMATION</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>HIERARCHY</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>CONTEXT</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>ACTION</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE GOAL WAS SIMPLE.</div>
          <div className="font-display text-5xl leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            MAKE THE MISSION<br />
            EASIER TO UNDERSTAND.
          </div>
          <div className="mt-4 font-display text-5xl leading-[0.95] tracking-[-0.05em] text-[#a7d9c6] md:text-7xl">
            THEN MAKE THE NEXT STEP<br />
            EASIER TO FIND.
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            I wanted the experience to answer three questions naturally: Who is Uzzen Sheerah? What are they doing? How can I become involved?
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "WHO", text: "Identity + purpose", accent: "#8fe0ba" },
              { title: "WHAT", text: "Programs + initiatives + work", accent: "#a5b4fc" },
              { title: "HOW", text: "Engagement + participation + connection", accent: "#f4c58b" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-white/8 bg-[#101315] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-white/15"
                onMouseEnter={() => setHoveredCard(item.title)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ boxShadow: hoveredCard === item.title ? `0 0 0 1px ${item.accent}55` : undefined }}
              >
                <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#d8d2cc]">{item.title}</div>
                <div className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">{item.text}</div>
                <div className="mt-6 h-20 rounded-[18px] border border-white/8 bg-gradient-to-br from-white/6 to-transparent" style={{ boxShadow: `inset 0 0 0 1px ${item.accent}22` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">ONE WEBSITE. DIFFERENT REASONS TO ARRIVE.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            I didn’t want to design around an imaginary “average visitor”. Instead, I thought about the different reasons someone might arrive.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {intentCards.map((card) => (
              <div key={card.title} className="group rounded-[24px] border border-white/8 bg-[#0e1113] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-white/15">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">INTENT</span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: card.accent }} />
                </div>
                <div className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{card.text}</p>
                <div className="mt-5 rounded-[14px] border border-white/8 bg-white/3 p-3 text-[10px] uppercase tracking-[0.15em] text-[#dfe7ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  NEED → {card.need}
                </div>
                <div className="mt-4 text-sm leading-relaxed text-[#d8d2cc]">
                  <span className="text-[#8fe0ba]">DESIGN RESPONSE</span>
                  <div className="mt-2">{card.response}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">I DESIGNED THE PATH, NOT JUST THE MENU.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            A navigation bar can tell someone where pages live. It doesn’t necessarily tell them where they should go. So I approached the information architecture around the questions a visitor might have.
          </p>
          <div className="mt-8">
            <ArchitectureCard />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">FROM STRUCTURE TO EXPERIENCE.</div>
          <div className="grid gap-4 md:grid-cols-3">
            <ProcessCard title="UNDERSTAND" text="First, I focused on the organization’s story, content and the relationships between its different areas." visual="CONTENT" />
            <ProcessCard title="STRUCTURE" text="I then worked through hierarchy, navigation and content priority so the interface could guide rather than overwhelm." visual="HIERARCHY" />
            <ProcessCard title="REFINE" text="Finally, I translated that structure into a visual system that felt approachable, credible and consistent." visual="UI" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">BEFORE THE COLOUR, I NEEDED THE HIERARCHY.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            I intentionally kept the early structure simple. At this stage, the important questions weren’t about gradients or visual polish. They were: what deserves attention first, what should someone understand immediately, where should supporting information appear, and where does the experience naturally invite someone to continue?
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <WireframeCard title="WIRE FRAME 01" kind="CONTENT STRUCTURE" />
            <WireframeCard title="WIRE FRAME 02" kind="HIERARCHY" />
            <WireframeCard title="WIRE FRAME 03" kind="REFINED FLOW" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE DESIGN DECISIONS THAT SHAPED THE EXPERIENCE.</div>
          <div className="grid gap-4 xl:grid-cols-2">
            {designPrinciples.map((item) => (
              <div key={item.title} className="rounded-[26px] border border-white/8 bg-[#101315] p-5">
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl tracking-[-0.04em] text-white">{item.title}</div>
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: item.accent }} />
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#d8d2cc]">{item.text}</p>
                <div className="mt-5 rounded-[16px] border border-white/8 bg-gradient-to-r from-white/5 to-transparent p-3">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#d8d2cc]">
                    <span>UNDERSTAND</span>
                    <span className="text-[#8fe0ba]">→</span>
                    <span>EXPLORE</span>
                    <span className="text-[#8fe0ba]">→</span>
                    <span>ENGAGE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE FINAL EXPERIENCE</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The final interface brings the structure together into a website that feels intentional from the first interaction. The experience moves from identity to context, from context to discovery, and from discovery to action.
          </p>

          <div className="mt-8">
            <BrowserMockup activeTab={activeScreen} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {navItems.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveScreen(tab)}
                className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.14em] transition ${activeScreen === tab ? "bg-[#8fe0ba] text-[#0b0b0a]" : "border border-white/10 bg-white/4 text-[#d8d2cc]"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
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

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE STORY HAD TO WORK ON EVERY SCREEN.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            Responsive design wasn’t treated as simply shrinking the desktop layout. The hierarchy had to survive the change in space.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <DeviceCard label="DESKTOP" size="100%" />
            <DeviceCard label="TABLET" size="75%" />
            <DeviceCard label="MOBILE" size="55%" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">TURNING THE EXPERIENCE INTO A SYSTEM.</div>
          <DesignSystemCard />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE RESULT</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The result was a more structured digital experience where the organization’s identity, work and opportunities could live together without competing for attention. The design creates clearer entry points, gives important information the hierarchy it needs, and makes the transition from understanding the organization to engaging with it feel more natural.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {outcomeCards.map((card) => (
              <div key={card.title} className="rounded-[24px] border border-white/8 bg-[#0f1315] p-5">
                <div className="font-display text-2xl tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-[#d8d2cc]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHAT THIS PROJECT TAUGHT ME.</div>
          <div className="grid gap-4 md:grid-cols-2">
            {learningCards.map((card) => (
              <div key={card.title} className="rounded-[26px] border border-white/8 bg-[#0e1113] p-5">
                <div className="font-display text-2xl leading-tight tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-4 text-base leading-relaxed text-[#d8d2cc]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-12">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-[#d8d2cc]">
            I came away from this project thinking less about websites as collections of pages and more about them as introductions. The first few moments matter. The visitor is asking: Who are you? Why does this matter? Where do I fit? Good UX doesn’t answer those questions all at once. It creates a path through them.
          </p>
          <div className="mt-8 font-display text-5xl leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
            DESIGN THE FIRST<br />
            CONVERSATION WELL.
          </div>
        </div>
      </section>
    </article>
  );
}
