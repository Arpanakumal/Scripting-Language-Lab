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