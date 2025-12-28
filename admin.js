import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// 🔐 ADMIN EMAIL (sirf yeh admin hoga)
const ADMIN_EMAIL = "youradmin@gmail.com";

// AUTH CHECK
onAuthStateChanged(auth, user => {
  if (!user || user.email !== ADMIN_EMAIL) {
    alert("Admin access only");
    window.location.href = "index.html";
  } else {
    loadKYC();
    loadDeposit();
    loadWithdraw();
  }
});

// LOGOUT
window.logout = function(){
  signOut(auth).then(()=>window.location.href="index.html");
}

// LOAD KYC
async function loadKYC(){
  const snap = await getDocs(collection(db, "kyc"));
  let html = "";
  snap.forEach(d=>{
    let data = d.data();
    html += `
      <p>${data.email} - ${data.status}
      <button onclick="approve('kyc','${d.id}')">Approve</button>
      </p>`;
  });
  document.getElementById("kycList").innerHTML = html;
}

// LOAD DEPOSIT
async function loadDeposit(){
  const snap = await getDocs(collection(db, "deposits"));
  let html = "";
  snap.forEach(d=>{
    let data = d.data();
    html += `
      <p>${data.email} | ${data.amount} USDT | ${data.status}
      <button onclick="approve('deposits','${d.id}')">Approve</button>
      </p>`;
  });
  document.getElementById("depositList").innerHTML = html;
}

// LOAD WITHDRAW
async function loadWithdraw(){
  const snap = await getDocs(collection(db, "withdraws"));
  let html = "";
  snap.forEach(d=>{
    let data = d.data();
    html += `
      <p>${data.email} | ${data.amount} USDT | ${data.address}
      <button onclick="approve('withdraws','${d.id}')">Approve</button>
      </p>`;
  });
  document.getElementById("withdrawList").innerHTML = html;
}

// APPROVE
window.approve = async function(col, id){
  await updateDoc(doc(db, col, id), { status: "approved" });
  alert("Approved");
  location.reload();
}
