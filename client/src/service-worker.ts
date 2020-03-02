const version: string = '1.0'
const cacheKey: string = `orders_${version}`

const cacheFirst: string[] = ['/api/orders']
const networkFirst: string[] = ['/api/ordertypes']

self.addEventListener('activate', function (event: ExtendableEvent) {

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
    return {}
});

self.addEventListener('fetch', function (event: FetchEvent) {
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
                return <Promise<Response>>caches.match(req);
            })

        })
    )
})


