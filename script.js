
const table = document.querySelector('table');
console.log(table)


function makeRow () {
    const tr = document.createElement('tr');
    for(let i =0; i < 20; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        
    }
   
    
    table.appendChild(tr);
}


const button = document.querySelector('button');

button.addEventListener('click', makeRow);

let color = 'red';

const colorize = (event) => {
    
    if(!event.target.className) {
        event.target.classList.add(color);
    }
    else {
        event.target.className = '';
    }
    console.log('clicked',event.target.value);
}

const toggleColors = (event) => {
    color = event.target.value;


}

table.addEventListener('click', colorize)

const select = document.querySelector('select');


select.addEventListener('change', toggleColors )