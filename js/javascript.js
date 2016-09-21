//function for getting the user input for how many projects the client wants to get shown
//interactive part of the website and is on the projects page
function proj() {
  var x = document.getElementById("projects1").value;
  var y = x - 1;
    var output = " ";
  var projects1 = ["Projects: <br /> ",
    "Drone; <br />",
    "LED cube; <br />",
    "Arduino lights; <br />",
    "Raspberry Pi toor router    ; <br />"];
  while (y >= 0) {
output = document.getElementById("projPrint").innerHTML = projects1[y] + output;
        y--;
  }    
}


//function for getting todays date and showing in in homescreen and events page
function GetClock(){
  d = new Date();
  nmonth = d.getMonth();
  ndate  = d.getDate();
  nyear = d.getYear();
  if(nyear<1000) nyear=nyear+1900;


  document.getElementById('clockbox').innerHTML=""+(nmonth+1)+"-"+ndate+"-"+nyear+"";
  setTimeout("GetClock()", 1000);
  }
  window.onload=GetClock;



//function to make sure information is filled in by user for events page
function validatePerson() {                          
     if( document.frmMail.name.value == ""){
        alert("Name must be filled out");
        return false;
    }else
     if( document.frmMail.mail.value==""){
   
        alert("Email must be filled out");
        return false;
    }
    return true;
}

//part of google maps api
function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 42.6870002, lng: -73.7562}
        });
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

      }








