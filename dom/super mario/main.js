var path = document.querySelector('.path');
var mario = document.querySelector('.mario');
var body = document.body;
var x = 0;
var moveBg;
var jump;
var position = 80;


window.addEventListener('keydown', function (e) {
    
    if(e.key == 'ArrowRight') {
        if(mario.getAttribute('src') === './assets/mario.png') {
            mario.removeAttribute('src');
            mario.setAttribute('src', './assets/mario_running.gif');
            mario.style.transform = 'scaleX(+1)';
            moveBg = setInterval(function() {
                
                x-=1;
                path.style.backgroundPosition = x +'px bottom';
                
            },1)
            
        }
        
        
    }
    if(e.key == 'ArrowLeft') {
        if(mario.getAttribute('src') === './assets/mario.png') {
            mario.removeAttribute('src');
            mario.setAttribute('src', './assets/mario_running.gif');
            mario.style.transform = 'scaleX(-1)';
            moveBg = setInterval(function() {
                
                x+=1;
                path.style.backgroundPosition = x +'px bottom';
                
            },1) 
        }
    }


    if(e.key == ' ') {

        mario.style.bottom = position + 120 + 'px';
        jump = setTimeout( function() {
            mario.style.bottom = position + 'px';
        },800)

    }



})

window.addEventListener('keyup', function (e) {
    
    if(e.key == 'ArrowRight') {
        mario.removeAttribute('src');
        mario.setAttribute('src', './assets/mario.png');
        clearInterval(moveBg);
    }
    if(e.key == 'ArrowLeft') {
        mario.removeAttribute('src');
        mario.setAttribute('src', './assets/mario.png');
        clearInterval(moveBg);
    }


})