
const pwShow = document.querySelector(".Show"),
	createPw = document.querySelector("#createPw"),
	confirmPw = document.querySelector("#confirmPw"),
	alertIcon = document.querySelector(".errorIcon"),
	alertText = document.querySelector(".text"),
	submitBtn = document.querySelector("#button");
	
	
	pwShow.addEventListener("click", ()=>{
		if((createPw.type === "password") && (confirmPw.type === "password")) {
			createPw.type = "text";
			confirmPw.type = "text";
			pwShow.classList.replace("fa-eye-slash", "fa-eye");
		}else {
			createPw.type = "password";
			confirmPw.type = "password";
			pwShow.classList.replace("fa-eye", "fa-eye-slash");
		}
	});

createPw.addEventListener("input", ()=> {
	let inputValue = createPw.value.trim(); 
	
	if(inputValue.length >= 8){
		confirmPw.removeAttribute("disable");
		submitBtn.removeAttribute("disable");
		submitBtn.classList.add("active");
	}else {
		confirmPw.setAttribute("disable", true);
		submitBtn.setAttribute("disable", true);
		submitBtn.classList.remove("active");
	}
});

submitBtn.addEventListener("click", ()=>{
	if(createPw.value === confirmPw.value){
		alertText.innerText = "Password matched";
		alertIcon.style.display = "none";
		alertText.style.color = "#4070F4";
	}else {
		alertText.innerText = "Password didn't matched";
		alertText.style.color = "#D93025";
		alertIcon.style.display = "block";
	}

});




