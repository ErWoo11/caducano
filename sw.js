self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('caducano-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/agregar.html',
        '/medicamentos.html',
        '/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      return r || fetch(e.request);
    })
  );
});