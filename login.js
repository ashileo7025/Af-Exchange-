import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updatePassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbuH_r-QjjCD3G5E_oHdVrpR5-0M21Pmo",
  authDomain: "af---exchange.firebaseapp.com",
  projectId: "af---exchange",
  storageBucket: "af---exchange.firebasestorage.app",
  messagingSenderId: "42976263940",
  appId: "1:42976263940:web:8742baa4943128dbfa1a51"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* LOGIN */
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = loginEmail.value;
  const pass = loginPassword.value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
});

/* REGISTER */
document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, regEmail.value, regPassword.value)
    .then(() => alert("Account Created"))
    .catch(err => alert(err.message));
});

/* LOGOUT */
window.logout = function () {
  signOut(auth).then(() => window.location.href = "index.html");
};

/* CHANGE PASSWORD */
window.changePass = function (newPass) {
  updatePassword(auth.currentUser, newPass)
    .then(() => alert("Password Updated"))
    .catch(err => alert(err.message));
};
