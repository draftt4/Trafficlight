document.querySelector('#text-add').onkeypress = function (event) {
if (event.key == 'Enter') {
       let a = document.querySelector('#text-add').value
       document.querySelector('#duplicateField').textContent = a

    }
}


document.querySelector('button').onclick = resetBtn

function resetBtn () {

    let x = document.querySelector('#text-add').value;
    console.log(textContent = x);
    
}

