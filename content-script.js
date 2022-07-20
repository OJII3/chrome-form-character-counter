'use strict';

const countWords = () => {
  const textareas = document.querySelectorAll('.geS5n textarea.KHxj8b, .geS5n input.whsOnd');
  let counts = document.querySelectorAll('.geS5n .word-counter');
  if (counts[0]) {
    for (let i = 0; i < textareas.length; i++) {
      counts[i].innerHTML = ` ${textareas[i].value.replace(/\s/g, '').length}文字`;
    }
  } else {

    for (let i = 0; i < textareas.length; i++) {
      const countDisplay = textareas[i].closest('.geS5n').querySelector('.HoXoMd');
      const count = document.createElement('span'); 
      count.className = 'word-counter';
      count.style.color = '#00f';
      count.innerHTML = ` ${textareas[i].value.replace(/\s/g, '').length}文字`;
      countDisplay.appendChild(count);
    }
  }
};

window.addEventListener('load', () => countWords(), false);
window.addEventListener('input', () => countWords());
