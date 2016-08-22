function Trip(location, landmarks, year, notes) {
  this.location = location;
  this.landmarks = [landmarks];
  this.year = year;
  this.notes = [notes];
}

Trip.prototype.addLandmark = function(landmark){
  this.landmarks.push(landmark);
}

Trip.prototype.addNotes = function(note){
  this.notes.push(note);
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("#location").val();
    var inputLandmarks = $("#landmarks").val();
    var inputYear = $("#year").val();
    var inputNotes = $("#notes").val();

    var Places = new Trip(inputLocation,inputLandmarks,inputYear,inputNotes);

    $("#list").append("<li><span class='area'>" + Places.location + "</span></li>");

    $(".area").last().click(function() {
      $(".year").text(Places.year);
      $(".landmarks").text(Places.landmarks);
      $(".notes").text(Places.notes);
      $("#show-output h2").text(Places.location);
      $(".location").text(Places.location);
      $("#show-output").show();
    });
  });
});
