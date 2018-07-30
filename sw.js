self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('ver1')
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/main.min.css',
                '/js/bundle.min.js',
                '/images/car.png',
                '/images/street-bg.jpg',
                '/images/street.jpg',
                '/images/taxi_PNG13.png'
            ]);
        })
        .catch(err => console.error(err))
    );
});
