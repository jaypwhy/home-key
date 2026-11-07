import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import { P as PreReleaseBox } from "./PreReleaseBox-CkP5s2fG.js";
import { R as Route } from "./router-wfrbNNjf.js";
import "@tanstack/react-router";
const PILLARS = [{
  name: "Free Independent Personal Housing",
  text: "A private home of your own in the cohort neighborhood — no rent, no eviction clock."
}, {
  name: "Free Universal Health",
  text: "Referral into existing community care — FQHC and sliding-scale clinics, not our own clinic."
}, {
  name: "Free Food Resources",
  text: "Coordination with existing distributions near each cohort — not a parallel food system."
}, {
  name: "Free Hygiene Resources",
  text: "Showers, laundry, and personal care mapped and reachable from every seed pocket."
}, {
  name: "Free Regenerative Independent Personal Income",
  text: "A flexible living stipend plus the Future Fund starter grant path, so income exceeds outgo and every participant builds a cushion."
}, {
  name: "Free Zero Entropy Travel",
  text: "Reduced-fare enrollment support (PRONTO LIFE and sibling programs) plus remote-first work, so getting around is never a barrier."
}];
const PARTNERS = [{
  letter: "A",
  type: "Shelter / Housing",
  ask: "(1) A referral pathway — a named contact and agreed process for bidirectional referrals (including via Coordinated Entry where applicable). (2) Guidance on pet-inclusive units: which beds/units can take participants with animals, and what would make more of them possible.",
  gain: "Navigator co-listing with source credit on our verified Resource Navigator; participants who arrive with padded support (cleaning, connectivity, stipends, pet care) rather than arriving with nothing; invitation to participate in honest evidence tracking (retention reported whether or not targets are met).",
  not: "Not a replacement for your funding and not a funded program yet — Phase 0, seeking to align. We cannot promise placements, timelines, or dollars."
}, {
  letter: "B",
  type: "Food",
  ask: "Distribution coordination with Seed pockets: share regular distribution points/schedules near cohort neighborhoods; agree how participants find sites and what to do when schedules shift.",
  gain: "Navigator co-listing with source credit (every entry carries source + check date); participants oriented to your rules (hours, what to bring) so fewer wasted trips; evidence participation in a documented pilot model.",
  not: "Not a replacement for your funding and not a food buyer yet — Phase 0, seeking to align. No volume or funding commitments."
}, {
  letter: "C",
  type: "Health (FQHC / sliding-scale)",
  ask: "FQHC / sliding-scale referral: a named referral contact, how uninsured participants enroll (including presumptive/temporary enrollment if you offer it), and any care-coordination touchpoint for participants with complex needs.",
  gain: "Navigator co-listing with source credit; participants arriving with connectivity, transport fare support, and stipends that reduce no-show drivers; honest outcomes tracking shared back.",
  not: "Not a replacement for your funding and not a payer contract — Phase 0, seeking to align. No patient-volume or payment promises."
}, {
  letter: "D",
  type: "Transit",
  ask: "Reduced-fare program coordination: how Seed participants enroll (PRONTO LIFE, senior/disability reduced fare, youth pass where eligible), group/institutional pass options if any, and a contact for troubleshooting enrollment.",
  gain: "Navigator co-listing with source credit; riders supported to enroll correctly (fewer failed applications); participation in a documented model linking fare access to housing stability.",
  not: "Not a replacement for public transit funding and not a bulk fare purchase yet — Phase 0, seeking to align. No ridership or revenue promises."
}, {
  letter: "E",
  type: "Animal Welfare",
  ask: "(1) Pet food pantry partnership: coordinate pantry access near Seed pockets. (2) Safety-net foster coordination: an agreed referral path for temporary foster during housing transitions, with reunion as the goal.",
  gain: "Navigator co-listing with source credit; pet-owning participants arriving with pet budgets (food, vet, supplies) rather than empty-handed; joint evidence on keeping people and animals together through housing transitions.",
  not: "Not a replacement for your funding and not a funded program yet — Phase 0, seeking to align. No participation-volume or funding promises."
}];
function Seeds() {
  const search = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-4 py-10", children: [
      /* @__PURE__ */ jsx("p", { className: "inline-block rounded-full border border-warn-700/40 bg-warn-bg px-4 py-1.5 text-base font-bold text-warn-700", children: "Phase 0 — Planning" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold text-ink-900 sm:text-4xl", children: "The Seed Program" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: [
        "Twelve small starter cohorts — ",
        /* @__PURE__ */ jsx("strong", { children: "seeds" }),
        " — of",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "5–25 participants each" }),
        ", planted in neighborhoods across the City of San Diego. Each seed grows the same whole system: free housing, health, food, hygiene, regenerative income, and travel, with wellness animals included from day one."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-lg font-semibold text-ink-900", children: "Honest status: no participants housed yet, no funds raised yet. We are building the partnerships and legal structure first — that is what Phase 0 means." }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "summary-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "summary-heading", className: "text-2xl font-bold text-ink-900", children: "The program in one paragraph" }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-ink-700", children: `Everyone has a place to call home. Project Home Key's Seed Program will start 12 small starter cohorts ("seeds") of 5–25 participants each in neighborhoods across the City of San Diego, delivering free housing + health + food + hygiene + regenerative income + zero-entropy travel as one navigable system — with wellness-animal accommodations built in, not added on. Budgets carry quadrupled generational padding so participants arrive stabilized and build their own cushion, and the design is evidence-backed (Housing First retention commonly cited at 73–88%; Finland's national Housing First results).` }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-ink-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Entity status — clearly pending:" }),
            " we propose to launch under fiscal sponsorship and graduate to an independent 501(c)(3), pending final owner confirmation and legal counsel validation. Stated exactly: fiscal sponsorship -> independent 501(c)(3) PROPOSED, pending final confirmation and legal counsel validation."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-semibold text-ink-900", children: "We are in Phase 0 now: no one housed yet, no funds promised — seeking to align with partners before anything launches." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "pillars-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "pillars-heading", className: "text-2xl font-bold text-ink-900", children: "The six pillars, as one system" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "A seed participant receives the whole system at once — never a list of referrals. The six pillars, in the program's own words:" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: PILLARS.map((p) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.text })
        ] }, p.name)) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-ink-700", children: [
          "Wellness-animal accommodations are ",
          /* @__PURE__ */ jsx("strong", { children: "built in, not added on" }),
          ": pet-friendly housing is a program rule, every cohort budgets pet setup and monthly pet care, and settling-in padding covers people ",
          /* @__PURE__ */ jsx("em", { children: "and" }),
          " animals. See the",
          " ",
          /* @__PURE__ */ jsx("a", { href: "/pilot", children: "Pilot Proposal" }),
          " for the full build spec."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "padding-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "padding-heading", className: "text-2xl font-bold text-ink-900", children: "Generational padding, not tight budgets" }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4 border-teal-700/30 bg-sand-100", children: [
          /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1.5 pl-5 text-ink-700", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Budgets are quadrupled" }),
              " — padding sized to end housing instability permanently, for this generation and the next."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Cleaning services and connectivity are permanent rights" }),
              " — standing budget lines, never removed or reduced."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Wellness animals are requirements, not extras" }),
              " — pet setup and monthly pet care are in every cohort budget."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Remote-first positions and flexible living stipends" }),
              " — the stipend flexes to each household's circumstance, and income is designed to exceed outgo so every participant builds their own rolling cushion."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-ink-700", children: [
            "All budget figures live on the",
            " ",
            /* @__PURE__ */ jsx("a", { href: "/pilot", children: "Pilot Proposal page" }),
            " — framework estimates, not commitments. No new dollar figures are introduced here."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "roadmap-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "roadmap-heading", className: "text-2xl font-bold text-ink-900", children: "Phased roadmap" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Each phase is gated: we report honestly whether or not targets are met before anything moves forward." }),
        /* @__PURE__ */ jsxs("ol", { className: "mt-4 grid gap-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "card border-warn-700/40", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-warn-700", children: "Phase 0 — now · 0 participants" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-bold text-ink-900", children: "Partnerships + legal structure" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Align with partner organizations across the five types below, finalize the entity (fiscal sponsorship → independent 501(c)(3), pending), and complete real-cost verification. No one is housed and no funds are promised during this phase." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "card border-teal-700/30", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-teal-600", children: "Phase 1 — next · the first wave of 12 seed cohorts, 5–25 participants each" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-bold text-ink-900", children: "San Diego city seeds" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "The first wave of small starter cohorts launches in neighborhoods across the City of San Diego, with later waves guided by what each wave shows; every cohort receives the full six-pillar system with wellness animals built in. Retention and outcomes are tracked and reported honestly." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "card", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-ink-600", children: "Later phases — framework, not commitment" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-bold text-ink-900", children: "Scale only what the seeds prove" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Growth beyond the 12 seeds — more cohorts, wider geography, deeper funding — is gated on what Phase 1 actually shows. Everything described for later phases is a planning framework, not a commitment: targets, timelines, and scale will be reported honestly whether or not they are met." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "partners-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "partners-heading", className: "text-2xl font-bold text-ink-900", children: "What we ask of each partner type" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Five partner types, five one-page briefs — condensed here to what we ask, what partners gain, and what each relationship honestly is not." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl rounded-2xl border border-warn-700/40 bg-warn-bg p-4 font-semibold text-ink-900", children: "We are mapping candidate partner organizations across these five types; no partnerships are announced. Organizations under identification are candidates only — never presented as committed partners or endorsers." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4", children: PARTNERS.map((p) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-ink-900", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-clay-700", children: [
              "Brief ",
              p.letter,
              " — "
            ] }),
            p.type
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-bold text-ink-900", children: "What we ask" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.ask }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-bold text-ink-900", children: "What the partner gains" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.gain }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-bold text-ink-900", children: "What this is NOT" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.not })
        ] }, p.letter)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "promise-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "promise-heading", className: "text-2xl font-bold text-ink-900", children: "What we can and cannot promise" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "card border-stop-700/40", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-stop-700", children: "We CANNOT promise" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Funding amounts or timelines (all figures are framework estimates); any named philanthropic funder (owner privacy directive — never name or research funders); placements, referrals accepted, or outcomes; anything presented as secured." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card border-teal-700/30", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-teal-600", children: "We CAN promise" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Honest partnership (plain language, real limits stated up front); a verified Navigator listing with source credit and check dates; the phased seed plan (Phase 0 now: 0 participants; each phase gated, reported whether or not targets are met); wellness animals treated as family throughout; cleaning and connectivity held as permanent rights in our own budgets." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "explore-heading", className: "mt-12 rounded-2xl bg-teal-700 p-6", children: [
        /* @__PURE__ */ jsx("h2", { id: "explore-heading", className: "text-xl font-bold text-sand-50", children: "Keep exploring" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "btn btn-secondary w-full", children: "Mission" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/resources", className: "btn btn-secondary w-full", children: "Resource Navigator" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/studies", className: "btn btn-secondary w-full", children: "The Studies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/pilot", className: "btn btn-secondary w-full", children: "Pilot Proposal" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-sand-200", children: "All figures on this page are framework estimates from the team's working plan — not verified costs, not commitments — and Phase 0 means no participants housed and no funds raised yet." })
      ] }),
      /* @__PURE__ */ jsx(PreReleaseBox, { action: "/seeds", checkboxLabel: "Interested in the Pilot Proposal as well?", state: search })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Seeds as component
};
