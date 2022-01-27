const cyrcles = document.querySelectorAll('.Cyrcle');
let activeLight = 0;




function changeLight() {
    cyrcles[activeLight].className = 'Cyrcle';
    activeLight++;
    if(activeLight > 2) {
        activeLight = 0;
    }
    const targetLight = cyrcles[activeLight];
    targetLight.classList.add(targetLight.getAttribute('color'))
cyrcles[i].addEventListener('click',changeLight);
    
}

addEventListener('click', changeLight);