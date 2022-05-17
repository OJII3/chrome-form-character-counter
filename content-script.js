const countWords = () => {
  const textareas = document.querySelectorAll('.geS5n textarea.KHxj8b, .geS5n input.whsOnd');
  const countDisplaySpaces = document.querySelectorAll('.geS5n .G4EHhc');
  let counts = document.querySelectorAll('.geS5n .word-counter');
  if (counts[0]) {
    for (let i = 0; i < textareas.length; i++) {
      counts[i].innerHTML = `${textareas[i].value.replace(/\s/g,'').length} words`;
      counts[i].innerHTML = counts[i].innerHTML === '0 words' ? '0 word' : counts[i].innerHTML;
    }
  } else {
    for (let i = 0; i < textareas.length; i++) {
      const count = document.createElement('span');
      count.className = 'word-counter';
      count.style.color = '#00f';
      count.innerHTML = `${textareas[i].value.replace(/\s/g,'').length} words`;
      count.innerHTML = count.innerHTML === '0 words' ? '0 word' : count.innerHTML;
      countDisplaySpaces[i].appendChild(count);
    }
  }
};

window.onload = countWords();
window.addEventListener('input', () => countWords());
