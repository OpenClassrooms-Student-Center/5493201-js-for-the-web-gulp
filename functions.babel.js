'use strict';

var newsLetterButton = document.getElementById('newsletter-button');
var newsLetterSection = document.getElementById('newsletter-section');
var newsLetterEmail = document.getElementById('newsletter-email');

var sentEmail = false;

newsLetterButton.addEventListener('click', function () {
  var newParagraph = document.createElement('p');
  if (sentEmail) {
    return;
  }
  var findAlert = document.getElementById('alert');
  if (findAlert) {
    findAlert.parentElement.removeChild(findAlert);
  }
  if (!newsLetterEmail.value) {
    newParagraph.textContent = 'Please enter something!';
    newParagraph.classList.add('alert-danger', 'w-100', 'p-2');
    newParagraph.setAttribute('id', 'alert');
    newsLetterSection.appendChild(newParagraph);
    return;
  }
  newParagraph.textContent = 'E-mail address successfully submitted!';
  newParagraph.classList.add('alert-success', 'w-100', 'p-2');
  newsLetterSection.appendChild(newParagraph);
  newsLetterSection.children[0].children[0].removeChild(newsLetterEmail);
  newsLetterSection.children[0].children[0].removeChild(newsLetterButton);
  sentEmail = true;
});
