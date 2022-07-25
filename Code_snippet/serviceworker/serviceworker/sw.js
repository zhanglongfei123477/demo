// sw.js




const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/',
  '/index.js',
];

self.addEventListener('install', event => {
  caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache);
    });
});

// sw.js
// sw.js
/* this.addEventListener('message', function (event) {
  console.log(event.data)
  console.log('install');
  event.waitUntil(
    caches.open('sw_demo').then(function (cache) {
      return cache.addAll([
        './index.js'
      ])
    }
    ));
}); */

