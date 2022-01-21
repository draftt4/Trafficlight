const trafficLightEL = document.querySelector('#trafficLight');

function makeGreen () {
    trafficLightEL.style.background = ('green');
    trafficLightEL.removeEventListener('click' ,makeGreen);
    trafficLightEL.addEventListener('click' ,makeYellow);
}
trafficLightEL.addEventListener('click',makeGreen);

function makeYellow () {
    trafficLightEL.style.background = ('yellow');
    trafficLightEL.removeEventListener('click' ,makeYellow);
    trafficLightEL.addEventListener('click' ,makeRed);
}
trafficLightEL.addEventListener('click',makeYellow);

function makeRed () {
    trafficLightEL.style.background = ('red');
    trafficLightEL.removeEventListener('click' ,makeRed);
    trafficLightEL.addEventListener('click' , makeGreen);
}
trafficLightEL.addEventListener('click',makeRed);

