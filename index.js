function check() {
  if (!document.getElementById("subscribe-email").checkValidity()) {
    //do stuff here ie. show errors

    document.getElementById("error-state").style.visibility = "visible";
    document.getElementById("subscribe-email").style["border-color"] = "red";
  } else {
    document.getElementById("error-state").style.visibility = "hidden";
    document.getElementById("subscribe-email").style["border-color"] =
      "hsl(223, 100%, 88%)";
  }
}

function callMeIfValid() {
  //submit form or whatever
  alert("valid input");
}
