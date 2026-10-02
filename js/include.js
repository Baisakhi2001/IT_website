function include(id,file) {
	fetch(file)
	.then(response => response.text())
	.then(data =>{
		document.getElementById(id).innerHTML=data;
	})
}

include("Navbar","navbar.html");

include("About","about.html");