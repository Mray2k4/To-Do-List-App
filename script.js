const add = document.querySelector('#btn');
add.addEventListener('click', makeList)

function makeList(m) {
  m.preventDefault();
  const text = document.getElementById('order');
  const list = document.createElement('span');
  let inputText = document.getElementById('txt').value;
  let node = document.createTextNode(inputText);
  list.appendChild(node);
  text.appendChild(list);
}



/* CHANGING CODE */

/*
const input = document.querySelector('#txt');
const add = document.querySelector('#btn');
const list = document.querySelector('.list');
const close = document.querySelector('#delete');

add.addEventListener('click', function(m) {
      if(input.value != "") {
        m.preventDefault();
        const myList = document.createElement('li');
        const check = document.createElement('input');
        myList.setAttribute('id', 'myLi')
        check.setAttribute('type', 'checkbox');
        check.setAttribute('id', 'click');
        myList.innerHTML = input.value;
        list.appendChild(check);
        list.appendChild(myList);
        //document.getElementById('myLi').append(check);
    }

    let click = document.getElementById('click');
    click.addEventListener('change', myChange)
     function myChange() {
        let line = document.getElementById('ordered');
        if(click.checked) {
            const remove = document.createElement('button');
            remove.setAttribute('id', 'delete');
            remove.innerHTML = 'x';
            list.appendChild(remove);
            line.style.textDecoration = 'line-through';
        } else {
            line.style.textDecoration = 'none';
        }
    }
 input.value = "";
})
*/

    /* POSSIBLE DELETE

    let click = document.getElementById('click');
click.addEventListener('change', function() {
    let line = document.getElementById('ordered');
    const remove = document.createElement('button');
    remove.setAttribute('id', 'delete');
    remove.innerHTML = 'x';
    list.appendChild(remove);
    if(click.checked) {
       line.style.setProperty("text-decoration", "line-through");
    } else {
        line.removeEventListener(click);
    }
})
*/
   

    
