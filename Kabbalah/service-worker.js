self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('kabbalah-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/main.js',
        '/sefirot-data.js',
        '/sendas-data.js',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
