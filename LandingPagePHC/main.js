function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " container";
}

function Ambulance() {
  alert("Ambulance has been notified");
}

function PHC() {
  alert("nearest PHC Details: +91xxxxxxxxxx");
}

function Staff() {
  alert("PHC staffs have been notified");
}

function Submit() {
  alert("Details have been submitted");
}

var buildingList = [{
    "BuildingName": "Adler Journalism and Mass Communication Building",
        "BuildingNumber": "0456"
}, {
    "BuildingName": "Art Building",
        "BuildingNumber": "0021"
}];

var dropDown = document.getElementById('symptoms');

// iterate through the list
for (i = 0; i < buildingList.length; i++) {

    // create a new element
    var listItem = document.createElement("li");

    // set the value 
    listItem.innerHTML = '<a role="menuitem" href=' + buildingList[i].BuildingName + '>' + buildingList[i].BuildingName + '</a>'

    // append the item to the list
    dropDown.appendChild(listItem);
}
