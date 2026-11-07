import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import { r as resourcesData } from "./resources-ChnQxp-i.js";
import "@tanstack/react-router";
const RESOURCES = resourcesData;
const BY_ID = new Map(RESOURCES.map((r) => [r.id, r]));
const PILLAR_ORDER = ["Free Independent Personal Housing", "Free Universal Health", "Free Food Resources", "Free Hygiene Resources", "Free Regenerative Independent Personal Income", "Free Zero Entropy Travel"];
const DOORS = [{
  id: "home-meaning",
  n: 1,
  marker: "A home",
  question: "What would a home mean for you right now?",
  helper: "Any answer is a good answer. Every door here can be left closed, and nothing you choose is held against you.",
  multi: false,
  choices: [{
    value: "own-place",
    label: "A place of my own"
  }, {
    value: "with-family",
    label: "A place for me and my family"
  }, {
    value: "fresh-start",
    label: "A fresh start in a new place"
  }, {
    value: "stay-put",
    label: "Help staying where I am"
  }, {
    value: "exploring",
    label: "Just exploring for now"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }]
}, {
  id: "who",
  n: 2,
  marker: "Who's with you",
  question: "Who's home with you?",
  helper: "Choose as many as fit. Animals count, always.",
  multi: true,
  choices: [{
    value: "solo",
    label: "Just me"
  }, {
    value: "children",
    label: "Children"
  }, {
    value: "elders",
    label: "Elders I care for"
  }, {
    value: "adults",
    label: "Other adults"
  }, {
    value: "animals",
    label: "Animals"
  }, {
    value: "several",
    label: "Several of these"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }]
}, {
  id: "first-open",
  n: 3,
  marker: "What opens first",
  question: "What would you want to open first?",
  helper: "Pick as many as you like. Nothing here is a commitment.",
  multi: true,
  choices: [{
    value: "pillar-home",
    label: "A home"
  }, {
    value: "pillar-food",
    label: "Food that's covered"
  }, {
    value: "pillar-health",
    label: "Health that comes to me"
  }, {
    value: "pillar-income",
    label: "Income that grows"
  }, {
    value: "pillar-travel",
    label: "Ways to get around"
  }, {
    value: "pillar-safety",
    label: "A safer situation"
  }, {
    value: "several",
    label: "Several of these"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }]
}, {
  id: "work-around",
  n: 4,
  marker: "What a home works around",
  question: "What should a home work around for you?",
  helper: "Homes are built around the people in them. Naming what you need is how a home gets built right.",
  multi: true,
  choices: [{
    value: "access-mobility",
    label: "Mobility access"
  }, {
    value: "access-vision",
    label: "Vision"
  }, {
    value: "access-hearing",
    label: "Hearing"
  }, {
    value: "access-sensory",
    label: "Sensory-friendly spaces"
  }, {
    value: "access-chronic",
    label: "Chronic conditions"
  }, {
    value: "access-none",
    label: "Nothing particular"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }],
  noteLabel: "Anything else you'd like a home to work around?",
  notePlaceholder: "Optional — a few words is plenty."
}, {
  id: "get-around",
  n: 5,
  marker: "Getting around",
  question: "How do you like to get around?",
  helper: "There is no wrong way to move through a city.",
  multi: true,
  choices: [{
    value: "move-transit",
    label: "Transit"
  }, {
    value: "move-bike",
    label: "Bike"
  }, {
    value: "move-rides",
    label: "Rides with others"
  }, {
    value: "move-own",
    label: "My own vehicle"
  }, {
    value: "move-figuring",
    label: "Still figuring it out"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }]
}, {
  id: "building",
  n: 6,
  marker: "What you'd build",
  question: "What could you see yourself building or doing?",
  helper: "Regenerative income means work that gives back more than it takes. Exploring counts as an answer.",
  multi: true,
  choices: [{
    value: "build-craft",
    label: "A craft or trade"
  }, {
    value: "build-creative",
    label: "Creative work"
  }, {
    value: "build-care",
    label: "Care work"
  }, {
    value: "build-growing",
    label: "Growing or making things"
  }, {
    value: "build-learn",
    label: "Willing to learn — trades and skills"
  }, {
    value: "build-exploring",
    label: "Exploring is enough for now"
  }, {
    value: "skip",
    label: "Prefer not to say"
  }]
}, {
  id: "reach",
  n: 7,
  marker: "Reaching you",
  question: "If we could reach you, how?",
  helper: "Only if you want to be reached. You can change this at any time, and choosing no contact changes nothing else. Meeting somewhere public first — a coffee shop, a library, a park — is always a fair ask.",
  multi: true,
  choices: [{
    value: "reach-email",
    label: "Email"
  }, {
    value: "reach-phone",
    label: "Phone"
  }, {
    value: "reach-text",
    label: "Text"
  }, {
    value: "reach-public",
    label: "In person — somewhere public"
  }, {
    value: "reach-none",
    label: "No contact"
  }]
}];
const OPENS_TO = {
  "own-place": ["211-san-diego", "sdhc-moving-home-rrh", "sdhc-hcv-section8", "hacsd-county-vouchers", "project-based-vouchers"],
  "with-family": ["211-san-diego", "sdhc-moving-home-rrh", "calfresh", "sd-food-bank", "fresh-start-showers"],
  "fresh-start": ["211-san-diego", "sdhc-moving-home-rrh", "hacsd-county-vouchers", "sd-workforce-partnership"],
  "stay-put": ["211-san-diego", "sdhc-moving-home-rrh", "hacsd-county-vouchers"],
  exploring: ["211-san-diego"],
  solo: ["211-san-diego"],
  children: ["calfresh", "sd-food-bank", "feeding-san-diego", "father-joes-meals", "fhcsd"],
  elders: ["211-san-diego", "fhcsd", "vista-community-clinic", "calfresh"],
  adults: ["211-san-diego", "sd-workforce-partnership"],
  animals: ["sdhs-pet-pantry", "rchs-pet-food-bank", "chula-vista-pet-pantry", "sdhs-safety-net-foster", "sd-211-pets", "sdhs-community-vet-clinic", "pets-without-walls", "street-dog-coalition"],
  "pillar-home": ["211-san-diego", "sdhc-moving-home-rrh", "sdhc-hcv-section8", "hacsd-county-vouchers", "project-based-vouchers"],
  "pillar-food": ["calfresh", "sd-food-bank", "feeding-san-diego", "father-joes-meals"],
  "pillar-health": ["fhcsd", "vista-community-clinic"],
  "pillar-income": ["sd-workforce-partnership", "urban-corps-sd", "second-chance-wioa"],
  "pillar-travel": ["mts-pronto-life", "mts-reduced-fare"],
  "access-mobility": ["mts-reduced-fare", "211-san-diego", "hud-assistance-animals"],
  "access-vision": ["211-san-diego", "fhcsd", "mts-reduced-fare"],
  "access-hearing": ["211-san-diego", "fhcsd", "mts-reduced-fare"],
  "access-sensory": ["211-san-diego", "hud-assistance-animals", "fhcsd"],
  "access-chronic": ["fhcsd", "vista-community-clinic", "211-san-diego"],
  "move-transit": ["mts-pronto-life", "mts-reduced-fare"],
  "move-bike": ["mts-pronto-life"],
  "move-rides": ["mts-pronto-life", "mts-reduced-fare"],
  "move-own": ["mts-reduced-fare"],
  "move-figuring": ["211-san-diego", "mts-pronto-life"],
  "build-craft": ["sd-workforce-partnership", "urban-corps-sd", "second-chance-wioa"],
  "build-learn": ["sd-workforce-partnership", "urban-corps-sd", "second-chance-wioa"],
  "build-creative": ["sd-workforce-partnership", "second-chance-wioa"],
  "build-care": ["sd-workforce-partnership", "second-chance-wioa"],
  "build-growing": ["sd-workforce-partnership", "urban-corps-sd", "second-chance-wioa"]
};
const ACCESS_CHOICES = ["access-mobility", "access-vision", "access-hearing", "access-sensory", "access-chronic"];
const ACCESS_FIRST = ["mts-reduced-fare", "211-san-diego", "hud-assistance-animals"];
const GAPS = {
  "move-bike": "Our list has no verified free bike or e-bike program in San Diego yet. That is a real gap, and it is written down here instead of papered over — we keep checking.",
  "move-own": "A vehicle is not something we ask you to give up. Freedom to move includes the car you already have, and the freedom to own one when that day comes."
};
const OPENING_SOON = [{
  title: "The Seed Program cohort path",
  badge: "Phase 0 — not yet funded; framework, not a promise",
  body: "Twelve small starter cohorts of 5–25 people, each receiving the whole six-pillar system at once — housing, health, food, hygiene, regenerative income, and travel. Nothing is launched and no one is housed yet.",
  href: "/seeds",
  hrefLabel: "Read the Seed Program"
}, {
  title: "Animal-friendly homes",
  badge: "Phase 0 — not yet funded; framework, not a promise",
  body: "Wellness animals are requirements in this program, not extras: pet-friendly housing is a program rule, pet setup and monthly pet care are budgeted lines, and settling-in padding covers people and animals.",
  href: "/pilot",
  hrefLabel: "See the build spec"
}, {
  title: "The Regenerative Commons",
  badge: "Phase 0 — not yet funded; framework, not a promise",
  body: "Eight shared channels — the community side of the system, where surplus flows back to the people in it. Described as a vision, not a commitment, and it stays that way until it is real.",
  href: "/pilot",
  hrefLabel: "Read the Commons channels"
}];
const SAFETY_DOORS = [{
  name: "Center for Community Solutions — 24/7 Crisis Hotline (San Diego)",
  action: "Call 1-888-385-4657",
  href: "tel:18883854657",
  note: "A confidential 24/7 crisis hotline in San Diego. Someone answers, day or night.",
  source: "https://ccssd.org/",
  checked: "2026-10-08"
}, {
  name: "National Domestic Violence Hotline",
  action: "Call 1-800-799-7233, or text START to 88788",
  href: "tel:18007997233",
  note: "Free, confidential, 24/7, in many languages. thehotline.org has a quick-exit button and ways to keep your visit private.",
  source: "https://www.thehotline.org/",
  checked: "2026-10-08"
}, {
  name: "San Diego Humane Society — Safety Net Foster Program",
  action: "Call 619-299-7012",
  href: "tel:6192997012",
  note: "Temporary care for your animals if you are leaving a domestic violence situation, so you never have to choose between your safety and your animal. Reunification is the goal.",
  source: "https://sdhumane.org/services/temporary-pet-care/",
  checked: "2026-09-05"
}];
const MAIL_TO = "piercesandiego@gmail.com";
const MAIL_SUBJECT = "An open door — a message from the Project Home Key site";
function statusClass(status) {
  const s = status.toLowerCase();
  if (s.includes("open")) return "status-badge status-badge-open";
  if (s.includes("closed")) return "status-badge status-badge-closed";
  if (s.includes("confirm")) return "status-badge status-badge-confirm";
  return "status-badge status-badge-other";
}
function telHref(phone) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";
function fieldClass(extra = "") {
  return `mt-2 block w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-lg text-ink-900 ${FOCUS} ${extra}`;
}
function HonestNote({
  children
}) {
  return /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl rounded-xl border border-warn-700/40 bg-warn-bg p-3 text-sm font-semibold text-warn-700", children });
}
function ResourceLine({
  r,
  highlight = false
}) {
  return /* @__PURE__ */ jsxs("li", { className: `card ${highlight ? "border-teal-600/40 bg-white" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-ink-900", children: r.name }),
      /* @__PURE__ */ jsx("span", { className: statusClass(r.status), children: r.status })
    ] }),
    r.status_note ? /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold text-ink-900", children: r.status_note }) : null,
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-700", children: r.provides }),
    /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-ink-700", children: [
      /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: "How to reach it:" }),
      " ",
      r.apply
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
      r.phone ? /* @__PURE__ */ jsxs("a", { href: telHref(r.phone), className: "btn btn-secondary min-h-11 px-4 py-2 text-base", children: [
        "Call ",
        r.phone
      ] }) : null,
      r.url ? /* @__PURE__ */ jsxs("a", { href: r.url, target: "_blank", rel: "noopener noreferrer", className: `btn btn-secondary min-h-11 px-4 py-2 text-base ${FOCUS}`, children: [
        "Visit ",
        r.name.split(" - ")[0]
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-3 break-all border-t border-sand-200 pt-3 text-xs text-ink-600", children: [
      r.source ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Source:",
        " ",
        /* @__PURE__ */ jsx("a", { href: r.source, target: "_blank", rel: "noopener noreferrer", children: r.source }),
        " ",
        "·",
        " "
      ] }) : null,
      "Checked ",
      r.date_checked ?? "date unknown"
    ] })
  ] });
}
function SafetyPanel({
  idPrefix = "safety"
}) {
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": `${idPrefix}-heading`, className: "mt-6 rounded-2xl bg-clay-700 p-5 sm:p-6", children: [
    /* @__PURE__ */ jsx("h3", { id: `${idPrefix}-heading`, className: "text-xl font-bold text-sand-50", children: "If someone is hurting you, you never have to explain anything here." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-sand-50", children: "You can leave this page at any time, answer nothing, and come back later, or never. These doors are open right now, whether or not you continue. They are free and confidential." }),
    /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: SAFETY_DOORS.map((s) => /* @__PURE__ */ jsxs("li", { className: "rounded-xl border border-sand-200/30 bg-teal-600 p-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-base font-bold text-sand-50", children: s.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: /* @__PURE__ */ jsx("a", { href: s.href, className: `inline-flex min-h-11 items-center text-lg font-bold text-sand-50 underline underline-offset-4 ${FOCUS}`, children: s.action }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 break-words text-sm text-sand-50", children: s.note }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 break-all text-xs text-sand-100", children: [
        "Source:",
        " ",
        /* @__PURE__ */ jsx("a", { href: s.source, target: "_blank", rel: "noopener noreferrer", className: "text-sand-50", children: s.source }),
        " ",
        "· Checked ",
        s.checked
      ] })
    ] }, s.name)) }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm font-semibold text-sand-100", children: "Nothing on this page is recorded. There is nothing here to fill in, to hand over, or to prove." })
  ] });
}
function DoorChoices({
  door,
  selected,
  onToggle
}) {
  return /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-2", children: door.choices.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("label", { className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-sand-200 bg-white p-3 hover:bg-sand-100 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-teal-600", children: [
    /* @__PURE__ */ jsx("input", { type: door.multi ? "checkbox" : "radio", name: `door-${door.n}`, value: c.value, checked: selected.includes(c.value), onChange: () => onToggle(c.value), className: "mt-1 h-6 w-6 shrink-0 accent-teal-600" }),
    /* @__PURE__ */ jsx("span", { className: "text-lg text-ink-900", children: c.label })
  ] }) }, c.value)) });
}
function DoorPanel({
  door,
  selected,
  onToggle,
  note,
  onNote,
  showSafety = false
}) {
  return /* @__PURE__ */ jsxs("fieldset", { className: "card", children: [
    /* @__PURE__ */ jsxs("legend", { className: "px-1 text-xl font-bold text-ink-900", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-base font-bold text-white", children: door.n }),
      door.question
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: door.helper }),
    /* @__PURE__ */ jsx(DoorChoices, { door, selected, onToggle }),
    door.noteLabel && onNote ? /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: `door-note-${door.n}`, className: "block text-base font-bold text-ink-900", children: [
        door.noteLabel,
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-normal text-ink-600", children: "(optional, only if you want to)" })
      ] }),
      /* @__PURE__ */ jsx("textarea", { id: `door-note-${door.n}`, name: `door-note-${door.n}`, rows: 3, maxLength: 1e3, value: note ?? "", onChange: (e) => onNote(e.target.value), placeholder: door.notePlaceholder, className: fieldClass() })
    ] }) : null,
    showSafety ? /* @__PURE__ */ jsx(SafetyPanel, { idPrefix: "door-safety" }) : null
  ] });
}
function SevenDoors({
  answers,
  toggle,
  note,
  setNote
}) {
  const [stepping, setStepping] = useState(true);
  const [step, setStep] = useState(0);
  const total = DOORS.length;
  const current = DOORS[step];
  const reducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function go(next) {
    const clamped = Math.max(0, Math.min(total - 1, next));
    setStep(clamped);
    if (typeof document !== "undefined") {
      const el = document.getElementById("doors-heading");
      el?.scrollIntoView({
        behavior: reducedMotion() ? "auto" : "smooth",
        block: "start"
      });
    }
  }
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "doors-heading", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "doors-heading", className: "text-2xl font-bold text-ink-900", children: "The seven doors" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-2 max-w-3xl text-lg text-ink-700", children: [
      "Each question is a door. Some doors are open today; others are being built. Every one of them can be left closed —",
      " ",
      /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: "“prefer not to say”" }),
      " is a real answer here, and it costs you nothing."
    ] }),
    /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-xl border border-warn-700/40 bg-warn-bg p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-warn-700", children: "The one-door-at-a-time walk uses a little JavaScript. No problem — here are all seven doors in one place, and every path, listing, and email link on this page works exactly the same without it." }),
      DOORS.map((d) => /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-ink-900", children: [
          "Door ",
          d.n,
          " — ",
          d.question
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-ink-700", children: d.choices.map((c) => c.label).join(" · ") })
      ] }, d.id))
    ] }) }),
    stepping ? /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Your progress through the seven doors", className: "mb-4", children: /* @__PURE__ */ jsx("ol", { className: "flex flex-wrap gap-2", children: DOORS.map((d, i) => {
        const done = (answers[d.id] ?? []).length > 0;
        const isCurrent = i === step;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setStep(i), "aria-current": isCurrent ? "step" : void 0, "aria-label": `Door ${d.n} of ${total}: ${d.question}${done ? " (answered)" : ""}`, className: `flex min-h-12 items-center gap-2 rounded-xl border px-3 py-2 text-base font-bold ${FOCUS} ${isCurrent ? "border-teal-600 bg-teal-600 text-white" : done ? "border-teal-600/50 bg-white text-teal-700" : "border-sand-300 bg-white text-ink-700"}`, children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: isCurrent ? "▸" : done ? "✓" : "○" }),
          /* @__PURE__ */ jsxs("span", { "aria-hidden": "true", children: [
            "Door ",
            d.n
          ] })
        ] }) }, d.id);
      }) }) }),
      /* @__PURE__ */ jsxs("p", { "aria-live": "polite", className: "text-sm font-semibold text-ink-600", children: [
        "Door ",
        current.n,
        " of ",
        total,
        " — ",
        current.marker
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(DoorPanel, { door: current, selected: answers[current.id] ?? [], onToggle: (v) => toggle(current, v), note, onNote: setNote, showSafety: current.n === 3 }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => go(step - 1), disabled: step === 0, className: `btn btn-secondary disabled:cursor-not-allowed disabled:opacity-50 ${FOCUS}`, children: "Back" }),
        step < total - 1 ? /* @__PURE__ */ jsx("button", { type: "button", onClick: () => go(step + 1), className: `btn btn-primary ${FOCUS}`, children: step === 0 ? "Open the next door" : "Next door" }) : /* @__PURE__ */ jsx("a", { href: "#paths-heading", className: `btn btn-primary ${FOCUS}`, children: "See my paths" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-4", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStepping(false), className: `min-h-11 text-base font-bold text-teal-700 underline underline-offset-2 ${FOCUS}`, children: "Or see all seven doors at once" }) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-ink-700", children: "All seven doors, in order. Answer as much or as little as you like — then the paths below open up." }),
      DOORS.map((d) => /* @__PURE__ */ jsx(DoorPanel, { door: d, selected: answers[d.id] ?? [], onToggle: (v) => toggle(d, v), note, onNote: setNote, showSafety: d.n === 3 }, d.id)),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStepping(true), className: `btn btn-secondary ${FOCUS}`, children: "Walk them one door at a time" }) })
    ] })
  ] });
}
function matchResources(answers) {
  const chosen = Object.values(answers).flat();
  const ids = [];
  for (const value of chosen) {
    for (const id of OPENS_TO[value] ?? []) {
      if (!ids.includes(id)) ids.push(id);
    }
  }
  const wantsAccessFirst = chosen.some((v) => ACCESS_CHOICES.includes(v));
  if (ids.length === 0) {
    for (const id of ACCESS_FIRST) ids.push(id);
    for (const r of RESOURCES) {
      if (r.pillar === PILLAR_ORDER[0] && !ids.includes(r.id)) ids.push(r.id);
    }
  } else if (wantsAccessFirst) {
    for (const id of ACCESS_FIRST.slice().reverse()) {
      const at = ids.indexOf(id);
      if (at > -1) ids.splice(at, 1);
      ids.unshift(id);
    }
    const seen = /* @__PURE__ */ new Set();
    for (let i = 0; i < ids.length; i += 1) {
      if (seen.has(ids[i])) {
        ids.splice(i, 1);
        i -= 1;
      } else {
        seen.add(ids[i]);
      }
    }
  }
  const matches = ids.map((id) => BY_ID.get(id)).filter((r) => Boolean(r));
  matches.sort((a, b) => PILLAR_ORDER.indexOf(a.pillar) - PILLAR_ORDER.indexOf(b.pillar));
  const gaps = [];
  for (const value of chosen) {
    const gap = GAPS[value];
    if (gap && !gaps.includes(gap)) gaps.push(gap);
  }
  const answered = chosen.filter((v) => v !== "skip").length;
  return {
    matches,
    gaps,
    answered,
    safety: chosen.includes("pillar-safety")
  };
}
function Paths({
  answers,
  onAsk
}) {
  const {
    matches,
    gaps,
    answered,
    safety
  } = useMemo(() => matchResources(answers), [answers]);
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "paths-heading", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "paths-heading", className: "text-2xl font-bold text-ink-900", children: "Your paths" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-ink-700", children: answered > 0 ? "Here is what your answers opened. Keep going in any order — no door needs the one before it." : "You have not opened a door yet, and that is completely fine. Here is where most people start, and you can walk the doors above any time." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl rounded-xl border border-teal-600/40 bg-white p-4 font-semibold text-ink-900", children: "Your answers never leave your browser. Nothing is recorded until YOU choose to send a message." }),
    /* @__PURE__ */ jsx("h3", { className: "mt-8 text-xl font-bold text-ink-900", children: "Open today — these exist right now" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Real San Diego programs, free to use, with the day we last checked each one. A badge tells the truth: open, closed, or worth a call before you travel." }),
    safety ? /* @__PURE__ */ jsx(SafetyPanel, { idPrefix: "paths-safety" }) : null,
    /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4", children: matches.map((r) => /* @__PURE__ */ jsx(ResourceLine, { r, highlight: true }, r.id)) }),
    gaps.map((gap) => /* @__PURE__ */ jsx(HonestNote, { children: gap }, gap)),
    /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-ink-600", children: [
      "Not sure where to start? Dial",
      " ",
      /* @__PURE__ */ jsx("a", { href: "tel:211", className: "text-base font-bold no-underline", children: "2-1-1" }),
      " ",
      "— free, 24 hours a day. Every listing above is also on the",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/resources", children: "free help finder" }),
      ", verified but not guaranteed."
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "mt-10 text-xl font-bold text-ink-900", children: "Opening soon — we are building these with you" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-ink-700", children: "Nothing below is funded or running yet. It is written down honestly so you can see what is coming, and so your answers can shape what gets built first." }),
    /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4", children: OPENING_SOON.map((p) => /* @__PURE__ */ jsxs("li", { className: "card border-teal-600/30", children: [
      /* @__PURE__ */ jsx("p", { className: "status-badge status-badge-confirm", children: p.badge }),
      /* @__PURE__ */ jsx("h4", { className: "mt-3 text-lg font-bold text-ink-900", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: p.body }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx("a", { href: p.href, className: `btn btn-secondary w-full ${FOCUS}`, children: p.hrefLabel }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: onAsk, className: `btn btn-primary w-full ${FOCUS}`, children: "Ask about a grant" })
      ] })
    ] }, p.title)) })
  ] });
}
function ComposePreview({
  idPrefix,
  subject,
  buttonLabel,
  buildBody
}) {
  const [body, setBody] = useState(null);
  const href = body === null ? void 0 : `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBody(buildBody()), className: `btn btn-secondary w-full sm:w-auto ${FOCUS}`, children: body === null ? buttonLabel : "Start over" }),
    body !== null ? /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: `${idPrefix}-composed`, className: "block text-lg font-bold text-ink-900", children: [
        "Your message",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-normal text-ink-600", children: "(read it, change any word you like)" })
      ] }),
      /* @__PURE__ */ jsx("textarea", { id: `${idPrefix}-composed`, rows: 12, value: body, onChange: (e) => setBody(e.target.value), className: fieldClass("font-mono text-base") }),
      /* @__PURE__ */ jsx("a", { href, className: `btn btn-primary mt-4 w-full sm:w-auto sm:px-10 ${FOCUS}`, children: "Open my email app with this message" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-ink-600", children: "Nothing has been sent yet, and nothing has been saved. Your own email app opens with this message in it — you press send, or you close it and walk away." })
    ] }) : /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-ink-600", children: "This button writes the message right here on your screen first. It sends nothing by itself." })
  ] });
}
function AskAboutAGrant({
  answers
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [includeAnswers, setIncludeAnswers] = useState(false);
  function answersLine() {
    const parts = [];
    for (const d of DOORS) {
      const vals = (answers[d.id] ?? []).filter((v) => v !== "skip");
      if (vals.length > 0) {
        const labels = vals.map((v) => d.choices.find((c) => c.value === v)?.label ?? v).join(", ");
        parts.push(`Door ${d.n} (${d.marker}): ${labels}`);
      }
    }
    return parts.length > 0 ? parts.join("\n") : "I did not open any doors.";
  }
  function buildBody() {
    return ["An open door — a message from the Project Home Key site", "", name.trim() ? `Name: ${name.trim()}` : "Name: (not given)", contact.trim() ? `Reach me at: ${contact.trim()}` : "Reach me at: (not given)", "", "What would change everything for me:", message.trim() ? message.trim() : "(written in my own words in the message)", "", includeAnswers ? "What I opened while I was here:\n" + answersLine() : "I chose not to include my door answers.", "", "---", "Nothing is promised. The program is not funded yet — what you share here shapes what gets built first, and it is treated with care."].join("\n");
  }
  return /* @__PURE__ */ jsxs("section", { id: "ask", "aria-labelledby": "ask-heading", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "ask-heading", className: "text-2xl font-bold text-ink-900", children: "Ask about a grant" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-ink-700", children: "If you want to be in the room when this gets built, this door is open. Tell us what would change everything for you — in your own words, as long or as short as you like. A name and a way to reply are both optional; you can write to us as a person with no address, no documents, and nothing to prove." }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "ask-name", className: "block text-lg font-bold text-ink-900", children: [
            "Name",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-normal text-ink-600", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsx("input", { id: "ask-name", type: "text", name: "name", autoComplete: "name", maxLength: 120, value: name, onChange: (e) => setName(e.target.value), className: fieldClass() })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "ask-contact", className: "block text-lg font-bold text-ink-900", children: [
            "Email or phone",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-normal text-ink-600", children: "(optional, only if you want a reply)" })
          ] }),
          /* @__PURE__ */ jsx("input", { id: "ask-contact", type: "text", name: "contact", autoComplete: "email", maxLength: 200, value: contact, onChange: (e) => setContact(e.target.value), className: fieldClass() })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "ask-message", className: "block text-lg font-bold text-ink-900", children: "What would change everything for you?" }),
        /* @__PURE__ */ jsx("textarea", { id: "ask-message", name: "message", rows: 5, maxLength: 4e3, value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Share only what you are comfortable sharing.", className: fieldClass() })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs("label", { className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-sand-200 bg-sand-50 p-3", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeAnswers, onChange: (e) => setIncludeAnswers(e.target.checked), className: "mt-1 h-6 w-6 shrink-0 accent-teal-600" }),
        /* @__PURE__ */ jsxs("span", { className: "text-lg text-ink-900", children: [
          "Add what I opened in the seven doors to this message.",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-normal text-ink-600", children: "(Off unless you say yes — your answers stay in your browser until you choose to send them.)" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ComposePreview, { idPrefix: "ask", subject: MAIL_SUBJECT, buttonLabel: "Write my message", buildBody }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 rounded-2xl border border-sand-200 bg-sand-50 p-5 text-sm text-ink-600", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: "Nothing is promised. The program is not funded yet" }),
        " ",
        "— what you share here shapes what gets built first, and it is treated with care. If your device has no email app, write to",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${MAIL_TO}`, className: "break-all", children: MAIL_TO }),
        " ",
        "whenever you like."
      ] })
    ] })
  ] });
}
function Listings() {
  const grouped = PILLAR_ORDER.map((pillar) => ({
    pillar,
    items: RESOURCES.filter((r) => r.pillar === pillar)
  })).filter((g) => g.items.length > 0);
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "listings-heading", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "listings-heading", className: "text-2xl font-bold text-ink-900", children: "Listings and open resources" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-ink-700", children: "Our own homes are being built — Phase 0. What is here now is real and open today: every entry below is a real program, checked by our researchers, with an honest status label and the date we last looked." }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-10", children: grouped.map((group, gi) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h3", { id: `listing-pillar-${gi}`, className: "flex items-center gap-3 text-xl font-bold text-ink-900", children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-1.5 w-6 rounded bg-clay-500" }),
        group.pillar
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4", children: group.items.map((r) => /* @__PURE__ */ jsx(ResourceLine, { r }, r.id)) })
    ] }, group.pillar)) }),
    /* @__PURE__ */ jsx(HonestNote, { children: "Framework, not commitment: the Seed Program, the Future Fund, and the Regenerative Commons are planning documents, not promises. No one is housed, no funds are raised, and the entity that will hold this work is not formed yet. What is unconditional today is the caring — and the listings above." })
  ] });
}
function ConsentAndMessages({
  answers
}) {
  const [mayReach, setMayReach] = useState("only-if-i-write");
  const [how, setHow] = useState([]);
  const [shareWith, setShareWith] = useState("nothing");
  const [message, setMessage] = useState("");
  function toggleHow(value) {
    setHow((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  }
  const CONSENT = [{
    id: "reach",
    legend: "May we reach out to you?",
    value: mayReach,
    set: setMayReach,
    options: [{
      value: "yes",
      label: "Yes — you may contact me",
      hint: "We will only use the contact you give us, for this one conversation."
    }, {
      value: "only-if-i-write",
      label: "Only if I write to you first",
      hint: "The door stays shut unless you open it. This is the default."
    }, {
      value: "no",
      label: "No — do not contact me",
      hint: "Nothing changes for you. You are welcome here either way."
    }]
  }, {
    id: "share",
    legend: "What may be shared with a partner, if this ever moves forward?",
    value: shareWith,
    set: setShareWith,
    options: [{
      value: "nothing",
      label: "Nothing about me — ever",
      hint: "Our default. Your name and story do not travel without your word."
    }, {
      value: "ask-first",
      label: "Only that I asked, and only after you ask me first",
      hint: "We come back to you before anything leaves this mailbox."
    }, {
      value: "my-message",
      label: "My message, so a partner can help me directly",
      hint: "Still only with your yes, and still changeable at any time."
    }]
  }];
  const upToYou = (answers["reach"] ?? []).filter((v) => v !== "skip");
  function buildBody() {
    const howText = how.length > 0 ? how.map((h) => h === "email" ? "email" : h === "phone" ? "phone" : "text").join(", ") : "no way given";
    const reachText = mayReach === "yes" ? "Yes, you may contact me" : mayReach === "no" ? "No, do not contact me" : "Only if I write to you first";
    const shareText = shareWith === "nothing" ? "Nothing about me — ever" : shareWith === "ask-first" ? "Only that I asked, and only after asking me first" : "My message, so a partner can help me directly";
    const doorSeven = upToYou.length > 0 ? upToYou.map((v) => v === "reach-email" ? "email" : v === "reach-phone" ? "phone" : v === "reach-text" ? "text" : "no contact").join(", ") : "not answered";
    return ["An open door — my consent choices and message", "", `May you reach me: ${reachText}`, `How: ${howText}`, `In Door 7 I said: ${doorSeven}`, `What may be shared with a partner: ${shareText}`, "", "My message:", message.trim() ? message.trim() : "(no message — just my choices)", "", "---", "Nothing is promised. The program is not funded yet, and the entity is not formed yet. I understand that sending this changes nothing about my rights."].join("\n");
  }
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "consent-heading", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "consent-heading", className: "text-2xl font-bold text-ink-900", children: "Consent and messages" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-lg text-ink-700", children: "You are in charge of every part of this. Choose what you want, leave the rest, and change your mind as often as life changes — the door is yours." }),
    upToYou.length > 0 ? /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-ink-700", children: "Door 7 already told us how you would like to be reached. Everything here can be changed, including changing it to no contact at all." }) : null,
    /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-5", children: [
      CONSENT.map((block) => /* @__PURE__ */ jsxs("fieldset", { className: "card", children: [
        /* @__PURE__ */ jsx("legend", { className: "px-1 text-xl font-bold text-ink-900", children: block.legend }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 grid gap-2", children: block.options.map((o) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("label", { className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-sand-200 bg-white p-3 hover:bg-sand-100 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-teal-600", children: [
          /* @__PURE__ */ jsx("input", { type: "radio", name: `consent-${block.id}`, value: o.value, checked: block.value === o.value, onChange: () => block.set(o.value), className: "mt-1 h-6 w-6 shrink-0 accent-teal-600" }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg text-ink-900", children: [
            o.label,
            /* @__PURE__ */ jsx("span", { className: "mt-1 block text-base font-normal text-ink-600", children: o.hint })
          ] })
        ] }) }, o.value)) })
      ] }, block.id)),
      /* @__PURE__ */ jsxs("fieldset", { className: "card", children: [
        /* @__PURE__ */ jsx("legend", { className: "px-1 text-xl font-bold text-ink-900", children: "If we reach out, how would you like that to happen?" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 grid gap-2", children: [{
          value: "email",
          label: "Email"
        }, {
          value: "phone",
          label: "Phone call"
        }, {
          value: "text",
          label: "Text message"
        }].map((o) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("label", { className: "flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-sand-200 bg-white p-3 hover:bg-sand-100 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-teal-600", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", name: "consent-how", value: o.value, checked: how.includes(o.value), onChange: () => toggleHow(o.value), className: "mt-1 h-6 w-6 shrink-0 accent-teal-600" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg text-ink-900", children: o.label })
        ] }) }, o.value)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "consent-message", className: "block text-xl font-bold text-ink-900", children: "Anything you want to say to us" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "A sentence is plenty. If you would rather stay quiet, that door stays open too." }),
        /* @__PURE__ */ jsx("textarea", { id: "consent-message", name: "message", rows: 5, maxLength: 4e3, value: message, onChange: (e) => setMessage(e.target.value), className: fieldClass() })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "card mt-5", children: /* @__PURE__ */ jsx(ComposePreview, { idPrefix: "consent", subject: MAIL_SUBJECT, buttonLabel: "Write my message and choices", buildBody }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 rounded-2xl border-2 border-sky-500 bg-white p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-ink-900", children: "Our privacy promise, in plain words" }),
      /* @__PURE__ */ jsxs("ul", { className: "mt-3 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-ink-900", children: "What we keep" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Only what you choose to send us, in an email in one mailbox, read by our team. Nothing on this page is saved — no account, no profile, no queue, no file about you." })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-ink-900", children: "What comes off this page" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Nothing. Your answers are worked out inside your own browser and never travel on their own. There is no tracking on this page and no analytics." })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-ink-900", children: "What we never do" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "We never sell or share a list, never name our donors, never market to you, and never ask for documents, ID numbers, medical details, or immigration status." })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-ink-900", children: "How to be forgotten" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: "Reply to your own message and ask us to delete it. We delete it, and we tell you when it is done. Asking for nothing is a complete answer." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-ink-600", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: "Entity status — clearly pending:" }),
        " ",
        "nothing here is a formed organization yet. Project Home Key proposes to launch under fiscal sponsorship and graduate to an independent 501(c)(3), pending final owner confirmation and legal counsel validation. Stated exactly: fiscal sponsorship → independent 501(c)(3) PROPOSED, pending final confirmation and legal counsel validation."
      ] })
    ] })
  ] });
}
function OpenDoor() {
  const [answers, setAnswers] = useState({});
  const [note, setNote] = useState("");
  function toggle(door, value) {
    setAnswers((prev) => {
      const current = prev[door.id] ?? [];
      if (!door.multi) {
        return {
          ...prev,
          [door.id]: current.includes(value) ? [] : [value]
        };
      }
      if (value === "skip") {
        return {
          ...prev,
          [door.id]: current.includes("skip") ? [] : ["skip"]
        };
      }
      const withoutSkip = current.filter((v) => v !== "skip");
      const next = withoutSkip.includes(value) ? withoutSkip.filter((v) => v !== value) : [...withoutSkip, value];
      return {
        ...prev,
        [door.id]: next
      };
    });
  }
  function scrollToAsk() {
    const el = document.getElementById("ask");
    if (!el) return;
    const reduce = typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start"
    });
    document.getElementById("ask-name")?.focus();
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-4 py-10", children: [
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "welcome-heading", children: [
        /* @__PURE__ */ jsx("p", { className: "status-badge status-badge-confirm", children: "Phase 0 — Planning · nothing here is funded yet" }),
        /* @__PURE__ */ jsx("h1", { id: "welcome-heading", className: "mt-4 text-3xl font-bold text-ink-900 sm:text-4xl", children: "An open door" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-xl text-ink-700", children: "An open door — and behind it, seven questions that open more. Tell us what you are looking for, and we will show you the paths that exist today and the ones we are building together." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 max-w-3xl text-lg text-ink-700", children: [
          "This is not paperwork and there is nothing to prove here. It is a door, and you can walk through it at your own pace, skip any part of it, or leave it and come back on a better day.",
          " ",
          /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: "Some doors are open today; others are being built." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-warn-700/40 bg-warn-bg p-5", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-warn-700", children: "What is honest about where we are" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 grid gap-2 text-ink-900", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Phase 0:" }),
              " 0 people housed, no funds raised, no housing available today — and no waitlist position to gain or lose."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The entity that will hold this work is not formed yet." }),
              " ",
              "Fiscal sponsorship → independent 501(c)(3), pending owner confirmation and legal counsel validation."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nothing on this page is a promise." }),
              " The listings below are real and open today; everything about our own program is a framework, not a commitment."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "No one is enrolled by a web page." }),
              " Answers here decide nothing about you, and a free help program never turns anyone away for answering honestly."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx("a", { href: "#doors-heading", className: `btn btn-primary w-full ${FOCUS}`, children: "Open the seven doors" }),
          /* @__PURE__ */ jsx("a", { href: "/resources", className: `btn btn-secondary w-full ${FOCUS}`, children: "Find free help right now" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-ink-700", children: "One thing belongs at the top, before any question: if someone is hurting you, this page can wait. These doors are open right now, whether or not you walk any of ours." }),
        /* @__PURE__ */ jsx(SafetyPanel, { idPrefix: "welcome-safety" })
      ] }),
      /* @__PURE__ */ jsx(SevenDoors, { answers, toggle, note, setNote }),
      /* @__PURE__ */ jsx(Paths, { answers, onAsk: scrollToAsk }),
      /* @__PURE__ */ jsx(AskAboutAGrant, { answers }),
      /* @__PURE__ */ jsx(Listings, {}),
      /* @__PURE__ */ jsx(ConsentAndMessages, { answers }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "more-heading", className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { id: "more-heading", className: "text-2xl font-bold text-ink-900", children: "More open doors" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [{
          to: "/framework",
          label: "The Framework"
        }, {
          to: "/seeds",
          label: "The Seed Program"
        }, {
          to: "/studies",
          label: "The Studies"
        }, {
          to: "/pilot",
          label: "The Pilot Proposal"
        }, {
          to: "/assistance",
          label: "Request help"
        }, {
          to: "/resources",
          label: "The free help finder"
        }].map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.to, className: `btn btn-secondary w-full ${FOCUS}`, children: link.label }) }, link.to)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  OpenDoor as component
};
