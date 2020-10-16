function accountValidate(){
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
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
  var jsonObject = {
    "email": "johnsmith@gmail.com",
    "pass": "doglover123"
  };

  const obj = JSON.parse(jsonObject);
  error_message.innerHTML = obj;
  return false;


  alert("Created Account Successfully!");

  return true;
}

