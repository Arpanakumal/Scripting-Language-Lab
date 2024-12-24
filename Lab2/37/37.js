function addRow() {
    const table = document.getElementById('dataTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = table.rows.length - 1;
    cell2.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

document.getElementById('add-row-btn').addEventListener('click', function() {
   
    const tableBody = document.querySelector('#data-table tbody');
    const firstRow = tableBody.querySelector('tr');

    const newRow = firstRow.cloneNode(true);

    const newId = tableBody.rows.length + 1;
    newRow.cells[0].textContent = newId; 

    newRow.cells[1].textContent = '';  

    tableBody.appendChild(newRow);
});

function removeRow(icon) {
    const row = icon.closest('tr');  
    row.remove();  
}