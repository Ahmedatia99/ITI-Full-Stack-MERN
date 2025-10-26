if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");
const installedTag = document.getElementById("installedTag");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  if (installBtn) installBtn.hidden = true;
  if (installedTag) installedTag.hidden = false;
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
    }
    deferredPrompt = null;
    installBtn.hidden = true;
  });
}
