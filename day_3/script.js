    /* Access image by id and change
    the display property to block*/
    function show() {
        document.getElementById('spaceship-img').style.display = "block";
        document.getElementById('btnID').style.display = "none";
    }

    function hide() {
        document.getElementById('spaceship-img').style.display = "none";
        document.getElementById('btnID').style.display = "block";
    }