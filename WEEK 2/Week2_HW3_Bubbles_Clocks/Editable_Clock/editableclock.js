// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);
// variables to delimit the start, minutes and seconds
var startTime;
var limitMin;
var limitSec;
var temp;

function documentLoaded() {
	"use strict";

	// listen for mouse clicks on the button
	document.getElementById("clock").addEventListener("click", clicked);

	console.log("Are you ok buddy??");
}
function clicked(evt) {
  "use strict";
	// get the <input> and check if it is hidden
	var input1 = this.querySelector("#txtMin");
  var input2 = this.querySelector("#txtSec");
	var label = this.querySelector("div");

  startTime = new Date();
  input1.addEventListener("keydown", function keydown(evt) {
    // 13 is the code for ENTER
    if (evt.keyCode === 13) {
      limitMin = parseInt(input1.value);

      input2.focus();
    }

  });
  input2.addEventListener("keydown", function keydown(evt) {
			// 13 is the code for ENTER
			if (evt.keyCode === 13) {
        limitSec = parseInt(input2.value);
				label.innerHTML = input2.value;
				label.classList.remove("hide");
				input1.classList.add("hide");

        clearInterval(temp);
        temp = setInterval(updateTime, 1000);
			}
		});
	}

  function updateTime() {
  	"use strict";
  	// read the current time
  	var currentTime = new Date();
  	// calculate how many seconds passed since the start of the timer
  	var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
  	// convert seconds to minutes and seconds (below 60)
  	var minutes = Math.floor(elapsed / 60);
  	var seconds = Math.floor(elapsed % 60);
  	// pad with zeroes on the left to look better
  	if (minutes < 10) {
  		minutes = "0" + minutes;
  	}
  	if (seconds < 10) {
  		seconds = "0" + seconds;
  	}
  	// show the elapsed time
  	document.getElementById("clock").innerHTML = minutes + ":" + seconds;
  	// check if we are above the time limit and set the color of the timer accordingly
  	if (minutes == limitMin && seconds >= limitSec) {
  		document.getElementById("clock").className = "red";
  	} else {
  		document.getElementById("clock").className = "blue";
  	}

  }
