document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        var accordionElements = document.querySelectorAll('.accordion .card');

        accordionElements.forEach(function(card) {
            var cardHeader = card.querySelector('.card-header');
            var collapseId = cardHeader.getAttribute('id').replace('heading', 'collapse');
            var collapseElement = document.getElementById(collapseId);

            cardHeader.addEventListener('click', function() {
                if (!collapseElement.classList.contains('show')) {
                    setTimeout(function() {
                        var scrollOffset = -75;
                        var cardPosition = card.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({ top: cardPosition + scrollOffset, behavior: 'smooth' });
                    }, 300);
                }
            });
        });
    }
});
