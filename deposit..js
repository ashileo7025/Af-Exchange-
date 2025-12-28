import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.deposit = async ()=>{
  await addDoc(collection(db,"deposits"),{
    amount: amount.value,
    status:"pending"
  });
  alert("Deposit pending approval");
};
