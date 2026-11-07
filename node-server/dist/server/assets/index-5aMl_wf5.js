import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import "@tanstack/react-router";
const PILLARS = [{
  name: "Free Independent Personal Housing",
  text: "Every person has a place of their own to live — no rent, no strings, no shelter bunk."
}, {
  name: "Free Universal Health",
  text: "Health care is free and open to everyone, no matter your income or paperwork."
}, {
  name: "Free Food Resources",
  text: "Free, dignified food — groceries and meals — for anyone who needs it."
}, {
  name: "Free Hygiene Resources",
  text: "Free places to shower, wash clothes, and care for yourself with dignity."
}, {
  name: "Free Regenerative Independent Personal Income",
  text: "A steady income that covers your bills and grows your savings over time."
}, {
  name: "Free Zero Entropy Travel",
  text: "Free, easy ways to get around the city without spending money or wasting energy."
}];
function Home() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-5xl px-4 py-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-clay-700", children: "Project Home Key · San Diego, CA" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 max-w-3xl text-4xl font-bold leading-tight text-ink-900 sm:text-5xl", children: "Everyone has a place to call home." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-2xl text-lg text-ink-700", children: [
          "Project Home Key is a ",
          /* @__PURE__ */ jsx("strong", { children: "soft landing initiative" }),
          " and a",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "new-norm movement" }),
          ": free housing, free health, free food, free hygiene, regenerative income, and zero-entropy travel — all working as one system called ",
          /* @__PURE__ */ jsx("strong", { children: "RUHBI" }),
          ", starting in San Diego, California."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "/resources", className: "btn btn-primary", children: "Find free help now" }),
          /* @__PURE__ */ jsx("a", { href: "/pilot", className: "btn btn-secondary", children: "Read the pilot proposal" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { "aria-labelledby": "pillars-heading", className: "bg-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "pillars-heading", className: "text-2xl font-bold text-ink-900", children: "The six pillars" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 max-w-2xl text-ink-700", children: [
          "These six pillars are the whole of a secure life. Each one is free, each one is for everyone, and each one is verified: the",
          " ",
          /* @__PURE__ */ jsx("a", { href: "/resources", children: "free help finder" }),
          " lists real San Diego programs that exist today."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: PILLARS.map((pillar, i) => /* @__PURE__ */ jsx("li", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg text-white", children: i + 1 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: pillar.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-ink-700", children: pillar.text })
          ] })
        ] }) }, pillar.name)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { "aria-labelledby": "ruhbi-heading", className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "ruhbi-heading", className: "text-2xl font-bold text-ink-900", children: "What is RUHBI?" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: [
          "RUHBI is the system that ties the six pillars together. Today, finding help means hunting through dozens of separate programs and applications. RUHBI turns that into ",
          /* @__PURE__ */ jsx("strong", { children: "one navigable system" }),
          ": you land in a stable home first, and the rest — health care, food, hygiene, income, and getting around — is already there waiting for you."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: [
          "That is what a ",
          /* @__PURE__ */ jsx("strong", { children: "soft landing" }),
          " means. You do not have to fix everything before you can rest. You rest first, and the support system holds you while you rebuild."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { "aria-labelledby": "norm-heading", className: "bg-teal-700 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "norm-heading", className: "text-2xl font-bold text-sand-50", children: "The new norm: housing like libraries and parks" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-sand-100", children: [
          "This is a ",
          /* @__PURE__ */ jsx("strong", { children: "universal model for everyone" }),
          ". Free housing is not a charity for a few — it is how a healthy city works, the way public libraries and parks belong to all of us."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-sand-100", children: [
          "Unsheltered people are served ",
          /* @__PURE__ */ jsx("strong", { children: "first" }),
          ", as the proof case: when those hardest to house thrive, the model is proven for every San Diegan, and every city after. The goal of this movement is that free housing initiatives become",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "normal city infrastructure" }),
          " — planned, funded, and open to everyone, everywhere."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
