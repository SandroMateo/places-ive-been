function Trip(location, landmarks, year, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.year = year;
  this.notes = notes;
}

$(function() {
  var inputLandmarks = [];
  $("form").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("#location").val();
    inputLandmarks.push(" " + $("#landmarks").val());
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
  $("#plusLandmark").click(function () {
    inputLandmarks.push(" " + $("#landmarks").val());
    $("#landmarks").val("");
  });
  $("#reset").click(function(){
    inputLandmarks=[];
  })
});
