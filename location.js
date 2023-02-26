function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log("Your current location is:");
  console.log("Latitude = " + latitude);
  console.log("Longitude = " + longitude);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert(
        "You have denied permission to access your location. Please grant permission to continue."
      );
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable. Please try again later.");
      break;
    case error.TIMEOUT:
      alert(
        "The request to get your location timed out. Please try again later."
      );
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred. Please try again later.");
      break;
  }
}
