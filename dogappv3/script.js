'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('A dog ate your homework. Try again!'));
}

function watchForm() {
  $("#formNumberOfDogsId").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.dog-img').replaceWith(
    `<img src="${responseJson.message}" class="dog-img">`
  )
  //display the results section
  $('.results').show()
}

$('.hidden').hide()
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});