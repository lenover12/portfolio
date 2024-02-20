window.addEventListener('DOMContentLoaded', function() {
  const lucidchartContainer = document.querySelector('.lucidchart-container');
  const lucidchartFrame = document.getElementById('lucidchart-frame');

  function setSquareHeight() {
      const width = lucidchartContainer.offsetWidth;
      lucidchartContainer.style.height = width + 'px';
      lucidchartFrame.style.height = '100%';
  }

  setSquareHeight();

  window.addEventListener('resize', function() {
      setSquareHeight();
  });
});