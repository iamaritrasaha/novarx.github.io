const CACHE_NAME = 'novarx-cache-v2'; // Bump version to invalidate old caches
const ASSETS = [
    './',
    './index.html',
    './index.css',
    './app.js',
    './manifest.json',
    './assets/novarx_app_icon.jpg',
    './assets/hero_banner.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Network-First, Cache-Fallback Strategy to allow instant delivery of new developer updates
self.addEventListener('fetch', (e) => {
    if (e.request.method === 'GET' && e.request.url.startsWith(self.location.origin)) {
        e.respondWith(
            fetch(e.request)
                .then((response) => {
                    if (!response || response.status !== 200) return response;
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(e.request);
                })
        );
    } else {
        e.respondWith(fetch(e.request));
    }
});
