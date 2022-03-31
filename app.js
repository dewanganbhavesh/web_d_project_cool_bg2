window.onload = function () {
    var bsDiv = document.getElementById('boxshadow');
    var x, y;

    window.addEventListener('mouseover', function (event) {
        x = event.clientX;
        y = event.clientY;

        if (typeof x !== 'undefined') {
            bsDiv.style.left = x - bsDiv.clientWidth/2 + 'px';
            bsDiv.style.top = y - bsDiv.clientHeight/2 + 'px';
        }

    },false);
};