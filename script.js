const input = document.querySelector('#txt');
const add = document.querySelector('#btn');
const list = document.querySelector('.container ul');
const hide = document.querySelector('#delete');




add.addEventListener('click', function(m) {
      if(input.value != "") {
        m.preventDefault();
        const myList = document.createElement('li');
        const check = document.createElement('input')
        const remove = document.createElement('button');
        check.setAttribute('type', 'checkbox');
        remove.setAttribute('id', 'delete')
        myList.innerHTML = input.value;
        remove.innerHTML = 'x'
        list.appendChild(check);
        list.appendChild(myList);
        list.appendChild(remove);
        
    }

})
