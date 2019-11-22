'use strict';

function getDogImage() {
  fetch("https://dog.ceo/api/breed/" + handleUserInput() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('A dog ate your homework. Try again!'));
}

function watchForm() {
 $("#formInput").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function handleUserInput() {
  let breed = $("#inputBreedId").val();
  return breed;
}



function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== 'success') {
    alert("We don't have that breed...yet");
  } else if (responseJson.status === 'success') {
    $("#results").replaceWith(
//      `<img src="${responseJson.message}" class="results">`
      '<div id="results" class="container">'
     + '<section class="results hidden">'
     +   '<h3>It\'s a dog!</h3>'
     + '<img src="'+responseJson.message+'" class="results">'
     + '  </section>'
     + '</div>'
    );
    $(".results").removeClass("hidden");
    console.log('Image replaced with '+responseJson.message);
  }
}

/* ambient code */

$('.hidden').hide();

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
