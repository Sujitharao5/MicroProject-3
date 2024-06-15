function Solve(val) {
    var v = document.getElementById('result');
    v.value += val;
}

function Result() {
    var a = document.getElementById('result').value;
    var b = a.replace(/x/g, '*'); 
    var result = eval(b);
    document.getElementById('result').value = result;
}

function Reset() {
    var res = document.getElementById('result');
    res.value = '';
}

function Delete() {
    var del = document.getElementById('result');
    del.value = del.value.slice(0, -1);
}