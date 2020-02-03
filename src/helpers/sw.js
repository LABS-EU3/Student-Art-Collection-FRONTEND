export default function serviceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("../firebase-messaging-sw.js")
          .then(function() {
          })
          .catch(function() {
          });
      }
}