function exportToPDF() {
    const periodeSelect = document.getElementById('periodeSelect');
    const selectedPeriode = periodeSelect.value;

    if (selectedPeriode) {
        // Redirect ke endpoint PDF dengan parameter periode
        window.location.href = `/adm/data/export_pdf?periode=${encodeURIComponent(selectedPeriode)}`;
    } else {
        alert('Silakan pilih periode terlebih dahulu!');
    }
}
