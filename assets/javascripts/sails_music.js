(function(){

  //jQuery equivelent to window.onload = function{}
  $(function(){

    // ********************* EVENT LISTENERS ******************************** //

    // NOTE: CREATE - Operation to create a new artist
    $("#post").click(function(){
      addArtist();
      $('#dynamictable').empty();
    })

    // NOTE: READ (refreshes) the screen with sails music data
    $("#refresh").click(function(){
      $('#dynamictable').empty();
      getMusic();
    })

    // NOTE: UPDATE - operation to update a specific artist
    $("#put").click(function(){
      updateArtist();
      $('#dynamictable').empty();
    })

    // NOTE: DELETE - Tell me what you want what you really really want...
    $( "#dynamictable" ).delegate( "#nameclick", "click", function() {
      console.log($(this).text());
      if (confirm("Are you sure you want to delete this Artist?")) {
          deleteArtist( $(this).text() );
          $('#dynamictable').empty();
      }
    });

    // *************************** FUNCTIONS ******************************** //

    // NOTE: CREATE - This will create a new artist to the music project database
    // TODO: Add new artists through the UI table and pass them to this function
    function addArtist() {
      url = "http://localhost:1337/sails-music/"
      console.log(url);
      $.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify({
            first_name: "Generic",
            last_name: "Artist",
            description: "John Joseph Lydon (born 31 January 1956), also known by his former stage name Johnny Rotten, is an English singer, songwriter, and musician. He is best known as the lead singer of the late 1970s punk band the Sex Pistols, which lasted from 1975 until 1978, and again for various revivals during the 1990s and 2000s. He is also the lead singer of post-punk band Public Image Ltd (PiL), which he founded and fronted from 1978 until 1993, and again since 2009",
            dob: "January 31, 1956",
            dod: "",
            artist_wiki: "https://en.wikipedia.org/wiki/John_Lydon"
          }),
          contentType: "application/json"
        });
        console.log("posted?");
        $('#dynamictable').empty();
        getMusic();
      }

      // NOTE: READ - This will retrieve artists in the music project
      function getMusic() {
        $('#dynamictable').append('<table></table>');
        let table = $('#dynamictable').children();
        table.append("<tr><th>ID</th><th>Artist Name</th><th>Description</th></tr>");
        $.get("http://localhost:1337/sails-music", function( data ) {
          $.each(data, function(index, value) {
            table.append("<tr><td style='width:3%;text-align:center;'id='nameclick'><a href='#'>" + value.id + "</a></td><td style='width:10%;'>" + value.first_name + " " + value.last_name + "</td>" + "<td>" + value.description + "</td></tr>");
          }) // end each
        }); // end get
      } // end getMusic

      // NOTE: UPDATE - This updates a specific artist the music project database
      // TODO: Make changes through the UI table and pass them to this function
      function updateArtist() {
        id = 13;
        url = "http://localhost:1337/sails-music/" + id;
        console.log(url);
        $.ajax({
            url: url,
            type: 'PUT',
            data: JSON.stringify({
              first_name: "George",
              last_name: "Harrison",
              description: "George Harrison, MBE (25 February 1943 – 29 November 2001) was an English guitarist, singer, songwriter, and music and film producer who achieved international fame as the lead guitarist of the Beatles. Often referred to as the quiet Beatle, Harrison embraced Hinduism and helped broaden the horizons of his fellow Beatles as well as their Western audience by incorporating Indian instrumentation in their music.[5] Although most of the Beatles' songs were written by John Lennon and Paul McCartney, most Beatles albums from 1965 onwards contained at least two Harrison compositions. His songs for the group included Taxman, Within You Without You, While My Guitar Gently Weeps, Here Comes the Sun, and Something, the last of which became the Beatles' second-most covered song."
            }),
            contentType: "application/json"
          });
          console.log("Updated" + id);
          $('#dynamictable').empty();
          getMusic();
        }

      // NOTE: DELETE - This will remove the clicked entry obtained via the delegate global 'this'
      // TODO: This is currently performed via a linked delegate listener. Improve on this method.
      function deleteArtist(id) {
        url = "http://localhost:1337/sails-music/" + id;
        console.log(url);
        $.ajax({
            url: url,
            type: 'DELETE'
          });
          console.log("deleted!");
          $('#dynamictable').empty();
          getMusic();
      }

      // NOTE: style heading and body
      // TODO: Move into CSS stylesheet
      $("#body").css("background-color","lightgray");
      $("#body").css("font-size", "34");
      $("#page-heading").html("Sails Music DB");
      // style refresh and post buttons
      $("#refresh").css("font-size", "15px");
      $("#refresh").css("background-color", "black");
      $("#refresh").css("color", "white");
      $("#post").css("font-size", "15px");
      $("#post").css("background-color", "black");
      $("#post").css("color", "white");
      $("#put").css("font-size", "15px");
      $("#put").css("background-color", "black");
      $("#put").css("color", "white");

      // NOTE: Build our initial page table artists
      getMusic();

  }) // end page load
})(); // end script
