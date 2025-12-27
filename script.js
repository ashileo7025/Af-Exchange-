// ================================
//  AF CRYPTO EXCHANGE 
// ================================

// Demo requests (auto load)
let requests = JSON.parse(localStorage.getItem("requests")) || [
  { type: "Deposit", amount: "100 USDT" },
  { type: "Withdraw", amount: "50 USDT" } ];

// ================================
// ADMIN LOGIN
// ================================
function adminLogin() {
  let pass = document.getElementById("adminPass").value;

  if (pass === "admin123") {
    document.getElementById("panel").style.display = "block";
    loadRequests();
  } else {
    alert("Wrong password");
  }
}

// ================================
// LOAD REQUESTS
// ================================
function loadRequests() {
  let ul = document.getElementById("requests");
  ul.innerHTML = "";

  requests.forEach((r, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${r.type} : ${r.amount}
      <button onclick="approve(${i})">✔ Approve</button>
      <button onclick="reject(${i})">✖ Reject</button>
    `;
    ul.appendChild(li);
  });
}

// ================================
// APPROVE REQUEST
// ================================
function approve(i) {
  alert("Approved: " + requests[i].type);
  requests.splice(i, 1);
  save();
  loadRequests();
}

// ================================
// REJECT REQUEST
// ================================
function reject(i) {
  alert("Rejected: " + requests[i].type);
  requests.splice(i, 1);
  save();
  loadRequests();
}

// ================================
// SAVE DATA
// ================================
function save() {
  localStorage.setItem("requests", JSON.stringify(requests)); }
