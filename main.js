'use strict';

//

$(function(){
 $('#send').click(sendRequest);
});
//
// function nextPage() {
//   action !=== res
// }



function sendRequest() {
  $.get(`http://www.omdbapi.com/?s=${$('#userInput').val()}`)
  .done(function(data) {
    console.log(data.Search);
    var results = $('<div>');
    for (var i=0; i<data.Search.length; i++) {
      console.log(data.Search[i].alpha);
      results.append($("<h2>").text(data.Search[i].Title)).wrapInner($('<a>').attr('href', "http://www.imdb.com/title/tt0096895/"));
      results.append($('<img>').attr('src', data.Search[i].Poster));
      var search = 'http://www.imdb.com/title/';


    }

    $('#root').append(results);
    // $("#root").append( $("<h2>").text(data.Title) );
    // // $("#root").append( $("<h3>").text(data.Actors) );
    // $("#root").append( $(".poster").attr('src', data.Poster) );
    console.log('success');
    if(data.Response == False) {
      alert("Wrong Turn!")

    }
  });
}
