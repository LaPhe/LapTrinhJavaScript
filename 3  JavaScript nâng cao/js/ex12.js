var A = [5,10,12,15,0,23,25,26,31,35];

document.getElementById("arr").innerHTML = "Phần tử của mảng A = [" + A + "]";

function result() {
    var B = []; 
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 5 == 0) {
            B.push(A[i])
        }
        
    }
    document.getElementById("result").innerHTML = "Các giá trị trong mảng A chia hết cho 5: " + B;
}

document.getElementById("btn").addEventListener("click", result);