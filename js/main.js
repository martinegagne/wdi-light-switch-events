document.addEventListener('DOMContentLoaded', function() {

  var lightswitch = document.querySelector("button.switch.on");
  var h1 = document.querySelector("h1.status");
  var body = document.querySelector('body');

  document.addEventListener('click', function(e) {
   if (lightswitch.className === "switch on") {
     lightswitch.className === "switch off";
     body.className = "dark";
     h1.innerText = "Hey, who turned off the lights?";
   } else if (lightswitch.className === "switch off") {
     lightswitch.className === "switch on";
     body.className = "light";
     h1.innerText = "It's so bright in here!";
    }
  });
  });
