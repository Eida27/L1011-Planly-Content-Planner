const viewButtons = Array.from(document.querySelectorAll("[data-view]"));
const screens = Array.from(document.querySelectorAll("[data-screen]"));
const savedView = localStorage.getItem("planly-active-view");

function setView(view) {
  const nextView = screens.some((screen) => screen.dataset.screen === view) ? view : "dashboard";

  for (const button of viewButtons) {
    const isActive = button.dataset.view === nextView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  }

  for (const screen of screens) {
    const isActive = screen.dataset.screen === nextView;
    screen.classList.toggle("is-active", isActive);
    screen.hidden = !isActive;
    if (isActive) {
      screen.focus({ preventScroll: true });
    }
  }

  localStorage.setItem("planly-active-view", nextView);
}

for (const button of viewButtons) {
  button.addEventListener("click", () => setView(button.dataset.view));
}

setView(savedView || "dashboard");

window.PlanlyApp = {
  setView,
};
