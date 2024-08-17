document.addEventListener('DOMContentLoaded', function() {
    const searchTab = document.querySelector('.searchTab');
    const searchInput = document.querySelector('.search-input');
    const heroImage = document.getElementById('hero-image');
    const heroVideo = document.getElementById('hero-video');

    // Ensure the elements exist
    function handleHeroImageEvent(event) {
        if (event.type === 'mouseenter') {
            heroVideo.play();
        } else {
            heroVideo.pause();
            heroVideo.currentTime = 0;
            console.log(heroVideo.canPlayType('video/mp4')); // Check if the browser supports MP4 // Reset video to beginning
        }
    }

    searchTab.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        searchInput.classList.toggle('hidden');
        if (!searchInput.classList.contains('hidden')) {
            searchInput.focus();
        }
    });
});