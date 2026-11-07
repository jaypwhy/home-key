import { jsxs, jsx } from "react/jsx-runtime";
import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
const appCss = "/assets/app-XvwkZnTJ.css";
const Route$9 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Project Home Key — Everyone has a place to call home" },
      {
        name: "description",
        content: "Free housing, health, food, hygiene, income, and travel as one system (RUHBI), starting in San Diego. Verified free resources and a draft pilot proposal."
      }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  notFoundComponent: () => /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-ink-900", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Try the links above to find your way home." })
  ] }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$8 = () => import("./studies-DnkMdLZY.js");
const Route$8 = createFileRoute("/studies")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./seeds-QJ_iizMU.js");
const Route$7 = createFileRoute("/seeds")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  loader: ({
    location
  }) => {
    const s = location.search ?? {};
    return {
      joined: typeof s["joined"] === "string" ? s["joined"] : "",
      error: typeof s["error"] === "string" ? s["error"] : ""
    };
  },
  server: {
    handlers: {
      POST: async ({
        request
      }) => {
        const go = (qs) => new Response(null, {
          status: 303,
          headers: {
            Location: `/seeds${qs}`
          }
        });
        let form;
        try {
          form = await request.formData();
        } catch {
          return go("?error=save");
        }
        if (String(form.get("website") ?? "").trim() !== "") {
          return go("?joined=1");
        }
        const email = String(form.get("email") ?? "").trim().toLowerCase().slice(0, 200);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return go("?error=email");
        }
        const alsoInterested = form.get("also_interested") === "yes";
        try {
          const {
            appendFile,
            mkdir,
            readFile
          } = await import("node:fs/promises");
          const {
            join,
            dirname
          } = await import("node:path");
          const file = join(process.cwd(), "data", "pre-release-list.jsonl");
          await mkdir(dirname(file), {
            recursive: true
          });
          let existing = "";
          try {
            existing = await readFile(file, "utf8");
          } catch {
            existing = "";
          }
          const dup = existing.split("\n").filter((l) => l.trim() !== "").some((l) => {
            try {
              return JSON.parse(l).email === email;
            } catch {
              return false;
            }
          });
          if (dup) return go("?joined=already");
          const entry = {
            received_at: (/* @__PURE__ */ new Date()).toISOString(),
            source_page: "seeds",
            email,
            also_interested_in: alsoInterested ? "pilot" : ""
          };
          await appendFile(file, JSON.stringify(entry) + "\n", "utf8");
        } catch {
          return go("?error=save");
        }
        return go("?joined=1");
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./resources-Dke5gC8g.js");
const Route$6 = createFileRoute("/resources")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./pilot-C7bMCRma.js");
const Route$5 = createFileRoute("/pilot")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: ({
    location
  }) => {
    const s = location.search ?? {};
    return {
      joined: typeof s["joined"] === "string" ? s["joined"] : "",
      error: typeof s["error"] === "string" ? s["error"] : ""
    };
  },
  server: {
    handlers: {
      POST: async ({
        request
      }) => {
        const go = (qs) => new Response(null, {
          status: 303,
          headers: {
            Location: `/pilot${qs}`
          }
        });
        let form;
        try {
          form = await request.formData();
        } catch {
          return go("?error=save");
        }
        if (String(form.get("website") ?? "").trim() !== "") {
          return go("?joined=1");
        }
        const email = String(form.get("email") ?? "").trim().toLowerCase().slice(0, 200);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return go("?error=email");
        }
        const alsoInterested = form.get("also_interested") === "yes";
        try {
          const {
            appendFile,
            mkdir,
            readFile
          } = await import("node:fs/promises");
          const {
            join,
            dirname
          } = await import("node:path");
          const file = join(process.cwd(), "data", "pre-release-list.jsonl");
          await mkdir(dirname(file), {
            recursive: true
          });
          let existing = "";
          try {
            existing = await readFile(file, "utf8");
          } catch {
            existing = "";
          }
          const dup = existing.split("\n").filter((l) => l.trim() !== "").some((l) => {
            try {
              return JSON.parse(l).email === email;
            } catch {
              return false;
            }
          });
          if (dup) return go("?joined=already");
          const entry = {
            received_at: (/* @__PURE__ */ new Date()).toISOString(),
            source_page: "pilot",
            email,
            also_interested_in: alsoInterested ? "seeds" : ""
          };
          await appendFile(file, JSON.stringify(entry) + "\n", "utf8");
        } catch {
          return go("?error=save");
        }
        return go("?joined=1");
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./open-door-DCcdjIF2.js");
const Route$4 = createFileRoute("/open-door")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "An Open Door — Project Home Key"
    }, {
      name: "description",
      content: "Seven questions that open more. See the free help that exists in San Diego today, and the paths we are building together."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./framework-CUHSHVT2.js");
const Route$3 = createFileRoute("/framework")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "The Framework — Project Home Key"
    }, {
      name: "description",
      content: "How every seed cohort runs: free base needs, regenerative income by choice, and the sacred protections that bind us before the first participant arrives. Ratified direction (Plan Rev 5); operations in development."
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./case-studies-DEc7QGZ1.js");
const Route$2 = createFileRoute("/case-studies")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Case studies — seven ways to live — Project Home Key"
    }, {
      name: "description",
      content: "Seven illustrative framework walkthroughs of how a home arrives: already renovated, or lived in while it is developed around you — with sensory-friendly spaces in both states. Phase 0: framework, not a promise."
    }]
  })
});
const VALID_PROGRAMS = /* @__PURE__ */ new Set(["housing", "health", "food", "income", "travel", "animals", "other"]);
const $$splitComponentImporter$1 = () => import("./assistance-CG1nyyQs.js");
const Route$1 = createFileRoute("/assistance")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: ({
    location
  }) => {
    const s = location.search ?? {};
    return {
      received: s["received"] === "1" || s["received"] === 1,
      programs: typeof s["programs"] === "string" ? s["programs"] : "",
      error: typeof s["error"] === "string" ? s["error"] : ""
    };
  },
  server: {
    handlers: {
      POST: async ({
        request
      }) => {
        new URL(request.url);
        const go = (qs2) => new Response(null, {
          status: 303,
          headers: {
            Location: `/assistance${qs2}`
          }
        });
        let form;
        try {
          form = await request.formData();
        } catch {
          return go("?error=save");
        }
        if (String(form.get("website") ?? "").trim() !== "") {
          return go("?received=1");
        }
        const programs = form.getAll("programs").map(String).filter((v) => VALID_PROGRAMS.has(v));
        const firstName = String(form.get("first_name") ?? "").trim().slice(0, 120);
        const lastName = String(form.get("last_name") ?? "").trim().slice(0, 120);
        const email = String(form.get("email") ?? "").trim().slice(0, 200);
        const phone = String(form.get("phone") ?? "").trim().slice(0, 60);
        const city = String(form.get("city") ?? "").trim().slice(0, 120);
        const message = String(form.get("message") ?? "").trim().slice(0, 2e3);
        if (programs.length === 0 && message === "") {
          return go("?error=empty");
        }
        const entry = {
          id: `ar-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          received_at: (/* @__PURE__ */ new Date()).toISOString(),
          programs,
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          city,
          message
        };
        try {
          const {
            appendFile,
            mkdir
          } = await import("node:fs/promises");
          const {
            join,
            dirname
          } = await import("node:path");
          const file = join(process.cwd(), "data", "assistance-requests.jsonl");
          await mkdir(dirname(file), {
            recursive: true
          });
          await appendFile(file, JSON.stringify(entry) + "\n", "utf8");
        } catch {
          return go("?error=save");
        }
        const qs = programs.length ? `?received=1&programs=${encodeURIComponent(programs.join(","))}` : "?received=1";
        return go(qs);
      }
    }
  }
});
const $$splitComponentImporter = () => import("./index-5aMl_wf5.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StudiesRoute = Route$8.update({
  id: "/studies",
  path: "/studies",
  getParentRoute: () => Route$9
});
const SeedsRoute = Route$7.update({
  id: "/seeds",
  path: "/seeds",
  getParentRoute: () => Route$9
});
const ResourcesRoute = Route$6.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$9
});
const PilotRoute = Route$5.update({
  id: "/pilot",
  path: "/pilot",
  getParentRoute: () => Route$9
});
const OpenDoorRoute = Route$4.update({
  id: "/open-door",
  path: "/open-door",
  getParentRoute: () => Route$9
});
const FrameworkRoute = Route$3.update({
  id: "/framework",
  path: "/framework",
  getParentRoute: () => Route$9
});
const CaseStudiesRoute = Route$2.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$9
});
const AssistanceRoute = Route$1.update({
  id: "/assistance",
  path: "/assistance",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AssistanceRoute,
  CaseStudiesRoute,
  FrameworkRoute,
  OpenDoorRoute,
  PilotRoute,
  ResourcesRoute,
  SeedsRoute,
  StudiesRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx("p", { children: "Not found" })
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$7 as R,
  VALID_PROGRAMS as V,
  Route$5 as a,
  Route$1 as b,
  router as r
};
