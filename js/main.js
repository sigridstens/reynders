var input = document.querySelectorAll('input');
for(i=0; i<input.length; i++){
  if (input[i].getAttribute("placeholder") !== null) {
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
  }
}

var navButton = document.querySelector('.nav-icon');
var modalNav = document.querySelector('.modal-nav');

navButton.addEventListener('click', function() {
  console.log('open sesame!!!');

  if (modalNav !== null) {
    modalNav.style.display = "flex";
  }

});

var closeButton = document.querySelector('.close-icon');

closeButton.addEventListener('click', function() {
  console.log('close it!');
  
  if (modalNav !== null) {
    modalNav.style.display = "none";
  }

});

