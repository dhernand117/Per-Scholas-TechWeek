//Simple JSON AJAX rendering
let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{ 
    //Declaring or variable to generate an XMLHttpRequest
    var ourRequest = new XMLHttpRequest ();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    //Setting what to do with our data request
    ourRequest.onload = () => {
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            //This will tell our program that we are working with a JSON file and to translate its objects to ourData
         const ourData = JSON.parse(ourRequest.responseText);
         renderHTML(ourData);
        }else{
            console.log("Server conection failed");
        }

};
ourRequest.onerror = () => {
console.log("Connection error");
};

ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide-me");
}
});

renderHTML = (data) => {
    let htmlString = "";
    //with regular for loop longhand
    // for (let i = 0 ; i < data.length; i++){
    //    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".";
    //  }
    //https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/
    //for loop shorthand + template literals
    for (let i in data) {
        htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes to eat `;
        //loop that will iterate inside the likes array
        for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
            if(ii == 0) {
                htmlString += data[i].foods.likes[ii];            
        }else{
            htmlString += ` and ${data[i].foods.likes[ii]}`;
        }
    }
        htmlString += ' and dislikes ';
        //loop that will iterate inside the dislikes array
        for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if(ii == 0) {
                htmlString += data[i].foods.dislikes[ii];            
        }else{
            htmlString += ` and ${data[i].foods.dislikes[ii]}`;
        }
    }
    //Closing p tag
         htmlString += '</p>'; 
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}

