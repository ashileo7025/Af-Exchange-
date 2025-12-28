import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbuH_r-QjjCD3G5E_oHdVrpR5-0M21Pmo",
  authDomain: "af---exchange.firebaseapp.com",
  projectId: "af---exchange",
  storageBucket: "af---exchange.firebasestorage.app",
  messagingSenderId: "42976263940",
  appId: "1:42976263940:web:8742baa4943128dbfa1a51"
};

initializeApp(firebaseConfig);
getAuth();

window.submitKYC = function () {
  const name = document.getElementById("fullName").value;
  const id = document.getElementById("idNumber").value;
  const img = document.getElementById("idImage").files[0];

  if (!name || !id || !img) {
    alert("Sab fields fill karo");
    return;
  }

  // DEMO MODE
  alert("KYC Submitted (Admin review pending)");
  window.location.href = "dashboard.html";
};
