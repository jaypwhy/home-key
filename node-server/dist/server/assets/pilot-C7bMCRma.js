import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import { P as PreReleaseBox } from "./PreReleaseBox-CkP5s2fG.js";
import { a as Route } from "./router-wfrbNNjf.js";
import "@tanstack/react-router";
const PILLAR_EXPERIENCE = [{
  name: "Free Independent Personal Housing",
  text: "A private home — your own door, your own key, your own kitchen — sponsored at a dignified standard, with no rent and no eviction clock. For many participants this starts through the Living-in-Development / Living-in-Renovation track below."
}, {
  name: "Free Universal Health",
  text: "A sponsored health plan plus same-day access to community clinics, dental care, and mental health support — no co-pay, no paperwork barriers."
}, {
  name: "Free Food Resources",
  text: "Weekly grocery delivery covered by the living stipend, plus food-bank and meal partnerships as backup. Nobody in the pilot ever plans a meal around whether they can afford it."
}, {
  name: "Free Hygiene Resources",
  text: "Every home comes fully set up, and community hygiene partnerships (showers, laundry) are pre-arranged for anyone who needs them."
}, {
  name: "Free Regenerative Independent Personal Income",
  text: "A monthly stipend that covers every need with padding built in, plus the Future Fund entrepreneurial starter grant for participants who want to start a business. Income is designed to exceed monthly outgo so every participant builds their own savings cushion."
}, {
  name: "Free Zero Entropy Travel",
  text: "A prepaid transit pass for the whole household, plus remote-first work options so getting around is a bonus, never a barrier."
}];
const TIMELINE = [{
  step: "1. Acquire",
  title: "Vacant and underused space",
  text: "The pilot acquires vacant or underused buildings — empty offices, rundown hotels, surplus properties — that would otherwise sit idle. City and county surplus lists, motivated private owners, and partner nonprofits are the target sources."
}, {
  step: "2. Renovate",
  title: "Shell to home, in the right order",
  text: "Each building moves from shell condition to home in a fixed order: secure and safe, then wet rooms (kitchen and bath), then sleep zones, then work zones, then comfort and decor. Two checklists run side by side — see below."
}, {
  step: "3. Occupy with dignity",
  title: "Move-in ready, sponsored living",
  text: "Units are furnished to the sponsored-living CapEx standard (basic to premium, below) and occupied with dignity. Autism accommodations are written into the build spec — not added as extras later."
}];
const CONSTRUCTION = ["Flooring and finishes (low-sensory, non-toxic materials)", "Paint — predictable, calming palette; no harsh glare surfaces", "Lighting installs — layered, dimmable, flicker-free LEDs; individual controls in every room", "Appliance installation (kitchen and laundry)", "Safety modifications — grab bars, non-slip surfaces, secure locks, fire safety", "Sensory-accommodation builds — sound-dampened walls, quiet zones, predictable room layouts, a decompression (“zen”) space in every unit", "Wet rooms — kitchen and bath brought to code and finished first"];
const FURNISHINGS = ["Kitchenware — cookware, dishes, utensils, small appliances", "Linens and bath — bedding, towels, shower curtains", "Living room — seating, lighting, a table that fits a shared meal", "Bedroom — bed, mattress, storage, blackout-capable window covers", "Office/studio — desk, chair, lamp, reliable connectivity", "Clothing/self — wardrobe basics, outerwear, personal care kit", "Pet setup — bed, bowls, supplies for companions"];
const CAPEX = [["Kitchenware", "$6,000", "$16,000"], ["Linens & Bath", "$3,200", "$10,000"], ["Living Room", "$10,000", "$28,000"], ["Bedroom", "$4,800", "$16,000"], ["Office/Studio", "$4,000", "$14,000"], ["Clothing/Self", "$8,000", "$24,000"], ["Pet Setup", "$2,000", "$6,000"], ["Total CapEx per unit", "$38,000", "$114,000"]];
const COMMONS = [{
  name: "Education",
  gloss: "Free vocational training, scholarships, school and university grants."
}, {
  name: "Healthcare Facilities",
  gloss: "Hospitals, health centers, research facilities, wellness retreats."
}, {
  name: "Environmental Conservation",
  gloss: "Afforestation, watershed management, habitat and wildlife restoration."
}, {
  name: "Community Infrastructure",
  gloss: "Community centers, sports facilities, water, sanitation, disaster preparedness."
}, {
  name: "Arts & Culture",
  gloss: "Museums, galleries, cultural festivals, traditional music and dance."
}, {
  name: "Local Economic Development",
  gloss: "Small-business assistance, cottage industries, sustainable rural tourism."
}, {
  name: "Community-led Projects",
  gloss: "Needs and aspirations chosen by community members themselves."
}, {
  name: "Research & Development",
  gloss: "Regenerative farming, holistic healing, and cultural preservation research."
}];
function Pilot() {
  const search = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-4 py-10", children: [
      /* @__PURE__ */ jsx("p", { className: "inline-block rounded-full border border-warn-700/40 bg-warn-bg px-4 py-1.5 text-base font-bold text-warn-700", children: "Draft proposal — seeking partners" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 text-3xl font-bold text-ink-900 sm:text-4xl", children: "Phase-1 pilot: a soft landing in San Diego" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: [
        "This page is a working draft, not a final program. It lays out the Phase-1 pilot concept for San Diego, what a participant experiences across all six pillars, and the owner-directed",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Living-in-Development / Living-in-Renovation" }),
        " track: turn vacant and underused space into dignified, soft-landing-ready homes — and let participants help build them, earning regenerative income along the way. Partners are welcome; budget figures are framework estimates, not verified costs."
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "concept-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "concept-heading", className: "text-2xl font-bold text-ink-900", children: "The Phase-1 concept" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Where" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "San Diego, California — the city where RUHBI starts and the model is proven before it spreads." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Who" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "A small cohort of unsheltered San Diegans served first as the proof case — the pilot that proves the universal model for everyone." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "How" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "One navigable system, RUHBI: housing first, then health, food, hygiene, income, and travel already in place around it." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "What success looks like" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Stable homes, growing savings, jobs or businesses started, and a measured case for free housing as normal city infrastructure." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "experience-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "experience-heading", className: "text-2xl font-bold text-ink-900", children: "A participant's experience — all six pillars" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "One person joins the pilot and receives the whole system, not a list of referrals:" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: PILLAR_EXPERIENCE.map((p) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.text })
        ] }, p.name)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "lid-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "lid-heading", className: "text-2xl font-bold text-ink-900", children: "Living-in-Development / Living-in-Renovation" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 max-w-3xl text-ink-700", children: [
          "This is the heart of the housing pillar: vacant and underused space is ",
          /* @__PURE__ */ jsx("strong", { children: "acquired" }),
          ", then ",
          /* @__PURE__ */ jsx("strong", { children: "renovated" }),
          " in a disciplined order, then ",
          /* @__PURE__ */ jsx("strong", { children: "occupied with dignity" }),
          " — with participants earning regenerative income as part of the work crews."
        ] }),
        /* @__PURE__ */ jsx("ol", { className: "mt-6 grid gap-4", children: TIMELINE.map((t) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-clay-700", children: t.step }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-ink-900", children: t.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: t.text })
        ] }, t.step)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-ink-900", children: [
              "Construction & installation checklist",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-ink-600", children: "(contractor and work-crew)" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-1.5 pl-5 text-ink-700", children: CONSTRUCTION.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-ink-900", children: [
              "Furnishings & decor checklist",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold text-ink-600", children: "(the sponsored-living CapEx standard)" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-1.5 pl-5 text-ink-700", children: FURNISHINGS.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Renovation timeline — the order that matters" }),
          /* @__PURE__ */ jsxs("ol", { className: "mt-2 list-decimal space-y-1.5 pl-5 text-ink-700", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Secure and safe" }),
              " — structure, fire safety, security, utilities live."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Wet rooms" }),
              " — kitchen and bath brought to code and finished."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Sleep zones" }),
              " — bedrooms ready, quiet, dark-capable."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Work zones" }),
              " — office/studio spaces with connectivity for remote-first roles."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Comfort and decor" }),
              " — the modern San Diego aesthetic: light woods, terracotta and clay, a coastal-neutral palette, drought-tolerant outdoor living, indoor-outdoor flow."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4 border-teal-700/30 bg-sand-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Autism accommodations are build requirements, not extras" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Sensory-friendly textures and finishes, routine-supporting layouts, predictable and controllable lighting, and a decompression (“zen”) space in every unit are written into the construction checklist itself — every home gets them, from day one." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4 border-teal-700/30 bg-sand-100", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Wellness animals are family — accommodations are requirements, not extras" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-ink-700", children: [
            "Companion animals are family. Pet-friendly housing is an",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "acquisition and renovation requirement" }),
            " of this model — the shelter pet-exclusion barriers that force people to choose between a roof and their animal end here. No participant gives up a companion animal to join the pilot."
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 list-disc space-y-1.5 pl-5 text-ink-700", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pet Setup support (one-time CapEx): $2,000–$6,000" }),
              " ",
              "— bed, bowls, crate, leash and carrier, food starter supply, a first vet visit. Framework estimate from the Pierce sponsored-living budget, labeled as an estimate."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pet Care Stipend: $600–$1,200/month" }),
              " — part of the variable living stipend, covering food, vet care, and supplies, flexed to the animal's needs. Framework estimate, labeled as an estimate."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Settling-in padding for people AND animals" }),
              " — animal transport on move-in day, acclimation time built into the move schedule, predictable feeding and walking routines from day one, and decompression space in every unit (aligned with the autism-accommodation standards above, which calm every nervous system — human and animal)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Accommodations ",
              /* @__PURE__ */ jsx("strong", { children: "flex to every participant's circumstance" }),
              " — different species, sizes, ages, medical needs, and bonded pairs are planned for individually, the way every part of the living stipend flexes."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card mt-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Sponsored-living standards — move-in CapEx (one-time, per unit)" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-600", children: "Framework estimates from the Pierce sponsored-living budget, quadrupled per the owner's generational-padding directive — labeled as estimates, not verified costs, pending a real San Diego cost check before the proposal goes out." }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-72 border-collapse text-left text-ink-700", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-sand-200 text-sm font-bold text-ink-900", children: [
              /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Category" }),
              /* @__PURE__ */ jsx("th", { className: "py-2 pr-3", children: "Low" }),
              /* @__PURE__ */ jsx("th", { className: "py-2", children: "High" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: CAPEX.map(([cat, low, high]) => /* @__PURE__ */ jsxs("tr", { className: cat.startsWith("Total") ? "border-t border-ink-900 font-bold" : "border-b border-sand-100", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: cat }),
              /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: low }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: high })
            ] }, cat)) })
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-ink-600", children: [
            "Monthly operating cost (framework estimates): fixed costs of roughly $10,800–$22,800 per month — including",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "cleaning services ($1,200–$2,400/month)" }),
            " and",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "high-speed connectivity ($600–$800/month)" }),
            ", both permanent budget lines treated as rights, never reduced. Plus variable stipends of roughly $3,800–$7,600 per month (groceries, household, pet care $600–$1,200, personal care, entertainment). Scenarios: lean ≈ $16,800/month out, premium ≈ $27,600/month out — regenerative income targets ($26,000+ lean, $40,000+ premium) exceed outgo, so every participant builds a rolling savings cushion."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "directives-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "directives-heading", className: "text-2xl font-bold text-ink-900", children: "Owner-directed standing terms for the pilot" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Future Fund entrepreneurial starter grant" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-ink-700", children: [
              /* @__PURE__ */ jsx("strong", { children: "$1,000,000 or more per participant" }),
              " to start and grow a business — the full-vision figure, with headroom kept above $1M. At 100 participants that is $100M+ in grant capital; the near-term path is ",
              /* @__PURE__ */ jsx("strong", { children: "phased funding" }),
              ", starting with a small cohort. Labeled an aspirational full-vision figure, not a committed budget."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Remote-first positions" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "All pilot positions — agents and consultants, participant work roles — are remote-friendly. A home anywhere is a valid work base, and zero-entropy travel stays a bonus, not a requirement." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Flexible living stipend" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-ink-700", children: [
              "The stipend is a ",
              /* @__PURE__ */ jsx("strong", { children: "range that flexes to individual circumstance" }),
              ", not a fixed amount — set within the operating scenarios above (lean to premium) based on each participant's household needs."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: "Budget philosophy: fluid with padding — lagniappe" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 text-ink-700", children: [
              "Every daily, weekly, and monthly need is covered",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "with a bit extra built in" }),
              " — the “lagniappe” that turns a tight budget into a cushion. Assistance is available whenever needed, and regenerative income ( $26,000+ lean to $40,000+ premium per month) is designed to",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "exceed monthly outgo" }),
              " (≈$16,800–$27,600), so each participant builds their own savings cushion and the surplus rolls forward continuously. The padding is",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "generational" }),
              " — sized so housing instability never repeats, for this generation or the next. Figures remain framework estimates."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "commons-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "commons-heading", className: "text-2xl font-bold text-ink-900", children: "Where the surplus rolls — the Regenerative Commons" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Surplus from regenerative income feeds back into the community — that is what makes the system regenerative rather than merely sufficient." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: COMMONS.map((c) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: c.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: c.gloss })
        ] }, c.name)) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-ink-600", children: "Vision, not commitment — this describes where surplus would flow as the pilot matures, not a committed budget line." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "partners-heading", className: "mt-12 rounded-2xl bg-teal-700 p-6", children: [
        /* @__PURE__ */ jsx("h2", { id: "partners-heading", className: "text-xl font-bold text-sand-50", children: "We are seeking partners" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-sand-100", children: "San Diego housing providers and developers, health and food partners, workforce programs, investors, and city partners — if you want to help prove that free housing is normal infrastructure, this draft is the invitation. Contact the Project Home Key team." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-sand-200", children: "All figures on this page are framework estimates from the team's working budget — not verified costs — and will be costed against real San Diego numbers before any partner agreement." })
      ] }),
      /* @__PURE__ */ jsx(PreReleaseBox, { action: "/pilot", checkboxLabel: "Interested in the Seed Program as well?", state: search })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Pilot as component
};
