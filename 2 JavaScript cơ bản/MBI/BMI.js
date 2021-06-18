function BMIcalculate() {

	let height = parseInt(document
			.querySelector("#height").value);

	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	if (height === "")
		result.innerHTML = "Chưa Nhập Height";

	else if (weight === "")
		result.innerHTML = "Chưa Nhập Weight";

	else {

		let bmi = (weight / ((height * height)/ 10000));

		if (bmi < 18.6) 
            result.innerHTML =`<p>Gầy </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh thấp </p>`;
           
		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =`<p>Bình thường </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh trung bình </p> `;
                            
		else if (bmi >= 25 && bmi < 29.9)
            result.innerHTML =`<p>Hơi Béo </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh cao </p>`;

        else if (bmi >= 30 && bmi < 34.9)
            result.innerHTML =`<p>Béo phì cấp độ 1 </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh cao </p>`;

        else if (bmi >= 35 && bmi < 39.9)
            result.innerHTML =`<p>Béo phì cấp độ 2 </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh rất cao </p>`;

        else 
            result.innerHTML =`<p>Béo phì cấp độ 3 </p> <span> BIM = ${bmi}</span> <p> nguy cơ phát triển bệnh nguy hiểm </p>`;
	}
     
}

