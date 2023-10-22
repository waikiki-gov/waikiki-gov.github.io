self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            const cache = await caches.open("WaikikiWebsiteCache");
            let response = await cache.match(e.request);
            if (!response) {
                response = await fetch(e.request);
                cache.put(e.request, response.clone());
            }
            return response;
        })());
});