<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbuH_r-QjjCD3G5E_oHdVrpR5-0M21Pmo",
  authDomain: "af---exchange.firebaseapp.com",
  projectId: "af---exchange",
  storageBucket: "af---exchange.firebasestorage.app",
  messagingSenderId: "42976263940",
  appId: "1:42976263940:web:8742baa4943128dbfa1a51"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
