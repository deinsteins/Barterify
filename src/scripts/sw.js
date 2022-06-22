import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    console.log('Cannot fetch POST');
  } else {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request)),
    );
  }
});
