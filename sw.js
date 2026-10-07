// Jan Seva Online — service worker. Caches the app's own files (network first, then cache).
// Village lists (places/*.json) are cached the first time a state is opened.
// Firebase / Google requests are not touched.
const CACHE = "jso-v6";
const SHELL = ["./", "index.html", "styles.css", "app.js", "config.js", "services.js", "districts.js", "i18n.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", (e) => {
  // Add files one by one so a single missing file (e.g. an icon) doesn't stop the app from installing.
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin || url.pathname.endsWith(".apk")) return;
  e.respondWith(
    fetch(e.request).then((res) => {
      if (!res.ok) return res;
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
  );
});
