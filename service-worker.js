self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('datos-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
