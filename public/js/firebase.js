var appFireBase = {};
(function(){
   var config = {
       apiKey: "AIzaSyDVhHGHb6hXl3LvveyiAWp3DLzNIp7yp6I",
       authDomain: "scenic-pro2.firebaseapp.com",
       databaseURL: "https://scenic-pro2.firebaseio.com",
       projectId: "scenic-pro2",
       storageBucket: "",
       messagingSenderId: "755781268373",
       appId: "1:755781268373:web:ca9d87ccca610859"
     };

     firebase.initializeApp(config);

     appFireBase = firebase;
})()