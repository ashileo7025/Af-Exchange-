// Firebase config (Firebase console se mila hua)
const firebaseConfig = {
  apiKey: "AIzaSyAbuH_r-QjjCD3G5E_oHdVrpR5-0M21Pmo",
  authDomain: "af---exchange.firebaseapp.com",
  projectId: "af---exchange",
  storageBucket: "af---exchange.firebasestorage.app",
  messagingSenderId: "42976263940",
  appId: "1:42976263940:web:8742baa4943128dbfa1a51"
};

// Firebase initialize
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

