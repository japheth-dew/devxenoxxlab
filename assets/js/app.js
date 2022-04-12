var config = {
  apiKey: 'AIzaSyCdQc36hzKdD3L_uFF283e9ofMGF2QfUyA',
  authDomain: 'peakstudio-4b4de.firebaseapp.com',
  databaseURL: 'https://peakstudio-4b4de-default-rtdb.firebaseio.com',
  storageBucket: 'peakstudio-4b4de.appspot.com',
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

async function addData(name, email, msg) {
  var firebaseRef = await firebase.database().ref().child('Requests').push();
  await firebaseRef.child('Message').set(msg);
  await firebaseRef.child('Email').set(email);
  await firebaseRef.child('User Name').set(name);
}

$('.btnSubmit').click(async () => {
  let uName = $('.useName').val();
  let uEmail = $('.email').val();
  let uMsg = $('.msg').val();
  await addData(uName, uEmail, uMsg).then(async () => {
    $('.useName').val('');
    $('.email').val('');
    $('.msg').val('');
    alert('Your request has been successfully submited!');
  });
});
