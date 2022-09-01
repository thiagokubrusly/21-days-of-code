let pressed = document.getElementById('pressed');

function keyPressed(evt){
    evt = evt || window.event;
    let key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeyup = function(evt) {
    let str = keyPressed(evt);
    pressed.innerHTML += str;
    console.log(keyPressed)
};

