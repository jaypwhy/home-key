import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import "@tanstack/react-router";
const WORKING_PATHWAYS = ["Skills assessment: we start with what you already know and want to build — not with what you lack on paper.", "Free training, gamified where possible, for regenerative-economy roles: regenerative agriculture, waste-to-resource, community gardens, ecological restoration, local craft, and digital literacy.", "Earn-to-learn stipends while training — learning is paid, so building a future never means going without now.", "Micro-enterprise support with seed funding and mentorship, for members who want to start something of their own.", "Equitable digital-economy access: hardware, internet, and training are provided. Access is equity, not just an invitation."];
const NON_WORKING_SUPPORT = ["Identical housing quality — the same homes, the same standards, the same dignity.", "Identical cleaning and connectivity rights, held as permanent budget lines that are never removed or reduced.", "Identical wellness-animal and pet care support.", "Identical stipends."];
const ONBOARDING = [{
  title: "Automatic enrollment (opt-out)",
  text: "Universal income is the default, not a prize. The team does the identifying and the paperwork — not the participant. Nobody has to prove they are poor enough to deserve it."
}, {
  title: "Direct and regular disbursement",
  text: "Monthly by default, with a weekly option if that works better for you. Money lands directly with the person, on a schedule they can plan around."
}, {
  title: "Optional support, never a gate",
  text: "Non-judgmental financial-literacy workshops and peer mentoring are offered and always opt-in — never mandatory, never condescending."
}];
const JUSTICE = ["Documented 20+ year displacement is a prioritization tier — race-neutral. Where a household can document two decades or more of displacement, that history moves them forward in line. It is never a test anyone has to pass.", "Guaranteed contribution pathways that value lived experience without formal qualifications — life experience counts as expertise, and there is a paid place for it.", "Equitable access to community-managed resources: shared tools, garden land, and workshops, governed by the community that uses them."];
const PROTECTIONS = [{
  name: "Sacred privacy",
  text: "Zero surveillance of persons, families, or spiritual and religious life. Data minimization: nothing is stored or tracked beyond what the individual explicitly opts into. Participant stories never become marketing content."
}, {
  name: "No profit from injury or passing",
  text: "No monetization of any person's injury, death, or story — by staff, partners, or media, ever. Celebrating contributions never becomes exploiting them."
}, {
  name: "No leveraging family",
  text: "No member's support is ever contingent on another member's behavior or compliance. Family reunification happens by choice only."
}, {
  name: "No career-building off others' harm",
  text: "No one advances a career or reputation by causing harm to participants. Every staff member and partner signs this code before working with participants."
}];
const REINTEGRATION = [{
  title: "Co-design seats",
  text: "Participants hold real votes in cohort governance — not advisory seats, real ones."
}, {
  title: "Voluntary participation, genuinely",
  text: "Every activity, workshop, and program can be declined without penalty or consequence."
}, {
  title: "Bridge builders",
  text: "Community liaisons trusted by the group, chosen with the group, to carry concerns both ways."
}, {
  title: "Equal terms in shared space",
  text: "Staff and participants share the same rooms, tables, and programs — no separate tier."
}, {
  title: "Public celebration of contributions",
  text: "What people give to their community is named and honored, loudly and accurately."
}, {
  title: "Continuous feedback loops",
  text: "Monthly participant sessions, and every change made is publicly attributed to the people who asked for it."
}];
const LINKS = [{
  to: "/seeds",
  label: "Seed Program"
}, {
  to: "/pilot",
  label: "Pilot Proposal"
}, {
  to: "/assistance",
  label: "Request help"
}, {
  to: "/studies",
  label: "The Studies"
}];
function HonestNote({
  children
}) {
  return /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl rounded-xl border border-warn-700/40 bg-warn-bg p-3 text-sm font-semibold text-warn-700", children });
}
function Framework() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-4 py-10", children: [
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "hero-heading", children: [
        /* @__PURE__ */ jsx("p", { className: "status-badge status-badge-confirm", children: "Framework — ratified direction (Plan Rev 5) · Operations in development" }),
        /* @__PURE__ */ jsx("h1", { id: "hero-heading", className: "mt-4 text-3xl font-bold text-ink-900 sm:text-4xl", children: "The Framework" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: "How every seed cohort runs: free base needs, regenerative income by choice, and absolute protections — for working and non-working members alike." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "models-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "models-heading", className: "text-2xl font-bold text-ink-900", children: "The two participation models" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Both models receive the whole six-pillar system. They are shown side by side because they are equal in worth, equal in housing, and equal in support." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "card border-teal-700/30", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-teal-700", children: "Working model" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-700", children: [
              "Base needs and universal income are ",
              /* @__PURE__ */ jsx("strong", { children: "fully covered" }),
              " — and regenerative-income pathways are active on top."
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-ink-700", children: WORKING_PATHWAYS.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card border-clay-500/40", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-clay-700", children: "Non-working model" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-700", children: [
              "Base needs and universal income are ",
              /* @__PURE__ */ jsx("strong", { children: "fully covered" }),
              ", with ",
              /* @__PURE__ */ jsx("strong", { children: "no work expectation at all" }),
              " — for disability, caregiving, acute stabilization, or simply choice."
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc space-y-2 pl-5 text-ink-700", children: NON_WORKING_SUPPORT.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink-700", children: 'Non-participation is respected as autonomy — never punished, never conditional, never framed as "soon to be cut."' })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 rounded-2xl border-2 border-teal-600 bg-white p-5 text-lg font-bold text-ink-900", children: "Movement between models is free, both directions, any time. A person is never worth less for resting." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "onboarding-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "onboarding-heading", className: "text-2xl font-bold text-ink-900", children: "Zero-barrier onboarding to universal income" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "The burden of paperwork belongs to the program, not to the person who needs the money." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4 sm:grid-cols-3", children: ONBOARDING.map((item) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: item.text })
        ] }, item.title)) }),
        /* @__PURE__ */ jsx(HonestNote, { children: "Framework, not commitment: these are the rules we are designing to, and they are not yet operating on anyone's behalf." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "justice-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "justice-heading", className: "text-2xl font-bold text-ink-900", children: "Restorative economic justice" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Homelessness in San Diego is not an accident. This framework is built to restore what was taken, not to hand out what was spare." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 list-disc space-y-3 pl-5 text-ink-700", children: JUSTICE.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
        /* @__PURE__ */ jsx(HonestNote, { children: "Framework, not commitment: prioritization and contribution pathways are ratified direction, and the team is still developing how they will run in practice." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "protections-heading", className: "mt-12 rounded-2xl bg-teal-700 p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "status-badge border-sand-200/40 bg-sand-50 text-teal-700", children: "Absolute and non-negotiable" }),
        /* @__PURE__ */ jsx("h2", { id: "protections-heading", className: "mt-3 text-2xl font-bold text-sand-50", children: "Sacred protections" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-sand-100", children: "These four protections are unconditional program rules — not aspirations, and not subject to budget. They bind us before our first participant arrives." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: PROTECTIONS.map((item) => /* @__PURE__ */ jsxs("li", { className: "rounded-2xl border border-sand-200/30 bg-teal-600 p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-sand-50", children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sand-100", children: item.text })
        ] }, item.name)) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-sand-200", children: "Unconditional today: these protections are the one part of this page that is not waiting on funding, launch, or scale." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "reintegration-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "reintegration-heading", className: "text-2xl font-bold text-ink-900", children: "Reintegration principles" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Operating rules, not a values poster. Each one describes something a cohort does, or it does not go on this page." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: REINTEGRATION.map((item) => /* @__PURE__ */ jsxs("li", { className: "card", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: item.text })
        ] }, item.title)) }),
        /* @__PURE__ */ jsx(HonestNote, { children: "Framework, not commitment: no cohort is running yet, so these rules are written but not yet exercised. The first cohort will report honestly on how they work in practice." })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "cohorts-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "cohorts-heading", className: "text-2xl font-bold text-ink-900", children: "The 12-cohort structure" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 max-w-3xl text-ink-700", children: [
          "Project Home Key's Seed Program starts 12 small starter cohorts of",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "5–25 participants each" }),
          ", planted in neighborhoods across the City of San Diego, each running the same whole six-pillar system described on this page. The first cohort gates the rest: nothing scales until the first seed shows real results, and each wave is reported honestly whether or not targets are met. Phase 0 today means no cohort has launched, no participants are housed, and no funds are raised.",
          " ",
          /* @__PURE__ */ jsx("a", { href: "/seeds", children: "Read the full structure on the Seed Program page" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "honesty-heading", className: "mt-12 rounded-2xl border-2 border-teal-600 bg-white p-6", children: [
        /* @__PURE__ */ jsx("h2", { id: "honesty-heading", className: "text-xl font-bold text-ink-900", children: "Honest footer" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: "This framework is our ratified direction (Plan Rev 5). Operations are in development — no cohort has launched, no budget is committed, and every number in our planning carries quadrupled generational padding. What is unconditional today: the sacred protections. They bind us before our first participant arrives." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-bold text-ink-900", children: "Keep exploring" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: LINKS.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.to, className: "btn btn-secondary w-full", children: link.label }) }, link.to)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Framework as component
};
