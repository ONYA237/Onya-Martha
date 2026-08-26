import { useState } from "react";

const tripCards = [
  { agency: "BUS A", time: "08:00", price: "₦ 4,500", highlight: "#f7c873" },
  { agency: "BUS B", time: "10:30", price: "₦ 5,200", highlight: "#8fe0ba" },
  { agency: "BUS C", time: "14:00", price: "₦ 4,900", highlight: "#98b1ff" },
];

const capabilityItems = ["DISCOVER", "COMPARE", "BOOK", "PAY", "TRAVEL"];

const journeyDecisions = [
  { step: "01", title: "DISCOVER", subtitle: "Where can I go?" },
  { step: "02", title: "COMPARE", subtitle: "Which option is right?" },
  { step: "03", title: "DECIDE", subtitle: "Which journey do I trust?" },
  { step: "04", title: "BOOK", subtitle: "What am I actually paying for?" },
  { step: "05", title: "CONFIRM", subtitle: "Where is my ticket?" },
];

const personas = [
  {
    name: "THE PLANNER",
    quote: "I know when I want to travel. I just need to find the right option.",
    goal: "Plan ahead with confidence.",
    need: "CERTAINTY",
    pain: "Unclear availability and scattered travel information make planning harder.",
    response: "Show the important trip information early and make the booking path predictable.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80",
    accent: "#ffb86c",
  },
  {
    name: "THE FLEXIBLE TRAVELLER",
    quote: "I care about price and departure time. Show me my options.",
    goal: "Find the best option for their priorities.",
    need: "COMPARISON",
    pain: "Different agencies, prices and schedules can be difficult to evaluate together.",
    response: "Make trip cards highly scannable and comparison-friendly.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    accent: "#8fe0ba",
  },
  {
    name: "THE LAST-MINUTE TRAVELLER",
    quote: "I need to know what is available right now.",
    goal: "Find and secure a trip quickly.",
    need: "SPEED",
    pain: "Last-minute travel creates greater uncertainty.",
    response: "Keep search, availability and booking steps focused.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80",
    accent: "#98b1ff",
  },
  {
    name: "THE RETURNING TRAVELLER",
    quote: "I don't want to repeat the whole process every time.",
    goal: "Book with less friction.",
    need: "SIMPLICITY",
    pain: "Repeating information makes returning journeys feel unnecessarily long.",
    response: "Keep the experience familiar and reduce unnecessary decision-making.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
    accent: "#ff8fb1",
  },
];

const journeyStages = [
  { label: "DISCOVER", question: "What can I take?", emotion: "Uncertainty", opportunity: "Clear route and date selection." },
  { label: "COMPARE", question: "Which one works for me?", emotion: "Evaluation", opportunity: "Scannable trip information." },
  { label: "SELECT", question: "Is this the right journey?", emotion: "Decision", opportunity: "Strong route and agency clarity." },
  { label: "BOOK", question: "Am I booking the right thing?", emotion: "Caution", opportunity: "Strong booking summary." },
  { label: "PAY", question: "Did my payment work?", emotion: "Concern", opportunity: "Clear confirmation." },
  { label: "CONFIRM", question: "Where is my ticket?", emotion: "Relief", opportunity: "Immediate digital ticket." },
];

const insightCards = [
  {
    title: "MAKE AVAILABILITY VISIBLE.",
    text: "Travellers need to know what is actually possible before they can make a decision.",
    accent: "#f7c873",
  },
  {
    title: "MAKE COMPARISON EASY.",
    text: "Showing options isn’t enough. The differences between them need to be immediately understandable.",
    accent: "#8fe0ba",
  },
  {
    title: "CARRY CONTEXT FORWARD.",
    text: "Once a traveller has selected a route, the interface shouldn’t make them reconstruct that decision at every step.",
    accent: "#98b1ff",
  },
  {
    title: "END WITH CERTAINTY.",
    text: "After payment, the user needs an immediate and unmistakable confirmation.",
    accent: "#ff8fb1",
  },
];

const principles = [
  "SHOW THE DECISION",
  "KEEP THE JOURNEY MOVING",
  "REDUCE UNCERTAINTY",
  "MAKE IMPORTANT INFORMATION SCANNABLE",
  "CONFIRM EVERYTHING IMPORTANT",
];

