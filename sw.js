const CACHE_NAME = 'pwa-spoof-v1';

self.addEventListener('install', (e) => {
  console.log('[SW] Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[SW] Activated');
  clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => {
    return new Response('Offline');
  }));
});
