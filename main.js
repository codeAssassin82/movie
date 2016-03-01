'use strict';



$(function(){
 $('#send').click(sendRequest);
});


function sendRequest() {
  $.get(`http://www.omdbapi.com/?t=${$('#userInput').val()}`)
  .done(function(data, error) {
    console.log(data, error);
    $("#root").append( $("<h2>").text(data.Title) );
    // $("#root").append( $("<h3>").text(data.Actors) );
    $("#root").append( $(".poster").attr('src', data.Poster) );
    console.log('success');
    if(data.Response == False)
      alert("Wrong Turn! Sorry Try Again!")
  });
}
