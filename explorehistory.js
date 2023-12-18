var acceptButton = document.querySelector(".accept-btn");
var terminput = document.querySelector('input[name="termservice"]');
var Date = new Date();
var day = Date.getDate();
var month =Date.getMonth()+1; 
day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;
document.querySelector(".today").innerText = "Today: "+month+"/"+day+"/"+Date.getFullYear();
terminput.addEventListener('change', function(e) {
if (terminput.checked === true){
  document.querySelector(".accept-btn").disabled = false;
} else {
  document.querySelector(".accept-btn").disabled = true;
}
});