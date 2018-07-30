self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('ver1')
        .then(cache => {
            return cache.addAll([
                '/sw-test/',
                '/sw-test/index.html',
                '/sw-test/css/style.css',
                '/sw-test/js/main.js',
                '/sw-test/nature.jpg'
            ]);
        })
        .catch(err => console.error(err))
    );

});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});