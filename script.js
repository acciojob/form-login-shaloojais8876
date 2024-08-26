const form = document.getElementById("form1");

function getFormvalue(){
	const fname = form.fname.value; // => </input>
	const lname = form.lname.value;
	alert(`${fname} ${lname}`)
}