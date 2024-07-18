document.getElementById("avebutton").onclick = 
function () {
	var a = document.getElementById("first").value;
	var b = document.getElementById("second").value;
	var c = document.getElementById("third").value;
	var d = document.getElementById("fourth").value;
	var x = document.getElementById("average");
	x.innerHTML = "Your average grade is: " + ((parseInt(a) + parseInt(b) + parseInt(c)+ parseInt(d))/4);
}