var A = [5,10,12,15,0,23,25,26,31,35];

document.getElementById("arr").innerHTML = "Phần tử của mảng A = [" + A + "]";

function sort() {
    A.sort(function(a, b) {
        return b - a;
    })
    document.getElementById("result").innerHTML = "Sắp xếp theo chiều giảm dần A = [" + A + "]";
}

document.getElementById("btn").addEventListener("click", sort);