firebase.initializeapp(config);
const auth = firebase.auth();

function signup(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWitheEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("signup")
}