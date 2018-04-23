function drawTree (h) {
    var star = "";
    for (i=0; i<h; i++) {
        star += '*';
        console.log(star);
    }
}

console.log(drawTree(6));
