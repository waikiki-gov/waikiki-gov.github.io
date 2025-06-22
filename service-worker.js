self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            const cache = await caches.open("WaikikiWebsiteCache");
            let response = await cache.match(e.request);
            if (!response) {
                try {
                    response = await fetch(e.request);
                    cache.put(e.request, response.clone());
                    console.log("Loaded from network: " + e.request.url);
                } catch (ex) {
                    console.log("Error during request: " + e.request.url);
                }
            }
            return response;
        })());
});