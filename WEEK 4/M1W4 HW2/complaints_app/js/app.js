//--------------------MINIMUM VIABLE PRODUCT------------------------
//Users should be able to see five buttons for the five boroughs (manhattan, brooklyn, queens, staten island, bronx) of New York City when they load the page
//Users should also be able to see an input box where they can put in a number of how many complaints they want to see
//When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according to the number they input AND the borough they clicked on
//If the user doesn't input any number, make the default be 10
//Remember, also, they only want complaints that were handled by the NYPD! (hint: consider filtering for a specific "agency" when making the API call)
//When the list of complaints is shown, each complaint should also have a button on it that reads something along the lines of "toggle police response"
//When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that particular complaint
//Make sure it only toggles the response for that one complaint, not the entire list!

$(() => {
  //This is creating an event inside our form that on click will return the user input declared below
  $('button').on('click', (event) => {
    //This will prevent the data reset on every request
    event.preventDefault();
    //This will print the input of the button to the console to make sure it is working
    console.log(event.target);
    //This will select the user input acording to the button on the html
    const userInput = $(event.target).val();
    //Declaring the value of our second input to be numbers
    var numComplaints = $('input')[0].value;
    //Setting the default value of returned values to 10
    if (numComplaints<1) {
      numComplaints = 10;
    }
    //API call and filtering the data by the NYPD agency and then by the user input
    $.ajax({
      url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + userInput,
      data: {
        '$limit': numComplaints,
        agency: 'NYPD',
      }
    }).then(
      (data) => {
        //Pulling the data and displaying it in our console to make sure it's working
        console.log(data);
        //Looping in data to print the desired information in a list
        for (var i = 0; i < data.length; i++) {
          //Printing data.descriptor in a list
          let entry = $('<li id="crimes" class="list">');
          entry.text(`${data[i].borough}'>>>>>>>'${data[i].descriptor}`);//Information will be displayed on this format to the HTML
          let button = $('<button id="pop" class="list">');
          button.text('Resolution');
          let response = $('<span id="resolution">');
          //This will hide the info until the button is clicked
          response.text(`${data[i].resolution_description}`).hide();
          button.click(() => {
            //This will toggle the visibility of the data on click
            response.toggle()
          });
          entry.append(button);
          entry.append(response);
          $("#myData").append(entry);
        }
      },
      () => {
      console.log('I guess ¯\_(ツ)_/¯')}
    )
  });
});
