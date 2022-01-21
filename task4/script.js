const linkChange = document.querySelector('#linkChange');


linkChange.addEventListener('click' , function (event) {
    this.textContent = prompt('Wride your text!');
    event.preventDefault();
})




