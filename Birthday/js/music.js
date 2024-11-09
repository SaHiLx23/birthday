document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const volumeControl = document.getElementById('volume-control');

    // Play the music when the page loads
    audio.play();

    // Adjust volume based on the slider input
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });
});