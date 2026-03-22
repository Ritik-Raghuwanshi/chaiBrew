import chaiBrew from "./engine/indexer";

function run() {
  try {
    chaiBrew();
  } catch (e) {
    console.error("[chaiBrew] Error:", e);
  }
}

// Ensure browser environment
if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
}

export default chaiEngine;