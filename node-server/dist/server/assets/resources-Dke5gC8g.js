import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Header-DTTK51cN.js";
import { r as resourcesData } from "./resources-ChnQxp-i.js";
import "@tanstack/react-router";
const PILLAR_ORDER = ["Free Independent Personal Housing", "Free Universal Health", "Free Food Resources", "Free Hygiene Resources", "Free Regenerative Independent Personal Income", "Free Zero Entropy Travel"];
function statusClass(status) {
  const s = status.toLowerCase();
  if (s.includes("open")) return "status-badge status-badge-open";
  if (s.includes("closed")) return "status-badge status-badge-closed";
  if (s.includes("confirm")) return "status-badge status-badge-confirm";
  return "status-badge status-badge-other";
}
function ResourceCard({
  r
}) {
  return /* @__PURE__ */ jsxs("li", { className: "card", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-ink-900", children: r.name }),
      /* @__PURE__ */ jsx("span", { className: statusClass(r.status), children: r.status })
    ] }),
    r.status_note ? /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ink-700", children: /* @__PURE__ */ jsx("strong", { className: "text-ink-900", children: r.status_note }) }) : null,
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink-700", children: r.provides }),
    /* @__PURE__ */ jsxs("dl", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-bold text-ink-900", children: "Who it is for" }),
        /* @__PURE__ */ jsx("dd", { className: "text-ink-700", children: r.eligibility })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-bold text-ink-900", children: "How to apply" }),
        /* @__PURE__ */ jsx("dd", { className: "text-ink-700", children: r.apply })
      ] }),
      r.phone ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-bold text-ink-900", children: "Phone" }),
        /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("a", { href: `tel:${r.phone.replace(/[^0-9+]/g, "")}`, className: "inline-flex min-h-11 items-center rounded-lg underline-offset-2", children: r.phone }) })
      ] }) : null,
      r.url ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-bold text-ink-900", children: "Website" }),
        /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("a", { href: r.url, target: "_blank", rel: "noopener noreferrer", className: "break-all underline-offset-2", children: r.url }) })
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 border-t border-sand-200 pt-3 text-xs text-ink-600", children: [
      r.source ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Source:",
        " ",
        /* @__PURE__ */ jsx("a", { href: r.source, target: "_blank", rel: "noopener noreferrer", children: r.source }),
        " · "
      ] }) : null,
      "Checked ",
      r.date_checked ?? "date unknown"
    ] })
  ] });
}
function Resources() {
  const grouped = PILLAR_ORDER.map((pillar) => ({
    pillar,
    items: resourcesData.filter((r) => r.pillar === pillar)
  })).filter((g) => g.items.length > 0);
  const total = resourcesData.length;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-5xl px-4 py-10", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-lg font-semibold text-clay-700", children: [
        "San Diego County · verified ",
        total,
        " programs"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-3xl font-bold text-ink-900 sm:text-4xl", children: "Free help finder" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 max-w-3xl text-lg text-ink-700", children: [
        "Every listing below is a real San Diego County program, checked",
        " ",
        resourcesData[0]?.date_checked ? `on ${resourcesData[0].date_checked}` : "",
        " ",
        "by our researchers. Status labels tell the truth: an",
        " ",
        /* @__PURE__ */ jsx("span", { className: "status-badge status-badge-open", children: "Open" }),
        " program is taking people now, a",
        " ",
        /* @__PURE__ */ jsx("span", { className: "status-badge status-badge-closed", children: "Waitlist closed" }),
        " ",
        "program is not, and",
        " ",
        /* @__PURE__ */ jsx("span", { className: "status-badge status-badge-confirm", children: "Confirm current status" }),
        " ",
        "means you should check before you go, because schedules change. Always call 2-1-1 first if you are not sure where to start."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-10", children: grouped.map((group, gi) => /* @__PURE__ */ jsxs("section", { "aria-labelledby": `pillar-${gi}`, children: [
        /* @__PURE__ */ jsxs("h2", { id: `pillar-${gi}`, className: "flex items-center gap-3 text-xl font-bold text-ink-900", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-1.5 w-6 rounded bg-clay-500" }),
          group.pillar
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-4", children: group.items.map((r) => /* @__PURE__ */ jsx(ResourceCard, { r }, r.id)) })
      ] }, group.pillar)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-10 rounded-2xl border border-sand-200 bg-white p-5 text-sm text-ink-600", children: [
        "Need a place to start? Dial",
        " ",
        /* @__PURE__ */ jsx("a", { href: "tel:211", className: "text-base font-bold no-underline", children: "2-1-1" }),
        " ",
        "— free, 24 hours a day, in English and Spanish. This list is verified but not guaranteed; programs change, so confirm before you travel."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Resources as component
};
