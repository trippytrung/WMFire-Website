function myMap() {
  
    var mapProp= {
      center:new google.maps.LatLng(38.3032,-77.4605),
      zoom:7,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
    function longLatText(lat, lng, text) {
      const marker = new google.maps.Marker({
        position:new google.maps.LatLng(lat,lng),
        //animation:google.maps.Animation.BOUNCE
      });
      marker.setMap(map);
  
  
      const infowindow = new google.maps.InfoWindow({
        content:text
      });
      marker.addListener('mouseover', function() {
        infowindow.open(map, this);
      });
      // assuming you also want to hide the infowindow when user mouses-out
      marker.addListener('mouseout', function() {
        infowindow.close();
      });
    }
  
    listofplaces = [
      [37.27,-76.7075,"Reeves Center"],
      [37.2697222,-76.7080556,'Center of Student Diversity'],
      [37.2712,-76.7151,'Counseling at the Wellness Center'],
      [37.2648,-76.7052,'W&M Law School Immigration Clinic'],
      [38.039133,-78.491624,'Legal Aid Justice Center'],
      [38.901887,-77.044502,"Ayuda"],
      [38.902110, -77.037520,"Capital Immigrant's Rights Coalition (CAIR)"],
      [38.872750, -77.161230,"Tahirih Justice Center "],
      [38.872690,-77.083400,"Edu-futuro"]
    ]
  
    for (let i = 0; i < listofplaces.length; i++) {
      longLatText(...listofplaces[i]);
    }
  }