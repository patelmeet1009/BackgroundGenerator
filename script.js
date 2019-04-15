const first = () => {
	const greet = 'Hi';
	const seconf = (){
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rndButton = document.getElementById("rndButton");

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

rndButton.addEventListener("click", function () {
	var letters = '0123456789ABCDEF';
	var color1load = "#"+((1<<24)*Math.random()|0).toString(16);
	var color2load = "#"+((1<<24)*Math.random()|0).toString(16);

  	setBackground(color1load, color2load);
}); 

function setBackground(col1, col2) {
	body.style.background = "linear-gradient(to right, " + col1 + ", " + col2+ ")";
	css.textContent = body.style.background + ";";
}

function colorChange() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

