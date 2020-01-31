importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

console.log(process.env.REACT_APP_FIREBASE_API);
const firebaseConfig = {
    apiKey: "AIzaSyBGRG_s_iXodcT_ixaqzyuoL5rj51j5Nm4",
    authDomain: "artfunder.firebaseapp.com",
    databaseURL: "https://artfunder.firebaseio.com",
    projectId: "artfunder",
    storageBucket: "artfunder.appspot.com",
    messagingSenderId: "128794234534",
    appId: "1:128794234534:web:942a0396d593cd4c2f2e67",
    measurementId: "G-B01FWLH87V"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function(event) {
    // do what you want
    // ...
    console.log(event, 'from service worker')
    alert('hellooo')
  });