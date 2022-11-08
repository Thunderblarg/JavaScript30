ready(()=>{
    window.addEventListener('keydown', e => {
        console.log("blerp");
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        const key = document.querySelector(`.key[data-key="${e.code}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    });

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});

function playSound(e){

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

//document.addEventListener(DOMContentLoaded, () => {
    
//});


    //{
    //console.log("we're in the event listener");
    /*

    */
//});

//function foo(e){};