const mobileScreens = [
  { title: "HOME", label: "Search first" },
  { title: "SEARCH", label: "Route & date" },
  { title: "RESULTS", label: "Trip comparison" },
  { title: "DETAILS", label: "Passenger + route" },
  { title: "PAYMENT", label: "Secure checkout" },
  { title: "TICKET", label: "Booking confirmation" },
];

const outcomeCards = [
  { title: "CLEARER DISCOVERY", text: "The user can begin with a route instead of navigating through complexity." },
  { title: "BETTER COMPARISON", text: "Trip information is structured around the decision." },
  { title: "SIMPLER BOOKING", text: "The flow progressively carries context forward." },
  { title: "STRONGER CONFIRMATION", text: "The digital ticket provides a clear endpoint." },
];

const reflectionCards = [
  {
    title: "COMPARISON IS A DESIGN PROBLEM.",
    text: "Showing more options doesn’t automatically make a decision easier. The interface has to help users understand the differences between those options.",
  },
  {
    title: "GOOD BOOKING FLOWS REDUCE MENTAL WORK.",
    text: "Every time the user has to stop and reconstruct information, the experience becomes heavier. Carrying context forward became one of the most important principles in my approach.",
  },
  {
    title: "CONFIRMATION IS PART OF THE EXPERIENCE.",
    text: "The moment after payment matters just as much as the moment before it. A user shouldn’t have to wonder whether the transaction worked.",
  },
  {
    title: "MOBILE UX IS ABOUT THE MOMENT.",
    text: "Travel happens in real situations, while planning, waiting, moving or preparing to leave. That made clarity and speed particularly important.",
  },
];

