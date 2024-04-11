const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toUpperCase();
    const table = document.querySelector('.table');
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        let found = false;
        cols.forEach(col => {
            if (col.textContent.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        });
        if (found) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});