import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.withdraw = async ()=>{
  await addDoc(collection(db,"withdraws"),{
    status:"pending"
  });
  alert("Withdraw request sent");
};