function CardStackHero() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0c1114] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="label-mono text-[10px] uppercase tracking-[0.16em] text-[#abbbbf]">TREDDAR</div>
      </div>

      <div className="space-y-4">
        {tripCards.map((card, index) => (
          <div
            key={card.agency}
            className="rounded-[18px] border border-white/8 bg-[#111619] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            style={{ transform: index === 1 ? "translateX(-10px)" : index === 2 ? "translateX(12px)" : undefined }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-white">{card.agency}</span>
              <span className="font-medium text-[#d8d2cc]">{card.time}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.14em] text-[#9eb4b4]">PRICE</span>
              <span className="text-base font-semibold text-[#fef4dd]">{card.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[18px] border border-[#8fe0ba]/40 bg-[#122822] p-4">
        <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">DECISION</div>
        <div className="mt-2 font-display text-2xl tracking-[-0.04em] text-white">ONE CLEAR CHOICE.</div>
      </div>
    </div>
  );
}

function CapabilityJourneyCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#101518] p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHAT TREDDAR BRINGS TOGETHER</div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#8fe0ba]" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {capabilityItems.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#d8d2cc]">
              {item}
            </div>
            {index < capabilityItems.length - 1 ? <span className="text-[#8fe0ba]">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionTimeline() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {[
        "WHERE?",
        "WHEN?",
        "WHICH OPTION?",
        "WHO?",
        "HOW TO PAY?",
        "CONFIRMED?",
      ].map((item, index) => (
        <div key={item} className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[#d8d2cc]">
          <div className="rounded-full border border-white/10 bg-white/4 px-3 py-2">{item}</div>
          {index < 5 ? <span className="text-[#8fe0ba]">→</span> : null}
        </div>
      ))}
    </div>
  );
}

function JourneyCards() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-5">
      {journeyDecisions.map((item) => (
        <div key={item.step} className="min-w-0 rounded-[22px] border border-white/10 bg-[#0d1115] p-4">
          <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{item.step}</div>
          <div className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">{item.title}</div>
          <div className="mt-2 text-sm text-[#d8d2cc]">{item.subtitle}</div>
          <div className="mt-6 h-20 rounded-[16px] border border-white/8 bg-[linear-gradient(135deg,rgba(143,224,186,0.15),rgba(255,255,255,0.04))]" />
        </div>
      ))}
    </div>
  );
}

function PersonaCard({ persona }: { persona: (typeof personas)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#101517] text-left transition-all duration-300 hover:-translate-y-2 hover:border-white/15">
      <div className="relative h-56 overflow-hidden">
        <img src={persona.image} alt={persona.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1012] via-[#0d1012]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">{persona.name}</div>
        <div className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">“{persona.quote}”</div>
        <div className="mt-4 text-sm text-[#d8d2cc]">
          <p><span className="text-[#8fe0ba]">GOAL</span> {persona.goal}</p>
          <p className="mt-2"><span className="text-[#8fe0ba]">NEED</span> {persona.need}</p>
          <p className="mt-2"><span className="text-[#8fe0ba]">PAIN POINT</span> {persona.pain}</p>
        </div>
        <div className="mt-5 rounded-[16px] border border-white/8 bg-white/4 p-3 text-sm leading-relaxed text-[#f1eeeb]">
          <span className="text-[#8fe0ba]">DESIGN RESPONSE</span>
          <div className="mt-2">{persona.response}</div>
        </div>
      </div>
    </div>
  );
}

function JourneyMap() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#0d1114] p-5 md:p-6">
      <div className="grid gap-3 md:grid-cols-6">
        {journeyStages.map((stage, index) => (
          <div key={stage.label} className="rounded-[18px] border border-white/8 bg-[#12181c] p-4">
            <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">0{index + 1}</div>
            <div className="mt-3 font-display text-xl tracking-[-0.04em] text-white">{stage.label}</div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#c9c3bb]">Question</div>
            <div className="mt-1 text-sm text-[#e9e5e1]">{stage.question}</div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#c9c3bb]">Emotion</div>
            <div className="mt-1 text-sm text-[#d8d2cc]">{stage.emotion}</div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-[#c9c3bb]">Opportunity</div>
            <div className="mt-1 text-sm text-[#d8d2cc]">{stage.opportunity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileSearchCard() {
  return (
    <div className="rounded-[28px] border border-white/8 bg-[#12181a] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-xl tracking-[-0.04em] text-white">TREDDAR</div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-[#8fe0ba]">SEARCH</div>
      </div>
      <div className="space-y-3">
        <div className="rounded-[16px] border border-white/8 bg-white/4 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">FROM</div>
          <div className="mt-1 font-medium text-[#f0eeeb]">Buea</div>
        </div>
        <div className="rounded-[16px] border border-white/8 bg-white/4 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">TO</div>
          <div className="mt-1 font-medium text-[#f0eeeb]">Douala</div>
        </div>
        <div className="rounded-[16px] border border-white/8 bg-white/4 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">DATE</div>
          <div className="mt-1 font-medium text-[#f0eeeb]">Select date</div>
        </div>
        <div className="rounded-[16px] border border-white/8 bg-white/4 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">PASSENGERS</div>
          <div className="mt-1 font-medium text-[#f0eeeb]">1</div>
        </div>
        <button className="w-full rounded-full bg-[#ffb86c] px-4 py-3 text-sm font-medium text-[#111315]">SEARCH TRIPS</button>
      </div>
    </div>
  );
}

function ResultsCardRow() {
  return (
    <div className="space-y-4">
      {[
        { agency: "AFC Express", time: "08:00", price: "₦ 5,500", seats: "7 seats left", accent: "#ffb86c" },
        { agency: "A2M Travel", time: "10:30", price: "₦ 4,900", seats: "11 seats left", accent: "#8fe0ba" },
        { agency: "Nego Travel", time: "14:00", price: "₦ 5,200", seats: "6 seats left", accent: "#98b1ff" },
      ].map((item) => (
        <div key={item.agency} className="rounded-[22px] border border-white/10 bg-[#101517] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-white">{item.agency}</span>
            <span className="rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#0f1114]" style={{ background: item.accent }}>
              {item.seats}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-[#d8d2cc]">
            <span>Departure</span>
            <span>{item.time}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-[#d8d2cc]">
            <span>Price</span>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DetailSummaryCard() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-2xl tracking-[-0.04em] text-white">BUEA → DOUALA</div>
        <div className="rounded-full bg-[#8fe0ba]/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">CONFIRMED</div>
      </div>
      <div className="space-y-3 text-sm text-[#d8d2cc]">
        <div className="flex items-center justify-between"><span>Agency</span><span>AFC Express</span></div>
        <div className="flex items-center justify-between"><span>Departure</span><span>08:00</span></div>
        <div className="flex items-center justify-between"><span>Arrival</span><span>11:00</span></div>
        <div className="flex items-center justify-between"><span>Price</span><span>₦ 5,500</span></div>
        <div className="flex items-center justify-between"><span>Seat</span><span>A12</span></div>
      </div>
      <button className="mt-5 w-full rounded-full bg-[#8fe0ba] px-4 py-3 text-sm font-medium text-[#121618]">CONTINUE</button>
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#101517] p-5">
      <div className="font-display text-2xl tracking-[-0.04em] text-white">BOOKING SUMMARY</div>
      <div className="mt-5 space-y-3 text-sm text-[#d8d2cc]">
        <div className="flex items-center justify-between"><span>Amount</span><span>₦ 5,500</span></div>
        <div className="flex items-center justify-between"><span>Payment method</span><span>Mobile Money</span></div>
      </div>
      <div className="mt-6 rounded-[16px] border border-[#8fe0ba]/35 bg-[#122822] p-3 text-sm text-[#d8d2cc]">CONFIRM PAYMENT</div>
    </div>
  );
}

function TicketCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,#111618,#1a2430)] p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="font-display text-2xl tracking-[-0.04em] text-white">TREDDAR</div>
        <div className="rounded-full bg-[#8fe0ba]/15 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#8fe0ba]">BOOKING CONFIRMED</div>
      </div>
      <div className="space-y-4 text-sm text-[#d8d2cc]">
        <div className="flex items-center justify-between"><span>ROUTE</span><span>BUEA → DOUALA</span></div>
        <div className="flex items-center justify-between"><span>AGENCY</span><span>AFC Express</span></div>
        <div className="flex items-center justify-between"><span>DATE</span><span>12 Jul</span></div>
        <div className="flex items-center justify-between"><span>TIME</span><span>08:00</span></div>
        <div className="flex items-center justify-between"><span>PASSENGER</span><span>1 Traveler</span></div>
        <div className="flex items-center justify-between"><span>BOOKING CODE</span><span>TRD-XXXX</span></div>
      </div>
      <div className="mt-6 rounded-[14px] border border-dashed border-[#8fe0ba]/40 bg-[#0d1115] p-3 text-center text-xs uppercase tracking-[0.18em] text-[#8fe0ba]">
        READY TO TRAVEL
      </div>
    </div>
  );
}

function PrototypePhone({ activeScreen }: { activeScreen: string }) {
  const screens = {
    HOME: <MobileSearchCard />,
    SEARCH: <MobileSearchCard />,
    RESULTS: <ResultsCardRow />,
    DETAILS: <DetailSummaryCard />,
    PAYMENT: <PaymentCard />,
    TICKET: <TicketCard />,
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-[36px] border border-white/12 bg-[#111517] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="w-[300px] rounded-[28px] border border-white/8 bg-[#0b0f12] p-4">
          {screens[activeScreen as keyof typeof screens] ?? screens.HOME}
        </div>
      </div>
    </div>
  );
}

export default function TreddarCaseStudy() {
  const [activeScreen, setActiveScreen] = useState("HOME");

  return (
    <article className="space-y-20 pb-16">
      <section className="pt-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">TREDDAR</div>
              <h1 className="mt-4 max-w-3xl font-display text-[3.2rem] leading-[0.9] tracking-[-0.06em] text-white md:text-[5.6rem]">
                DESIGNING A SIMPLER WAY TO DISCOVER, COMPARE AND BOOK INTERCITY TRAVEL.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d8d2cc]">
                Turning a traditionally fragmented travel-planning experience into a clearer mobile journey.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">ROLE</div>
                  <div className="mt-2 text-[#f5f1ec]">UI/UX Designer</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">PRODUCT</div>
                  <div className="mt-2 text-[#f5f1ec]">Treddar</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">PLATFORM</div>
                  <div className="mt-2 text-[#f5f1ec]">Mobile Application</div>
                </div>
                <div>
                  <div className="label-mono text-[10px] uppercase tracking-[0.2em] text-[#8fe0ba]">FOCUS</div>
                  <div className="mt-2 text-[#f5f1ec]">UX Strategy · Mobile UX · Booking Experience</div>
                </div>
              </div>
            </div>

            <div className="lg:pt-6">
              <CardStackHero />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE JOURNEY STARTS BEFORE THE BUS MOVES.</div>
          <p className="max-w-4xl text-xl leading-relaxed text-[#f5f1ec]">
            Planning an intercity trip can involve more uncertainty than the journey itself.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            A traveller needs to know which routes are available, which agencies operate them, when they leave, how much they cost, whether seats are available, and how to secure a booking. The problem isn’t necessarily a lack of options. It’s the effort required to turn those options into a confident decision.
          </p>
          <div className="mt-8 rounded-[26px] border border-white/10 bg-[#0d1114] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {tripCards.map((card) => (
                <div key={card.agency} className="flex-1 rounded-[18px] border border-white/8 bg-white/4 p-4">
                  <div className="font-display text-xl text-white">{card.agency}</div>
                  <div className="mt-2 text-sm text-[#d8d2cc]">{card.time}</div>
                  <div className="mt-4 text-xs uppercase tracking-[0.15em] text-[#8fe0ba]">PRICE</div>
                  <div className="mt-1 text-xl text-[#f5f1ec]">{card.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 font-display text-3xl tracking-[-0.04em] text-white md:text-5xl">FROM SCATTERED OPTIONS → TO ONE CLEAR DECISION</div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHY TREDDAR?</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            Treddar brings the travel-booking journey into a digital experience where travellers can search for available trips, compare options, select a journey, complete a booking and receive a digital ticket.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The product capability is straightforward but valuable: it helps travellers find available seats, compare agencies, compare prices and departure times, book trips, receive digital tickets, and use mobile payment with English/French support. The design challenge was to make that process feel orderly rather than fragmented.
          </p>
          <div className="mt-8">
            <CapabilityJourneyCard />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE DESIGN QUESTION</div>
          <div className="font-display text-5xl leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
            HOW MIGHT WE MAKE<br />
            INTERCITY TRAVEL BOOKING<br />
            FEEL SIMPLE AND CERTAIN?
          </div>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            I wanted the experience to reduce the amount of mental work required before a traveller could commit to a trip. Instead of making people repeatedly search, compare and reconstruct information, the interface should progressively give them what they need to make the next decision.
          </p>
          <DecisionTimeline />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">I STARTED WITH THE JOURNEY, NOT THE SCREENS.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            Before thinking about individual screens, I broke the experience into the decisions a traveller actually needs to make. That gave me a much clearer way to think about the interface.
          </p>
          <JourneyCards />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHO IS THE EXPERIENCE FOR?</div>
          <p className="mb-8 max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">I designed around travel intent rather than demographics.</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {personas.map((persona) => (
              <PersonaCard key={persona.name} persona={persona} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE JOURNEY I WAS DESIGNING FOR.</div>
          <JourneyMap />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHAT THE EXPERIENCE NEEDED TO DO WELL.</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {insightCards.map((card) => (
              <div key={card.title} className="rounded-[26px] border border-white/8 bg-[#101517] p-5">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: card.accent }} />
                <div className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-3 text-base leading-relaxed text-[#d8d2cc]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE OPPORTUNITY WASN’T JUST BOOKING.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The larger opportunity was bringing several moments of the travel decision into one coherent experience.
          </p>
          <div className="mt-8 rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-5">
              {[
                "DISCOVERY",
                "COMPARISON",
                "BOOKING",
                "PAYMENT",
                "CONFIRMATION",
              ].map((label) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/4 p-4 text-center text-sm uppercase tracking-[0.16em] text-[#d8d2cc]">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE RULES I DESIGNED BY.</div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {principles.map((rule, index) => (
              <div key={rule} className="min-w-0 rounded-[24px] border border-white/8 bg-[#101517] p-5">
                <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">0{index + 1}</div>
                <div className="mt-4 font-display text-2xl tracking-[-0.04em] text-white">{rule}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">I DESIGNED THE FLOW AROUND DECISIONS.</div>
          <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-6">
            <div className="flex flex-col items-center gap-3 text-center text-[11px] uppercase tracking-[0.18em] text-[#d8d2cc]">
              <span>HOME / SEARCH</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>TRIP RESULTS</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>TRIP DETAILS</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>PASSENGER DETAILS</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>PAYMENT</span>
              <span className="text-[#8fe0ba]">↓</span>
              <span>DIGITAL TICKET</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">BEFORE THE POLISH, I NEEDED THE FLOW TO WORK.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            I intentionally kept the structure simple. The important question was not whether the screen looked finished; it was whether the user could understand the next decision with minimum effort.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/8 bg-[#101517] p-4">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">SCREEN 01</div>
              <div className="mt-2 text-sm uppercase tracking-[0.14em] text-[#8fe0ba]">SEARCH</div>
              <div className="mt-4 rounded-[18px] border border-white/8 bg-white/4 p-3 text-sm text-[#d8d2cc]">Keep the first decision simple.</div>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-[#101517] p-4">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">SCREEN 02</div>
              <div className="mt-2 text-sm uppercase tracking-[0.14em] text-[#8fe0ba]">TRIP RESULTS</div>
              <div className="mt-4 rounded-[18px] border border-white/8 bg-white/4 p-3 text-sm text-[#d8d2cc]">Make comparison scannable.</div>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-[#101517] p-4">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">SCREEN 03</div>
              <div className="mt-2 text-sm uppercase tracking-[0.14em] text-[#8fe0ba]">BOOKING</div>
              <div className="mt-4 rounded-[18px] border border-white/8 bg-white/4 p-3 text-sm text-[#d8d2cc]">Carry route context forward.</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE DESIGN DECISIONS THAT MATTERED.</div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-7">
              <div className="mb-5 font-display text-4xl tracking-[-0.05em] text-white">01, SEARCH</div>
              <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
                The search experience needed to get out of the user’s way. The first question is simple: where are you going? So the interface gives route, date and passenger selection a clear priority.
              </p>
              <div className="mt-6 max-w-sm">
                <MobileSearchCard />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-7">
              <div className="mb-5 font-display text-4xl tracking-[-0.05em] text-white">02, TRIP RESULTS</div>
              <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
                The results screen is where the traveller moves from searching to deciding. That meant the information hierarchy mattered: agency, departure, arrival, price and availability. The card needed to make these differences scannable.
              </p>
              <div className="mt-6">
                <ResultsCardRow />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-7">
              <div className="mb-5 font-display text-4xl tracking-[-0.05em] text-white">03, TRIP DETAILS</div>
              <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
                Before payment, users should have a final opportunity to verify what they’re booking. The interface needs to answer the last questions before commitment.
              </p>
              <div className="mt-6 max-w-md">
                <DetailSummaryCard />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-7">
              <div className="mb-5 font-display text-4xl tracking-[-0.05em] text-white">04, PAYMENT</div>
              <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
                Once the traveller has made the decision, the interface should not introduce unnecessary complexity. Payment needed to feel like the last step, not another layer of uncertainty.
              </p>
              <div className="mt-6 max-w-md">
                <PaymentCard />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0d1114] p-5 md:p-7">
              <div className="mb-5 font-display text-4xl tracking-[-0.05em] text-white">05, DIGITAL TICKET</div>
              <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
                The booking ends with reassurance. The user needs to know the trip is confirmed and their details are ready to travel with.
              </p>
              <div className="mt-6 max-w-md">
                <TicketCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE FINAL INTERFACE.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The final experience is built around one continuous booking flow: search, results, details, payment and ticket confirmation. Mobile remains the hero because the product lives in real travel moments.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[30px] border border-white/10 bg-[#0d1114] p-4 md:p-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {mobileScreens.map((screen) => (
                  <button
                    key={screen.title}
                    onClick={() => setActiveScreen(screen.title)}
                    className={`rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition ${activeScreen === screen.title ? "bg-[#8fe0ba] text-[#0b0b0a]" : "bg-white/4 text-[#d8d2cc]"}`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
              <PrototypePhone activeScreen={activeScreen} />
            </div>
            <div className="space-y-4">
              {mobileScreens.map((screen) => (
                <div key={screen.title} className={`rounded-[20px] border p-4 transition ${activeScreen === screen.title ? "border-[#8fe0ba]/40 bg-[#122822]" : "border-white/8 bg-[#101517]"}`}>
                  <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">{screen.title}</div>
                  <div className="mt-2 text-sm text-[#d8d2cc]">{screen.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">DESIGNING A LANGUAGE THAT FEELS LIKE MOVEMENT.</div>
          <p className="max-w-4xl text-lg leading-relaxed text-[#d8d2cc]">
            The visual identity needed to communicate travel, movement, confidence, energy and clarity. The design uses vibrant gradients, bold typography, route lines and ticket-inspired shapes to give the app a sense of forward motion without looking generic or over-engineered.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">THE STORY HAD TO WORK ON EVERY SCREEN.</div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[26px] border border-white/10 bg-[#101517] p-5">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">PHONE</div>
              <div className="mt-4 h-56 rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,#1f2a2f,#111517_55%,#0b0d0f)]" />
            </div>
            <div className="rounded-[26px] border border-white/10 bg-[#101517] p-5">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">TABLET</div>
              <div className="mt-4 h-52 rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,#213a3d,#101517_55%,#0b0d0f)]" />
            </div>
            <div className="rounded-[26px] border border-white/10 bg-[#101517] p-5">
              <div className="font-display text-2xl tracking-[-0.04em] text-white">DESKTOP PRESENTATION</div>
              <div className="mt-4 h-48 rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,#253642,#111517_52%,#0b0d0f)]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">FROM SCREEN TO JOURNEY.</div>
          <div className="rounded-[30px] border border-white/10 bg-[#0d1114] p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="label-mono text-[10px] uppercase tracking-[0.18em] text-[#8fe0ba]">BOOKING FLOW</div>
              <button onClick={() => setActiveScreen(activeScreen === "TICKET" ? "HOME" : "TICKET")} className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#d8d2cc]">NEXT</button>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-[#d8d2cc]">
              {[
                "SEARCH",
                "RESULTS",
                "SELECT",
                "BOOK",
                "PAY",
                "TICKET",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1.5">{step}</span>
                  {index < 5 ? <span className="text-[#8fe0ba]">→</span> : null}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <PrototypePhone activeScreen={activeScreen} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">VIEW TREDDAR ON GOOGLE PLAY →</div>
          <div className="flex justify-center">
            <a href="https://play.google.com/store/search?q=treddar&c=apps" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#8fe0ba] px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[#0b0b0a] transition-transform duration-300 hover:-translate-y-1">
              VIEW TREDDAR ON GOOGLE PLAY →
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHAT THE DESIGN CHANGED.</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {outcomeCards.map((card) => (
              <div key={card.title} className="rounded-[24px] border border-white/8 bg-[#101517] p-5">
                <div className="font-display text-2xl tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-3 text-base leading-relaxed text-[#d8d2cc]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-5 label-mono text-[11px] uppercase tracking-[0.18em] text-[#8fe0ba]">WHAT I TOOK AWAY FROM TREDDAR.</div>
          <div className="grid gap-4 md:grid-cols-2">
            {reflectionCards.map((card) => (
              <div key={card.title} className="rounded-[26px] border border-white/8 bg-[#101517] p-5">
                <div className="font-display text-2xl leading-tight tracking-[-0.04em] text-white">{card.title}</div>
                <p className="mt-4 text-base leading-relaxed text-[#d8d2cc]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pt-12">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="font-display text-5xl leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
            THE BEST BOOKING EXPERIENCE<br />
            IS THE ONE THAT LETS YOU<br />
            STOP THINKING ABOUT BOOKING.
          </div>
          <div className="mt-6 text-xl text-[#d8d2cc]">And start thinking about the journey.</div>
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-48 rounded-full bg-gradient-to-r from-transparent via-[#8fe0ba] to-transparent" />
          </div>
        </div>
      </section>
    </article>
  );
}
