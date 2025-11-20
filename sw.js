const CACHE_NAME = 'caducano-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './agregar.html',
  './medicamentos.html',
  './logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});