function increaseCount() {
    var count_in = document.getElementById("count").innerHTML;
    count_in = parseInt(count_in);
    count_in +=1
    count_out = count_in;
    document.getElementById("count").innerHTML = count_out;
    var swap = 'rgb(91, 167, 84)';
    document.body.style.backgroundColor = swap;
}

function decreaseCount() {
    var count_in = document.getElementById("count").innerHTML;
    count_in = parseInt(count_in);
    count_in -=1
    count_out = count_in;
    document.getElementById("count").innerHTML = count_out;
    var swap = 'rgb(161, 61, 61)';
    document.body.style.backgroundColor = swap;
}

function resetCount() {
    document.getElementById("count").innerHTML = '0';
    var swap = 'rgb(119, 136, 153)';
    document.body.style.backgroundColor = swap;
}