document.addEventListener('DOMContentLoaded', function() {
  const bookTextArea = document.getElementById('book-text');
  const outputElement = document.getElementById('book-text-output');

  bookTextArea.addEventListener('input', function() {
    let bookText = bookTextArea.value;

    bookText = bookText.replace(/\n/g, '\\\\n');

    const title = 'My Book';
    const color = 'black';
    const limitedText = bookText;

    const bookCommand = `/give @p written_book{pages:['{"text":"${limitedText}","color":"${color}"}'], title:"${title}", author:"MineDev"}`;
    
    outputElement.textContent = bookCommand;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const textareaContainer = document.querySelector('#book-styling .textarea-container');

  function updateHeight() {
      const width = textareaContainer.offsetWidth;
      const calculatedHeight = (460 / 320) * width;
      textareaContainer.style.paddingTop = `${calculatedHeight}px`;
  }

  window.addEventListener('resize', updateHeight);

  updateHeight();
});

window.addEventListener('resize', function() {
  adjustFontSize();
});

function adjustFontSize() {
  var container = document.getElementById('book-styling');
  var textarea = document.getElementById('book-text');

  var fontSize = Math.min(container.offsetWidth / 20, container.offsetHeight / 30) * 2; // Adjust the divisor as needed

  textarea.style.fontSize = fontSize + 'px';
}