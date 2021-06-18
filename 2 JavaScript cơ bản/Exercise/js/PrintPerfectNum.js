var A = [6,15,18,22,28,40,74,61,255,106,274,496];

document.getElementById("arr").innerHTML = "Phần tử của mảng A = [" + A + "]";
function check() {

    for (let i = 0; i < A.length; i++) {
        var S = 0;
        if (A[i] >= 6) {
            for (let j = 1; j < A[i]; j++) {
                if (A[i] % j == 0) {
                    S += j;
                }
            }
            if (A[i] == S) {
                document.write(A[i] + " ");
                console.log(A[i])
            }
        }
    }
}

document.getElementById("btn").addEventListener("click", check);