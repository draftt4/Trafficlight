/*document.querySelector('#text-add').onkeypress = function (event) {
if (event.key == 'Enter') {
       let a = document.querySelector('#text-add').value
       document.querySelector('#duplicateField').textContent = a

    }
}*/

document.querySelector('#text-add').addEventListener('keypress' , event =>{
    if (event.key == 'Enter') {
        let a = document.querySelector('#text-add').value
       document.querySelector('#duplicateField').textContent = a
    }
})


document.querySelector('button').addEventListener('click' , event => {
    event.preventDefault();

    let x = document.querySelector('#text-add').value;
    console.log(textContent = x);

})

document.querySelector('button').addEventListener('click' , event => {

    let x = document.querySelector('#text-add').value = '';
    let m = document.querySelector('#duplicateField').value = '';

})

    


