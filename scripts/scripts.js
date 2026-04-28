function on() {
    // display overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    // turn off vertical scroll
    document.body.style.overflow = "hidden";
}

function off() {
    // hide overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    // restore scroll
    document.body.style.overflow = "";
}