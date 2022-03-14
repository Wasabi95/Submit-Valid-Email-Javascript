function email() {
  var at = document.getElementById("email").value.indexOf("@");

  if (at == -1) {
    alert("Not a valid e-mail!");
  }
}
document.querySelector("form").addEventListener("submit", email);
