import { createFileRoute, Link } from "@tanstack/react-router";
import { projectDetails } from "@/data/projects";
import { featuredProjects } from "@/data/featured";
import LearningLoop from "@/components/project/LearningLoop";
import ReeplsCaseStudy from "@/components/project/ReeplsCaseStudy";
import TreddarCaseStudy from "@/components/project/TreddarCaseStudy";
import UzzenSheerahCaseStudy from "@/components/project/UzzenSheerahCaseStudy";

function RenderMedia({ src, label, alt, className }: { src?: string; label: string; alt?: string; className?: string }) {
  if (src) {
    // Check if it's a video file
    if (src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mov')) {
      return (
        <video 
          src={src} 
          controls 
          className={className} 
          aria-label={label}
          style={{ width: '100%', height: 'auto' }}
        />
      );
    }
    // Otherwise render as image
    return <img src={src} alt={alt ?? label} className={className} />;
  }

  return (
    <div className={`${className ?? ""} flex items-center justify-center bg-[#0b0b0a] text-[#c9c3bb]`} role="img" aria-label={label}>
      <div className="text-center p-8">
        <div className="mb-2 text-sm uppercase tracking-[0.12em] text-[#8fe0ba]">Placeholder</div>
        <div className="font-display text-lg font-semibold">{label}</div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/work/$slug")({
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projectDetails[slug];

  const featured = featuredProjects.find((f) => f.slug === slug);

  // If the slug matches a featured project but has no full detail yet,
  // render a simple skeleton using the featured project's summary fields.
  if (!project) {
    const featured = featuredProjects.find((f) => f.slug === slug);
    if (featured) {
      return (
        <div className="min-h-screen bg-[#0b0b0a] text-[#f3f0ea]">
          <div className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
            <div className="mb-8 flex items-center justify-between">
              <Link to="/work" className="label-mono text-sm text-[#c9c3bb] transition hover:text-white">
                ← Back to my work
              </Link>
              <span className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">Featured case study</span>
            </div>

            <header className="pt-2 md:pt-6">
              <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">{featured.index}</p>
                  <h1 className="mt-3 max-w-4xl font-display text-[3.2rem] leading-[0.92] tracking-[-0.06em] md:text-[6.4rem]">
                    {featured.title || "Untitled"}
                  </h1>
                </div>

                <div className="max-w-md text-sm leading-relaxed text-[#c9c3bb] md:text-right">
                  {featured.blurb || "Case study coming soon."}
                </div>
              </div>
            </header>

            <div className="mt-8">
              <img src={featured.image} alt={featured.title} className="w-full max-h-140 object-contain mx-auto block" />
            </div>

            <div className="mt-6 text-sm text-[#c9c3bb]">This featured case study is a placeholder. Full details will be added later.</div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0b0a] px-6 text-[#f3f0ea]">
        <div className="text-center">
          <p className="label-mono text-[#8fe0ba]">Project not found</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">This case study is unavailable.</h1>
          <Link
            to="/work"
            className="mt-8 inline-flex items-center rounded-full bg-[#8fe0ba] px-6 py-3 text-sm font-medium text-[#0b0b0a]"
          >
            Back to my work
          </Link>
        </div>
      </div>
    );
  }

  const projectOrder = Object.keys(projectDetails);
  const currentIndex = projectOrder.indexOf(slug);
  const nextProjectSlug = projectOrder[(currentIndex + 1) % projectOrder.length];
  const nextProject = projectDetails[nextProjectSlug];

  const sectionLinks = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Problem" },
    { id: "process", label: "Process" },
    { id: "final-design", label: "Final design" },
    { id: "impact", label: "Impact" },
    { id: "learnings", label: "Learnings" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0a] text-[#f3f0ea]">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/work" className="label-mono text-sm text-[#c9c3bb] transition hover:text-white">
            ← Back to my work
          </Link>
          <span className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">Case study</span>
        </div>

        <header className="pt-2 md:pt-6">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">{project.year}</p>
              <h1 className="mt-3 max-w-4xl font-display text-[3.2rem] leading-[0.92] tracking-[-0.06em] md:text-[6.4rem]">
                {project.title}
              </h1>
            </div>

            <div className="max-w-md text-sm leading-relaxed text-[#c9c3bb] md:text-right">
              {project.summary}
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.keywords.map((tag) => (
              <span
                key={tag}
                className="label-mono rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#d8d2cc]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-sm text-[#d8d2cc]">
            <div>
              <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Role</span>
              <div className="mt-2">{project.discipline}</div>
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div>
              <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Focus</span>
              <div className="mt-2">{project.results[1]?.value ?? "Product strategy"}</div>
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div>
              <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Impact</span>
              <div className="mt-2">{project.impact}</div>
            </div>
          </div>
        </header>

            <div className="mt-8">
              <RenderMedia
                src={project.image || featured?.image}
                label={project.assetSlots?.hero ?? `${project.slug}/hero`}
                alt={project.title}
                className="w-full max-h-140 object-contain mx-auto block"
              />
            </div>

            {slug === 'reepls' ? (
              <main className="space-y-14 md:space-y-20">
                <ReeplsCaseStudy />
              </main>
            ) : slug === 'treddar' ? (
              <main className="space-y-14 md:space-y-20">
                <TreddarCaseStudy />
              </main>
            ) : slug === 'uzzen-sheerah' ? (
              <main className="space-y-14 md:space-y-20">
                <UzzenSheerahCaseStudy />
              </main>
            ) : slug === 'dynamis' ? (
              <main className="space-y-14 md:space-y-20">
                {/* 01 — HERO editorial block */}
                <section id="d-hero" className="scroll-mt-24 pt-8">
                  <p className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">{project.tagline}</p>
                  <h2 className="mt-4 font-display text-3xl text-white">Student Performance System</h2>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#c9c3bb]">
                    <div>
                      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Role</div>
                      <div className="mt-1">{project.role}</div>
                    </div>
                    <div>
                      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Platform</div>
                      <div className="mt-1">{project.platform}</div>
                    </div>
                    <div>
                      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Audience</div>
                      <div className="mt-1">{project.audience}</div>
                    </div>
                    <div>
                      <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Project type</div>
                      <div className="mt-1">{project.projectType}</div>
                    </div>
                  </div>
                </section>

                {/* 02 — The story in one glance */}
                <section id="one-glance" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <div className="space-y-2">
                      <div className="label-mono text-[10px] uppercase tracking-[0.12em] text-[#8fe0ba]">The challenge</div>
                      <div className="text-sm text-[#d8d2cc]">{project.oneGlance?.challenge}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="label-mono text-[10px] uppercase tracking-[0.12em] text-[#8fe0ba]">The users</div>
                      <div className="text-sm text-[#d8d2cc]">{project.oneGlance?.users}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="label-mono text-[10px] uppercase tracking-[0.12em] text-[#8fe0ba]">My role</div>
                      <div className="text-sm text-[#d8d2cc]">{project.oneGlance?.myRole}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="label-mono text-[10px] uppercase tracking-[0.12em] text-[#8fe0ba]">The outcome</div>
                      <div className="text-sm text-[#d8d2cc]">{project.oneGlance?.outcome}</div>
                    </div>
                  </div>
                </section>

                {/* 03 — Context / Why DYNAMIS */}
                <section id="context" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Why DYNAMIS?</p>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.overview}</p>
                  <div className="mt-6">
                    {/* Interactive SVG-based learning loop (built-in, no external images) */}
                    <LearningLoop />
                  </div>
                </section>

                {/* 04 — Problem */}
                <section id="problem" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">The problem wasn't just access to content</p>
                  <p className="mt-4 max-w-3xl text-lg text-white font-semibold">How might we create a learning experience that makes progress visible, actionable and motivating?</p>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c9c3bb]">{project.challenge}</p>
                </section>

                {/* 05 — Personas */}
                <section id="personas" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Who are we designing for?</p>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {project.personas?.map((p) => (
                      <div key={p.id} className="bg-[#0f0f0f] p-6">
                        <h4 className="font-display text-lg text-white">{p.title}</h4>
                        <div className="mt-3">
                          <div className="label-mono text-[10px] uppercase text-[#8fe0ba]">Goals</div>
                          <ul className="mt-2 ml-3 list-disc text-sm text-[#d8d2cc]">
                            {p.goals.map((g) => (<li key={g}>{g}</li>))}
                          </ul>
                        </div>
                        <div className="mt-3">
                          <div className="label-mono text-[10px] uppercase text-[#8fe0ba]">Pain points</div>
                          <ul className="mt-2 ml-3 list-disc text-sm text-[#d8d2cc]">
                            {p.painPoints.map((g) => (<li key={g}>{g}</li>))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 06 — Needs → Requirements */}
                <section id="requirements" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">User needs → Product responses</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="label-mono text-[10px] uppercase text-[#8fe0ba]">Student need</div>
                      <ul className="mt-2 ml-3 list-disc text-sm text-[#d8d2cc]">
                        <li>Show me whether I'm improving → Progress tracking</li>
                        <li>Help me know what to practice → Recommended learning activities</li>
                        <li>Tell me why I got this wrong → Explanations and feedback</li>
                        <li>Give me motivation to continue → Competitions and achievements</li>
                      </ul>
                    </div>
                    <div>
                      <div className="label-mono text-[10px] uppercase text-[#8fe0ba]">Parent need</div>
                      <ul className="mt-2 ml-3 list-disc text-sm text-[#d8d2cc]">
                        <li>Help me understand progress → Parent reports</li>
                        <li>Tell me where support is needed → Performance insights</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 07 — Information architecture */}
                <section id="architecture" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">From needs to structure</p>
                  <p className="mt-4 max-w-3xl text-base text-[#c9c3bb]">Once the core needs were clear, I translated them into a product structure that supports multiple user journeys without overwhelming students.</p>
                  <div className="mt-6">
                    <RenderMedia src={project.assets?.informationArchitecture} label={project.assetSlots?.informationArchitecture ?? `${project.slug}/information-architecture`} alt={`${project.title} information architecture`} className="w-full object-contain mx-auto block" />
                  </div>
                  <div className="mt-6 text-sm text-[#d8d2cc]">
                    <p>Major areas: Dashboard, Learning, Practice, Competitions, Leaderboard, Performance, Profile, Parent visibility.</p>
                    <p className="mt-2">Why it works: the dashboard is the starting point; learning and practice form the core; performance closes the feedback loop; competition adds motivation; parent visibility provides monitoring.</p>
                  </div>
                </section>

                {/* 08 — Main user flow */}
                <section id="main-flow" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Designing the core learning loop</p>
                  <p className="mt-4 max-w-3xl text-base text-[#c9c3bb]">The primary journey was designed around one continuous loop: Learn → Practice → Get feedback → Understand → Track progress → Improve → Learn again.</p>
                </section>

                {/* 09 — Key flow breakdown */}
                <section id="breakdown" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Key flow breakdown</p>
                  <div className="mt-6 space-y-6">
                    {[
                      { title: 'Discover', text: 'Dashboard: recommended activities surface the most relevant practice based on recent performance and learning plan.' },
                      { title: 'Learn / Practice', text: 'Students select a subject and topic, then work through targeted questions that map to learning objectives.' },
                      { title: 'Feedback', text: "Immediate feedback explains why an answer is correct or incorrect, highlighting misconception areas and next steps." },
                      { title: 'Measure', text: 'Scores are translated into performance summaries that visualise strengths, weaknesses and progress over time.' },
                    ].map((s) => (
                      <details key={s.title} className="group bg-transparent">
                        <summary className="cursor-pointer font-display text-lg text-white">{s.title}</summary>
                        <div className="mt-3 text-sm text-[#c9c3bb]">{s.text}</div>
                      </details>
                    ))}

                    {/* Render the full user-flow diagram once, after the verbal breakdown */}
                    <div className="mt-6">
                      {
                        (() => {
                          const proc = project.assets?.process ?? [];
                          const byName = proc.find((p) => typeof p === 'string' && p.toLowerCase().includes('process-02'));
                          const src = byName ?? proc[1] ?? proc[0];
                          return <RenderMedia src={src} label={`${project.slug}/flow`} alt={`${project.title} main flow`} className="w-full object-contain mx-auto block" />;
                        })()
                      }
                    </div>
                  </div>
                </section>

                {/* 10 — Wireframing */}
                <section id="wireframing" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">From structure to screens</p>
                  <p className="mt-4 max-w-3xl text-base text-[#c9c3bb]">Before visual polish, wireframes validated hierarchy and primary actions.</p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {(project.assets?.wireframes ?? []).map((w, i) => (
                      <div key={w} className="min-w-0"><RenderMedia src={w} label={`${project.slug}/wireframe-${i+1}`} alt={`Wireframe ${i+1}`} className="w-full object-contain mx-auto block" /></div>
                    ))}
                  </div>
                </section>

                {/* 11 — Design principles */}
                <section id="principles" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">The design principles</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {(project.designPrinciples ?? []).map((p) => (<div key={p} className="text-sm text-[#d8d2cc]"><strong className="text-white">{p}</strong></div>))}
                  </div>
                </section>

                {/* 12 — Visual design */}
                <section id="visual" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Building the DYNAMIS experience</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {(project.assets?.finalDesign ?? []).map((img, i) => (<div key={img}><RenderMedia src={img} label={`${project.slug}/final-${i+1}`} alt={`Final ${i+1}`} className="w-full object-contain mx-auto block" /></div>))}
                  </div>
                </section>

                {/* 13 — Final experience */}
                <section id="final" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">The final experience</p>
                  <div className="mt-6 space-y-6">
                    {/* Display video if available in process assets */}
                    {(project.assets?.process ?? []).map((src, i) => 
                      src?.toLowerCase().endsWith('.mp4') || src?.toLowerCase().endsWith('.webm') || src?.toLowerCase().endsWith('.mov') ? (
                        <div key={src} className="w-full">
                          <RenderMedia src={src} label={`${project.slug}/demo-video`} className="w-full rounded-xl" />
                        </div>
                      ) : null
                    )}
                    {/* Display gallery images */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      {(project.gallery ?? [project.image]).slice(0, 8).map((img, i) => (<div key={img}><RenderMedia src={img} label={`${project.slug}/final-screen-${i+1}`} alt={`Final screen ${i+1}`} className="w-full object-contain mx-auto block" /></div>))}
                    </div>
                  </div>
                </section>

                {/* 15 — Reflection */}
                <section id="reflection" className="scroll-mt-24 border-t border-white/10 pt-8">
                  <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">What I learned</p>
                  <div className="mt-4 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.learnings.join(' ')}</div>
                </section>
              </main>
            ) : null}

        {slug !== 'dynamis' && (
        <div className="mt-16 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="mb-4 label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Contents</div>
            <ul className="space-y-2 text-sm text-[#c9c3bb]">
              {sectionLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-flex items-center gap-2 transition hover:text-white">
                    <span className="text-[#8fe0ba]">•</span>
                    {link.label}
                  </a>
                </li>
              ))}
              {project.deliverables.length > 0 && (
                <li>
                  <a href="#deliverables" className="inline-flex items-center gap-2 transition hover:text-white">
                    <span className="text-[#8fe0ba]">•</span>
                    Deliverables
                  </a>
                </li>
              )}
            </ul>
          </aside>

          <main className="space-y-14 md:space-y-20">
            <section id="overview" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">1. Project overview</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.overview}</p>
            </section>

            {project.assets?.wireframes && project.assets.wireframes.length > 0 ? (
              <section className="scroll-mt-24 border-t border-white/10 pt-8">
                <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Wireframes</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.assets.wireframes.map((image, index) => (
                    <div key={`${image}-${index}`}> 
                      <RenderMedia src={image} label={`${project.slug}/wireframes-${index + 1}`} alt={`${project.title} wireframe ${index + 1}`} className="w-full object-contain mx-auto block" />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section id="challenge" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">2. Problem & context</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.challenge}</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#c9c3bb]">{project.context}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.goals.map((goal) => (
                  <span key={goal} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#d8d2cc]">
                    {goal}
                  </span>
                ))}
              </div>
                {project.assets?.problem ? (
                <div className="mt-6">
                  <RenderMedia
                    src={project.assets.problem}
                    label={project.assetSlots?.problem ?? `${project.slug}/problem`}
                    alt={`${project.title} problem`}
                    className="w-full max-h-95 object-contain mx-auto block"
                  />
                </div>
              ) : null}
            </section>

            {project.assets?.informationArchitecture ? (
              <section className="scroll-mt-24 border-t border-white/10 pt-8">
                <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Information architecture</p>
                <div className="mt-6">
                  <RenderMedia
                    src={project.assets.informationArchitecture}
                    label={project.assetSlots?.informationArchitecture ?? `${project.slug}/information-architecture`}
                    alt={`${project.title} information architecture`}
                    className="w-full max-h-105 object-contain mx-auto block"
                  />
                </div>
              </section>
            ) : null}

            <section className="border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">3. Design approach</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.solution}</p>
            </section>

            <section id="process" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">4. UX design process</p>
              <div className="mt-7 space-y-8">
                {project.process.map((step, index) => (
                  <div key={step.title} className="border-b border-white/10 pb-6">
                    <div className="grid gap-3 md:grid-cols-[90px_1fr] md:gap-8">
                      <div className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl tracking-[-0.04em] text-white">{step.title}</h3>
                        <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#c9c3bb]">{step.text}</p>
                      </div>
                    </div>

                    {(
                      <div className="mt-5">
                        <RenderMedia
                          src={step.image}
                          label={project.assetSlots?.process?.[index] ?? `${project.slug}/process-${index + 1}`}
                          alt={`${project.title} ${step.title}`}
                          className="w-full max-h-85 object-contain mx-auto block"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section id="final-design" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">5. Final design</p>
              <div className="mt-6">
                <RenderMedia src={project.image} label={project.assetSlots?.finalDesign ?? `${project.slug}/final-design`} alt={project.title} className="w-full max-h-105 object-contain mx-auto block" />
              </div>
              {project.assets?.finalDesign && project.assets.finalDesign.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.assets.finalDesign.map((image, index) => (
                    <div key={`${image}-${index}`}>
                      <RenderMedia src={image} label={project.assetSlots?.finalDesign?.[index] ?? `${project.slug}/final-design-${index + 1}`} alt={`${project.title} final ${index + 1}`} className="w-full object-contain" />
                    </div>
                  ))}
                </div>
              ) : project.gallery && project.gallery.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <div key={`${image}-${index}`}>
                      <RenderMedia src={image} label={project.assetSlots?.gallery?.[index] ?? `${project.slug}/gallery-${index + 1}`} alt={`${project.title} detail ${index + 1}`} className="w-full object-contain" />
                    </div>
                  ))}
                </div>
              ) : null}
            </section>

            <section id="impact" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">6. Impact</p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm text-[#d8d2cc]">
                {project.results.map((stat) => (
                  <div key={stat.label}>
                    <span className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{stat.label}</span>
                    <div className="mt-2 text-base text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#d8d2cc]">{project.outcome}</p>
            </section>

            <section id="deliverables" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Deliverables</p>
              <ul className="mt-5 space-y-3 text-base text-[#d8d2cc]">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8fe0ba]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="learnings" className="scroll-mt-24 border-t border-white/10 pt-8">
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">7. Learnings</p>
              <ul className="mt-5 space-y-3 text-base text-[#d8d2cc]">
                {project.learnings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#8fe0ba]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
        )}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">Next project</p>
              <div className="mt-2 text-2xl font-display tracking-tighter text-white md:text-4xl">{nextProject.title}</div>
            </div>

            <Link
              to="/work/$slug"
              params={{ slug: nextProjectSlug }}
              className="inline-flex items-center justify-center rounded-full border border-[#8fe0ba] bg-[#8fe0ba] px-6 py-3 text-sm font-medium text-[#0b0b0a] transition hover:opacity-90"
            >
              View next →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
