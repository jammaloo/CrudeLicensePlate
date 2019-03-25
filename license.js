function setPlate(license) {
    document.getElementById('license_plate').innerText = license;
}

function generate() {
    setPlate('Banana');
}

function init() {
    setPlate('Some Plate');
    document.getElementById('refresh_plate').onclick = generate;
}

init();