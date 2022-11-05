window.addEventListener('keydown', e => {
    console.log("we're in the event listener");
    const audio = document.querySelector(`audio[data-key="${e.Code}]`);
    const key = document.querySelector(`.key[data-key="${e.Code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}