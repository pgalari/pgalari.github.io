self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("sefirot-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./app.js",
        "./sefirot.json",
        "./manifest.json",
        "./icon192.ico"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
