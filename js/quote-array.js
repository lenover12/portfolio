document.addEventListener("DOMContentLoaded", function() {
  var jul_quotes = [
      "\"If Leo didn’t help me put use by dates on the bread, I would have lost my job by incompetence\"",
      "\"I asked Leo to work a 5am shift for me, he said no, but I know he wanted to say yes\"",
      "\"If only I could hire Leo right now, I would triple my profits\"",
      "\"Leo once made a life size cutout of himself as a gift for my birthday…\"",
  ];

  var currentTime = new Date().getTime();
  var randomIndex = Math.abs(currentTime % jul_quotes.length);
  let testimonialContainer = document.getElementById("jul_testimonial");
  if (testimonialContainer) {
      testimonialContainer.querySelector('p').textContent = jul_quotes[randomIndex];
  }
});