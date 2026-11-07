import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-14 border-t border-sand-200 bg-white/60 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-ink-900", children: "Everyone has a place to call home." }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ink-600", children: "Project Home Key · San Diego, California · A soft landing initiative and a new-norm movement" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-600", children: "Free independent housing should be normal city infrastructure — like libraries and parks." })
  ] }) });
}
const NAV = [
  { to: "/", label: "Mission" },
  { to: "/resources", label: "Find free help" },
  { to: "/open-door", label: "An Open Door" },
  { to: "/studies", label: "Studies" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/framework", label: "The Framework" },
  { to: "/assistance", label: "Request help" },
  { to: "/pilot", label: "Pilot proposal" },
  { to: "/seeds", label: "Seed program" }
];
function HomeMark() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      className: "h-7 w-7 text-teal-600",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M3 11.5 12 4l9 7.5" }),
        /* @__PURE__ */ jsx("path", { d: "M5.5 10.5V20h13v-9.5" }),
        /* @__PURE__ */ jsx("path", { d: "M10 20v-5h4v5" })
      ]
    }
  );
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "border-b border-sand-200 bg-white/90", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 py-3", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "no-underline", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(HomeMark, {}),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold leading-tight text-ink-900", children: "Project Home Key" })
    ] }) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Main", className: "mt-2", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-x-1 gap-y-1", children: NAV.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      Link,
      {
        to: item.to,
        className: "block min-h-11 rounded-lg px-3 py-2.5 text-base font-semibold no-underline text-ink-700 hover:bg-sand-100 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600",
        children: item.label
      }
    ) }, item.to)) }) })
  ] }) });
}
export {
  Footer as F,
  Header as H
};
