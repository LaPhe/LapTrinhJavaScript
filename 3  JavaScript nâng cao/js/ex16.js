function swap() {
    var n = document.getElementById("number").value;

    function rever(n) {
        return (n === '') ? '':rever(n.substr(1)) + n.charAt(0);
    }
    var a = rever(n);

    document.getElementById("result").innerHTML = "Số nghịch đảo của " + n + " là : " + a;
}

document.getElementById("btn").addEventListener("click", swap);
