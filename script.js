const inputText = document.querySelector('#txt');
const button = document.querySelector('.btn');
const list = document.querySelector('.list ul');

button.addEventListener('click', (m) => {
  if(inputText.value != ""){
    m.preventDefault();
    
    const myList = document.createElement('li');
    myList.innerHTML = inputText.value;
    list.appendChild(myList);
    
    const span = document.createElement('span');
    span.innerHTML = 'x';
    myList.appendChild(span);
  }
  
  const remove = document.querySelectorAll('span');
  for(let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function() {
      remove[i].parentElement.style.display = "none";
    })
  }
  inputText.value = "";
});
/* CODE ON HOLD */
/*
const text = document.getElementById('order');
const addItems = document.querySelector('#btn');

addItems.addEventListener('click', makeList)

function makeList(m) {
  m.preventDefault();
  //const text = document.getElementById('order');
  const check = document.createElement('input')
  const list = document.createElement('span');
  const br = document.createElement('br');
  list.setAttribute('id', 'span')
  check.setAttribute('type', 'checkbox');
  check.setAttribute('id', 'click');
  let inputText = document.getElementById('txt').value;
  let node = document.createTextNode(inputText);
  text.appendChild(check);
  list.appendChild(node);
  text.appendChild(list);
  text.appendChild(br);
// }

  let click = document.getElementById('click');
    click.addEventListener('change', myChange)
     
  function myChange() {
        let line = document.getElementById('order');
        let items = document.getElementById('span');
        if(click.checked == true) {
          //const myList = document.getElementById('span');
        //const check = document.createElement('input');
        //myList.setAttribute('id', 'myLi')
        //check.setAttribute('type', 'checkbox');
       // check.setAttribute('id', 'click');
        //myList.innerHTML = line.value;
       // list.appendChild(check);
        //list.appendChild(myList);
            //const remove = document.createElement('button');
            //remove.setAttribute('id', 'delete');
            //remove.innerHTML = 'x';
            //list.appendChild(remove)
                
            
            items.style.textDecoration = 'line-through';
        } 
    }
}   
*/





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

   

    
