import React, { useEffect, useRef, useState } from 'react';

type Stage = {
  key: string;
  label: string;
  color: string;
  headline: string;
  body: string;
};

const STAGES: Stage[] = [
  { key: 'learn', label: 'LEARN', color: '#3B82F6', headline: 'Explore concepts', body: 'Students begin by exploring concepts and building foundational understanding.' },
  { key: 'practice', label: 'PRACTICE', color: '#7C3AED', headline: 'Apply knowledge', body: 'Knowledge becomes active through questions and exercises.' },
  { key: 'feedback', label: 'FEEDBACK', color: '#FB923C', headline: 'Get feedback', body: 'Immediate feedback explains performance and highlights misconceptions.' },
  { key: 'understand', label: 'UNDERSTAND', color: '#FBBF24', headline: 'Understand mistakes', body: 'Students see why answers are wrong and how to improve.' },
  { key: 'progress', label: 'TRACK PROGRESS', color: '#10B981', headline: 'Track progress', body: 'Visual summaries show growth and areas that need practice.' },
  { key: 'improve', label: 'IMPROVE', color: '#06B6D4', headline: 'Improve', body: 'Recommended practice targets weak areas for efficient improvement.' },
  { key: 'compete', label: 'COMPETE', color: '#FB7185', headline: 'Compete', body: 'Challenges and leaderboards create motivation tied to learning.' },
];

export default function LearningLoop({ className }: { className?: string }) {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const particleRef = useRef<SVGCircleElement | null>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const svg = svgRef.current;
    const path = pathRef.current;
    const particle = particleRef.current;
    if (!svg || !path || !particle) return;

    const length = path.getTotalLength();
    // prepare stroke dash for draw animation
    path.style.transition = 'stroke-dashoffset 900ms ease-out';
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    let raf: number | null = null;
    let start: number | null = null;
    const duration = 900;

    const draw = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      path.style.strokeDashoffset = String(length * (1 - p));
      if (p < 1) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    // particle travel loop
    let animId: number | null = null;
    const travel = (time: number) => {
      const t = ((time / 1500) % 1); // loop period
      const pos = path.getPointAtLength(length * t);
      particle.setAttribute('cx', String(pos.x));
      particle.setAttribute('cy', String(pos.y));
      animId = requestAnimationFrame(travel);
    };
    if (playing) animId = requestAnimationFrame(travel);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [playing, prefersReduced]);

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setActive((s) => (s + 1) % STAGES.length);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setActive((s) => (s - 1 + STAGES.length) % STAGES.length);
      if (e.key === ' ' || e.key === 'Enter') setPlaying((p) => !p);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // compute node positions on circle
  const radius = 160;
  const cx = 220;
  const cy = 220;

  return (
    <div className={className ?? ''}>
      <div className="md:flex md:items-start md:gap-8">
        <div className="md:w-1/3">
          <h3 className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">The learning loop</h3>
          <h2 className="mt-4 font-display text-2xl text-white">DYNAMIS learning loop</h2>
          <p className="mt-3 text-sm text-[#c9c3bb]">Instead of treating learning, assessment and motivation as separate features, DYNAMIS is designed around a continuous feedback loop. Interact with the nodes to explore each stage.</p>

          <div className="mt-6 space-y-3">
            {STAGES.map((s, i) => (
              <button
                key={s.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className={`w-full text-left rounded-md p-3 transition-shadow focus:outline-none ${active === i ? 'shadow-lg' : 'shadow-sm'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span style={{ background: s.color, width: 12, height: 12, display: 'inline-block', borderRadius: 4 }} />
                    <div>
                      <div className="text-sm font-medium text-white">{s.label}</div>
                      <div className="text-xs text-[#c9c3bb]">{s.headline}</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#8fe0ba]">{i + 1}</div>
                </div>
                {active === i ? (
                  <div className="mt-3 text-sm text-[#d8d2cc]">{s.body}</div>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:flex-1">
          <div className="mx-auto max-w-140">
            <svg ref={svgRef} viewBox={`0 0 ${cx * 2} ${cy * 2}`} className="w-full h-auto">
              <defs>
                <linearGradient id="grad" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#FB7185" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* decorative orbits */}
              <g opacity={0.14}>
                {[0, 1, 2].map((i) => (
                  <circle key={i} cx={cx} cy={cy} r={radius + i * 18} stroke="#ffffff" strokeWidth={1} fill="none" strokeDasharray="4 8" />
                ))}
              </g>

              {/* path */}
              <path
                ref={pathRef}
                d={describeLoopPath(cx, cy, radius)}
                stroke="url(#grad)"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                style={{ filter: 'url(#glow)' }}
              />

              {/* nodes */}
              {STAGES.map((s, i) => {
                const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
                const x = cx + Math.cos(angle) * radius;
                const y = cy + Math.sin(angle) * radius;
                const isActive = i === active;
                return (
                  <g key={s.key} transform={`translate(${x}, ${y})`}>
                    <circle r={isActive ? 22 : 16} fill={s.color} stroke="#000" strokeWidth={isActive ? 2 : 1} style={{ transition: 'r 200ms, transform 200ms' }} />
                    <text x={0} y={4} fontSize={10} textAnchor="middle" fill="#fff" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto' }}>{s.label}</text>
                  </g>
                );
              })}

              {/* particle */}
              <circle ref={particleRef} r={6} fill="#fff" opacity={0.9} />

              {/* center element */}
              <g transform={`translate(${cx}, ${cy})`}>
                <rect x={-86} y={-46} rx={14} ry={14} width={172} height={92} fill="#0b0b0a" stroke="#1f2937" strokeWidth={1} />
                <text x={0} y={-2} textAnchor="middle" fill="#fff" fontSize={18} className="font-display">DYNAMIS</text>
                <text x={0} y={18} textAnchor="middle" fill="#9ca3af" fontSize={12}>Compete. Learn. Rise.</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function describeLoopPath(cx: number, cy: number, r: number) {
  // Create a smooth loop path with cubic bezier curves around circle
  const cp = r * 0.55;
  const d = [
    `M ${cx + r} ${cy}`,
    `C ${cx + r} ${cy - cp} ${cx + cp} ${cy - r} ${cx} ${cy - r}`,
    `C ${cx - cp} ${cy - r} ${cx - r} ${cy - cp} ${cx - r} ${cy}`,
    `C ${cx - r} ${cy + cp} ${cx - cp} ${cy + r} ${cx} ${cy + r}`,
    `C ${cx + cp} ${cy + r} ${cx + r} ${cy + cp} ${cx + r} ${cy}`,
  ].join(' ');
  return d;
}
