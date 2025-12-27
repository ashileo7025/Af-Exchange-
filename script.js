let requests = JSON.parse(localStorage.getItem("requests")) || [];

// USER SIDE
function buy(coin){
  alert("Buy order placed for " + coin); }

function sell(coin){
  alert("Sell order placed for " + coin); }

function deposit(){
  let amt = document.getElementById("depAmount").value;
  requests.push({type:"Deposit", amount:amt});
  save();
  alert("Deposit request sent");
}

function withdraw(){
  let amt = document.getElementById("wdAmount").value;
  requests.push({type:"Withdraw", amount:amt});
  save();
  alert("Withdraw request sent");
}

// ADMIN
function adminLogin(){
  let pass = document.getElementById("adminPass").value;
  if(pass === "admin123"){
    document.getElementById("panel").style.display="block";
    loadRequests();
  } else {
    alert("Wrong password");
  }
}

function loadRequests(){
  let ul = document.getElementById("requests");
  ul.innerHTML="";
  requests.forEach((r,i)=>{
    let li=document.createElement("li");
    li.innerHTML = `${r.type}: ${r.amount}
      <button onclick="approve(${i})">✔</button>
      <button onclick="reject(${i})">❌</button>`;
    ul.appendChild(li);
  });
}

function approve(i){
  alert("Approved: " + requests[i].type);
  requests.splice(i,1);
  save();
  loadRequests();
}

function reject(i){
  alert("Rejected: " + requests[i].type);
  requests.splice(i,1);
  save();
  loadRequests();
}

function save(){
  localStorage.setItem("requests", JSON.stringify(requests)); }
function adminLogin() {
  let pass = document.getElementById("adminPass").value;

  if (pass === "admin123") {
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

