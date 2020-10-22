var email;
var pass;
var error_message;
var text;

function users() {

  let user = {
    "name":["John Smith","Kathy Green", "Rebecca White"],
    "email":["smithjohn@gmail.com","kathy_green@ymail.com","whiteReb826@gmail.com"],
    "pass":[ "puppylove123", "kittenyarn456", "hamsterfoe789"]
    };

  var info = JSON.stringify(user);

  return info;

}

function accountValidate(){
  var email = document.getElementById("emailLogin").value;
  var pass = document.getElementById("passLogin").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter a Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(pass.length < 5){
    text = "Please Enter a Password";
    error_message.innerHTML = text;
    return false;
  }
  
    var accountInfo = JSON.parse(account);

  for(i = 0, k = accountInfo.name.length; i < k; i++ ) {
    if (email == accountInfo.email[i] && pass == accountInfo.pass[i]){
      var userName = accountInfo.name[i];
      alert ( userName + " you have successfully logged into your account");
      return true;
    }
  }

  alert("No user found");

  text = "Please try Again";
  error_message.innerHTML = text;

  return false;
}

function showPass() {
  var x = document.getElementById("passLogin");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
