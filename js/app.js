const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const googleSignInBtn = document.getElementById('googleSignInBtn');
const errorMessage = document.getElementById('errorMessage');

// Sign In
signInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      errorMessage.innerText = error.message;
    });
});

// Sign Up
signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      errorMessage.innerText = error.message;
    });
});

// Sign In with Google
googleSignInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // Signed in with Google
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      errorMessage.innerText = error.message;
    });
});