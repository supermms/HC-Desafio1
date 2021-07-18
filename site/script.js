const btnSubmit = document.getElementById("button-submit")
const email = document.getElementById("email")
const name = document.getElementById("name")

btnSubmit.addEventListener('click', function(){
	let user = {
		name: name.value,
		email: email.value,
	}
	localStorage.setItem('name', user.name);
	localStorage.setItem('email', user.email);
	console.log(`$(user.name) $(user.email)`);
}); 