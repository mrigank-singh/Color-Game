var modeSelect = 6;
var colors = randomColorArray(6);
var correctColor = pickColor();
var displayedAnswer = document.querySelector("#answer");
var h1 = document.querySelectorAll("#header");
var msgDisplay = document.getElementById("msg");
var resetButton = document.getElementById("resetBtn");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");
var squares = document.querySelectorAll(".square");

displayedAnswer.textContent = correctColor ;

resetButton.addEventListener("click", function(){

	h1[0].style.backgroundColor = "#668cff";
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";

	colors = randomColorArray(modeSelect);
	correctColor = pickColor();
	displayedAnswer.textContent = correctColor;

	for(var i = 0; i<6; i++)
		squares[i].style.backgroundColor = colors[i];

})

easyButton.addEventListener("click", function(){

	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	h1[0].style.backgroundColor = "#668cff";
	resetButton.textContent = "New Colors";

	modeSelect = 3;
	colors = randomColorArray(modeSelect);
	correctColor = pickColor();
	displayedAnswer.textContent = correctColor;

	for(var i = 0; i< 3; i++)
		squares[i].style.backgroundColor = colors[i];

	squares[3].style.display = "none";
	squares[4].style.display = "none";	
	squares[5].style.display = "none";

})

hardButton.addEventListener("click", function(){

	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	h1[0].style.backgroundColor = "#668cff";
	resetButton.textContent = "New Colors";	

	modeSelect = 6;
	colors = randomColorArray(modeSelect);
	correctColor = pickColor();
	displayedAnswer.textContent = correctColor;

	for(var i = 0; i< 6; i++)
		squares[i].style.backgroundColor = colors[i];

	squares[3].style.display = "block";
	squares[4].style.display = "block";	
	squares[5].style.display = "block";

})


for(var i = 0; i<6; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		
		var clickedCol = this.style.backgroundColor;
		resetButton.textContent = "Play Again";

		if(clickedCol === correctColor)
			{
				changeColor(correctColor);
				msgDisplay.textContent = "Correct";
			}
		else 
		{
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again";
		}
})
}

function changeColor(changedColor){
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = changedColor;
	}
	h1[0].style.backgroundColor = changedColor;
}

function pickColor(){
	var pickedNum = Math.floor(Math.random() * colors.length );
	return colors[pickedNum];
}

function randomColorArray(len)
{
	var arr = new Array();
	for(var i = 0; i < len; i++)
		arr.push(randomColor());
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}