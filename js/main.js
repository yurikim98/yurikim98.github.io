"use strict"
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Registered', reg))
        .catch(err => console.error('error:', err));
} else {
    console.log(0);
}