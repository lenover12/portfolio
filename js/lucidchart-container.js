window.addEventListener('DOMContentLoaded', function() {
  const lucidchartContainer = document.querySelector('.lucidchart-container');
  const lucidchartFrame = document.getElementById('lucidchart-frame');
  const lucidchartFallbackImage = document.querySelector('.lucidchart-fallback-image');

  function setSquareHeight() {
      const width = lucidchartContainer.offsetWidth;
      lucidchartContainer.style.height = width + 'px';
      lucidchartFrame.style.height = '100%';
      lucidchartFallbackImage.style.width = '100%';
      lucidchartFallbackImage.style.height = '100%';
  }

  setSquareHeight();

  // Hide the iframe and show the fallback image if the iframe fails to load
  lucidchartFrame.addEventListener('error', function() {
      lucidchartFrame.style.display = 'none';
      lucidchartFallbackImage.style.display = 'block';
  });

  window.addEventListener('resize', function() {
      setSquareHeight();
  });
});
