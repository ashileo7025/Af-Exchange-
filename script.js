let requests = JSON.parse(localStorage.getItem("requests")) || [];

function sendRequest(type){
  let amount = type==="Deposit"
    ? document.getElementById("depAmount").value
    : document.getElementById("withAmount").value;

  if(amount===""){ alert("Enter amount"); return; }

  requests.push({type,amount});
  localStorage.setItem("requests",JSON.stringify(requests));
  alert("Request sent to admin");
}

function adminLogin(){
  let pass=document.getElementById("adminPass").value;
  if(pass==="admin123"){
    document.getElementById("panel").style.display="block";
    loadRequests();
  } else {
    alert("Wrong password");
  }
}

function loadRequests(){
  let ul=document.getElementById("requests");
  ul.innerHTML="";
  requests.forEach((r,i)=>{
    let li=document.createElement("li");
    li.innerHTML=`${r.type}: ${r.amount}
    <button onclick="approve(${i})">✓</button>
    <button onclick="reject(${i})">✗</button>`;
    ul.appendChild(li);
  });
}

function approve(i){
  alert("Approved: "+requests[i].type);
  requests.splice(i,1);
  save();
}

function reject(i){
  alert("Rejected: "+requests[i].type);
  requests.splice(i,1);
  save();
}

function save(){
  localStorage.setItem("requests",JSON.stringify(requests));
  loadRequests();
}
