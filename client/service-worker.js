const version = '1.0'
const cacheKey = `orders_${version}`

const cacheFirst = ['/api/orders']
const networkFirst = ['/api/ordertypes']

self.addEventListener('activate', function (event) {

    console.log(`Service Worker version: ${version} activated.`)    
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (new RegExp(`/^${cacheKey}*/`).test(cacheName)) {
                        console.info('Removing outdated cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log(event);
    event.respondWith(
        caches.open(cacheKey).then(cache => {
            let req = event.request;

            //network first
            return fetch(req).then (res => {
                let tocache = res.clone();
                cache.put(req, tocache);
                return res
            }).catch(err => {
                console.log(err)
                return caches.match(req);
            })

        })
    )
})


