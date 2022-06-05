const myForm = document.getElementById('myForm');
const cartoon = document.getElementById('cartoonName');
const season = document.getElementById('seasons');
let i = 11;

const cartoonInfo =[];

function addToTable() {
    cartoonInfo.forEach(pick => {
    let table = document.getElementById('cartoonTable');
    table.setAttribute('class', 'table table-success table-striped');
    let row = table.insertRow(i);
    row.insertCell(0).innerHTML = i;
    row.insertCell(1).innerHTML = `${pick.cartoon}`;
    row.insertCell(2).innerHTML = `${pick.season}`;
    
    
    });

}


myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        cartoon: cartoon.value,
        season: season.value
    };

    cartoonInfo.push(data);
    myForm.reset();
    addToTable();
    cartoonInfo.length = 0;
    i++;
});





