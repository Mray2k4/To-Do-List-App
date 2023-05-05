const input = document.querySelector('#txt');
const add = document.querySelector('#btn');
const list = document.querySelector('.container ul');

add.addEventListener('click', function(m) {
    if(input.value != "") {
        m.preventDefault();
        const myList = document.createElement('li');
        myList.innerHTML = input.value;
        list.appendChild(myList);
    }
})