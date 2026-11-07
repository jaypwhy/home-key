import { jsxs, jsx } from "react/jsx-runtime";
function PreReleaseBox({
  action,
  checkboxLabel,
  state
}) {
  if (state.joined === "1") {
    return /* @__PURE__ */ jsxs(
      "section",
      {
        "aria-labelledby": "pre-release-heading",
        className: "mt-12 rounded-2xl border-2 border-teal-600 bg-white p-6",
        children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "pre-release-heading",
              className: "text-xl font-bold text-ink-900",
              children: "You are on the pre-release list."
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-ink-700", children: "We will email you as each phase opens — no spam, unsubscribe anytime." })
        ]
      }
    );
  }
  if (state.joined === "already") {
    return /* @__PURE__ */ jsxs(
      "section",
      {
        "aria-labelledby": "pre-release-heading",
        className: "mt-12 rounded-2xl border-2 border-teal-600 bg-white p-6",
        children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "pre-release-heading",
              className: "text-xl font-bold text-ink-900",
              children: "You are already on the list."
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-ink-700", children: "We will email you as each phase opens — no spam, unsubscribe anytime." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-labelledby": "pre-release-heading",
      className: "mt-12 rounded-2xl border-2 border-teal-600 bg-white p-6",
      children: [
        /* @__PURE__ */ jsx("h2", { id: "pre-release-heading", className: "text-xl font-bold text-ink-900", children: "Get notified as phases open" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-700", children: "We will email you as each phase opens — no spam, unsubscribe anytime." }),
        state.error === "email" ? /* @__PURE__ */ jsx(
          "p",
          {
            role: "alert",
            className: "mt-3 rounded-xl border border-stop-700/40 bg-stop-bg p-3 font-semibold text-stop-700",
            children: "That email address does not look right — please check it and try again."
          }
        ) : null,
        state.error === "save" ? /* @__PURE__ */ jsx(
          "p",
          {
            role: "alert",
            className: "mt-3 rounded-xl border border-stop-700/40 bg-stop-bg p-3 font-semibold text-stop-700",
            children: "Something went wrong saving your email. Please try again."
          }
        ) : null,
        /* @__PURE__ */ jsxs("form", { method: "POST", action, className: "mt-4", children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "hidden", children: /* @__PURE__ */ jsxs("label", { children: [
            "Leave this blank",
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "website",
                tabIndex: -1,
                autoComplete: "off"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: `pr-email-${action.replace("/", "")}`,
                className: "block text-lg font-bold text-ink-900",
                children: "Email address"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: `pr-email-${action.replace("/", "")}`,
                type: "email",
                name: "email",
                required: true,
                autoComplete: "email",
                maxLength: 200,
                placeholder: "you@example.org",
                className: "mt-2 block min-h-12 w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-lg text-ink-900"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs("label", { className: "flex min-h-12 cursor-pointer items-start gap-3", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                name: "also_interested",
                value: "yes",
                className: "mt-1.5 h-6 w-6 shrink-0 accent-teal-600"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-lg text-ink-900", children: checkboxLabel })
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "btn btn-primary mt-4 w-full text-lg sm:w-auto sm:px-10",
              children: "Join the pre-release list"
            }
          )
        ] })
      ]
    }
  );
}
export {
  PreReleaseBox as P
};
