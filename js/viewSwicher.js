const interval = 5000;
const time_out = 1;

let total_pics_num = 2;
let i = 0;
let timeout;
let opacity = 100;

function fade_to_next() {
    opacity--;
    let k = i + 1;
    let image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    let image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity / 100;
    document.getElementById(image_now).style.filter = 'alpha(opacity=' + opacity + ')';
    document.getElementById(image_next).style.opacity = (100 - opacity) / 100;
    document.getElementById(image_next).style.filter = 'alpha(opacity=' + (100 - opacity) + ')';
    timeout = setTimeout("fade_to_next()", time_out);
    if (opacity == 1) {
        opacity = 100;
        clearTimeout(timeout);
    }
}

setInterval(
    function () {
        i++;
        if (i > total_pics_num) i = 1;
        fade_to_next();
    }, interval
);