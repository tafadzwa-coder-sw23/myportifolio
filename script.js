document.addEventListener('DOMContentLoaded', function() {
    // Education carousel logic
    const carousel = document.getElementById('educationCarousel');
    if (carousel) {
        const cards = Array.from(carousel.children);
        const cardHeight = cards[0].offsetHeight + parseInt(getComputedStyle(cards[0]).marginBottom);
        let index = 0;

        setInterval(() => {
            index++;
            if (index > cards.length - 3) {
                index = 0;
            }
            carousel.style.transform = `translateY(-${index * cardHeight}px)`;
        }, 6000);
    }
});
