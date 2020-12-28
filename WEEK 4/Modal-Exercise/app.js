$(() => {

/* Exercise Begin */
//Grabbing Elements
const $openBtn = $('#openModal');// Placeholds the id openModal to the event listener openBtn
const $modal = $('#modal');
const $closeBtn = $('#close');

//Event Handlers
const openModal = () => {
  $modal.css('display', 'block');//Changes the visibility of the div to visible
}

const closeModal = () => {
  $modal.css('display', 'none');//Changes the visibility of the div to none
}

//Event Listeners
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

/* Exercise End */

});
