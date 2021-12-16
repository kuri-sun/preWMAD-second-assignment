'use strict';
{
    // API observer
    
    const target = document.querySelector('.second4');
    const slash = document.querySelector('.slash');
    const slash2 = document.querySelector('.slash2');
    
    function callback(entries, obs) {
        console.log('fire');
        if(!entries[0].isIntersecting) {
            return;
        }
        entries[0].target.classList.add('appear');
        obs.unobserve(entries[0].target);
    }
    
    const options = {
        threshold: 1,
    };
    
    const observer = new IntersectionObserver(callback, options);
    
    observer.observe(target);
    observer.observe(slash);
    observer.observe(slash2);
    


    // form this window animation
    const title = document.querySelector('.title');
    const circle = document.querySelector('.circle');
    
    window.addEventListener('load', () => {
        title.classList.add('gettitle');
        
        function blinkIn () {
            console.log('i');
            circle.classList.toggle('getcolor');
            setTimeout(blinkIn,1000);
        }

        blinkIn();
    });


    // humburgur menu

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const closemark = document.querySelector('.closemark');
    const menu = document.getElementById('menu');
    const humburgers = document.querySelectorAll('.humburger > li > a');

    open.addEventListener('click', () => {
        close.classList.add('show');
        menu.classList.add('hidden');
    });

    closemark.addEventListener('click', () => {
        close.classList.remove('show');
        menu.classList.remove('hidden');
    });

    humburgers.forEach(humburger => {
        humburger.addEventListener('click', () => {
            close.classList.remove('show');
            menu.classList.remove('hidden');
        })
    })


}