let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    if (!isLampBroken()) {
        lamp.src = './img/quebrada.jpg';
    }
}

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

