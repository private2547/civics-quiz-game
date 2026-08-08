const CACHE_NAME = "civics-quiz-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./questions.js",
    "./manifest.json",
    "./logo.png",
    "./correct.mp3",
    "./wrong.mp3",
    "./finish.mp3"
];


// INSTALL
self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});


// ACTIVATE
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(cacheName => {

                    if (cacheName !== CACHE_NAME) {

                        return caches.delete(cacheName);

                    }

                })

            );

        })

    );

    self.clients.claim();
});


// FETCH
self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)
            .then(response => {

                const responseClone =
                    response.clone();

                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(
                            event.request,
                            responseClone
                        );
                    });

                return response;

            })
            .catch(() => {

                return caches.match(event.request);

            })

    );

});
