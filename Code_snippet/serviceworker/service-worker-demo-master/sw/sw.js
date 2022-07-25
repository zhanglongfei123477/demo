const VERSION = 'v7';
const CACHE_NAME = 'service-worker-demo' + VERSION;

console.log('begin');
console.log('begin');

this.addEventListener('install', function (event) {
    console.log('安装 sw.js');
    // 先说 event.waitUntil

    // 只能在 Service Worker 的 install 或者 activate 事件中使用；
    // 看起来像是一个 callback，但是，即便你不使用它，程序也可能正常运行。
    // 如果你传递了一个 Promise 给它，那么只有当该 Promise resolved 时，
    // Service Worker 才会完成 install；
    // 如果 Promise rejected 掉，那么整个 Service Worker 便会被废弃掉。
    // 因此，cache.addAll 里面，只要有一个资源获取失败，整个 Service Worker 便会失效。
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            // 在 install 事件中用 cache.addAll，在 fetch 事件中用 cache.put，
            // add 和 put 有什么区别吗？
            // → cache.add = fetch + cache.put
            return cache.addAll([
                './',
                'getList',
                'img/avatar_v1.jpg',
                'js/index_v2.js',
                'js/jquery_v1.js'
            ]);
        })
    )
});

this.addEventListener('activate', function (event) {
    console.log('激活 sw.js，可以开始处理 fetch 请求。');

    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (CACHE_NAME.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }))
        })
    )
});

this.addEventListener('fetch', function (event) {
    //     再说 event.respondWith

    // 只能在 Service Worker 的 fetch 事件中使用；
    // 作用相当于一个 callback，当传入的 Promise resolved 之后，
    // 才会将对应的 response 返回给浏览器。
    // 总之，虽然 event.waitUntil 和 event.respondWith 中的 event 都是继承于 Event 类，
    // 但是它们与常见的 event 对象差异很大，
    // 这些方法也只有在 Service Worker 的那些对应的事件中才存在。
    event.respondWith(
        caches.match(event.request)
            .then(function (resp) {
                if (resp) {
                    console.log(new Date(), 'fetch ', event.request.url, '有缓存，从缓存中取');
                    return resp;
                } else {
                    console.log(new Date(), 'fetch ', event.request.url, '没有缓存，网络获取');
                    return fetch(event.request)
                        .then(function (response) {
                            return caches.open(CACHE_NAME).then(function (cache) {
                                cache.put(event.request, response.clone());
                                return response;
                            })
                        })
                }
            })
    )
});
console.log('end');

// 以前我们用强缓存的时候，如果资源需要更新，那么我们只需要改变资源的 URL，
// 换上新的 MD5 戳就好了。如果使用 Service Worker + CacheStorage + Fetch 做离线应用，
// 又该如何处理资源的更新呢？



