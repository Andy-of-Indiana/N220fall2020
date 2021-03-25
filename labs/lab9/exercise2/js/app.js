let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvStatement = document.getElementById("dvStatement");

function login() {
  let username = txtUsername.value;
  let password = txtPassword.value;

  if(username == "Username" && password == "Password") {
    dvStatement.innerHTML = "Success";
  }
  else {
    dvStatement.innerHTML = "Wrong information";
  }

}