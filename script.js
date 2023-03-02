let clicks = 0;

function pet() {
    document.getElementById('cat').src='2.png';
    setTimeout(function pet2() {
        document.getElementById('cat').src='3.png';
    }, 100);
    setTimeout(function pet3() {
        document.getElementById('cat').src='1.png';
    }, 100);
    clicks++;
    document.getElementById('click').innerHTML = 'Cats: ' +clicks;
}

