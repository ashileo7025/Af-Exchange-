import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.submitKYC = async ()=>{
  await addDoc(collection(db,"kyc"),{
    name: name.value,
    cnic: cnic.value,
    status:"pending"
  });
  alert("KYC Submitted");
};
