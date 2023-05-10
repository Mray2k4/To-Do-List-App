const input = document.querySelector('#txt');
const add = document.querySelector('#btn');
const list = document.querySelector('.list');
const close = document.querySelector('#delete');

add.addEventListener('click', function(m) {
      if(input.value != "") {
        m.preventDefault();
        const myList = document.createElement('li');
        const check = document.createElement('input');
        const remove = document.createElement('button');
        check.setAttribute('type', 'checkbox');
        check.setAttribute('id', 'click');
        remove.setAttribute('id', 'delete');
        myList.innerHTML = input.value;
        remove.innerHTML = 'x'
        list.appendChild(check);
        list.appendChild(myList);
        list.appendChild(remove);
    }

    let click = document.getElementById('click');
click.addEventListener('change', function() {
    let line = document.getElementById('reg');
    if(click.checked) {
       line.removeAttribute('disabled');
    } else {
        line.setAttribute('disabled', 'disabled');
    }
})
    
    input.value = "";
})


