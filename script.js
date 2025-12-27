// storage
let requests = JSON.parse(localStorage.getItem("requests")) || [];

// USER ACTIONS
function buy(coin){
  alert("Buy order placed for " + coin); }

function sell(coin){
  alert("Sell order placed for " + coin); }

function deposit(){
  let amt = document.getElementById("depAmount").value;
  requests.push("Deposit request: " + amt);
  save();
  alert("Deposit request sent");
}

function withdraw(){
  let amt = document.getElementById("wdAmount").value;
  requests.push("Withdraw request: " + amt);
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
  requests.forEach(r=>{
    let li=document.createElement("li");
    li.innerText=r;
    ul.appendChild(li);
  });
}

function save(){
  localStorage.setItem("requests", JSON.stringify(requests)); }

