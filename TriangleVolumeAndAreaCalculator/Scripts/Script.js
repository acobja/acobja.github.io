function calculatePerimiter() {
    let perim_A = document.getElementById('perim_A').value;
    let perim_B = document.getElementById('perim_B').value;
    let perim_C = document.getElementById('perim_C').value;

    const perimResult = parseFloat(perim_A) + parseFloat(perim_B) + parseFloat(perim_C);
    document.getElementById('perimiterResult').innerHTML = perimResult;
}

function calculateArea() {
    let base = document.getElementById('base').value;
    let height1 = document.getElementById('height1').value;
    const half = 0.5;
    const areaResult = parseFloat(base) * parseFloat(half) * parseFloat(height1);
    document.getElementById('areaResult').innerHTML = areaResult;
}

function calculateVolume() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height2 = document.getElementById('height2').value;
    const third = 1 / 3;
    const volumeResult = third * parseFloat(length) * parseFloat(width) * parseFloat(height2);
    document.getElementById('volumeResult').innerHTML = volumeResult;
}