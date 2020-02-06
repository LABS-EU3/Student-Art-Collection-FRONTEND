export default function serviceWorker() {
    const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(!iOS) {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
              .register("../firebase-messaging-sw.js")
              .then(function() {
              })
              .catch(function() {
              });
          }
    }
}