// Register service worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope:', registration.scope);
    }).catch(function(error) {
      console.error('ServiceWorker registration failed:', error);
    });
  });
}
