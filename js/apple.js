var rand = Math.floor((Math.random() * 3) + 1);
alert(rand)
if(rand == 2){
	alert("Apple")
	document.body.style.backgroundImage = "url(pics/Anthro_Coat_Test_Centered.png)";
}

function PreviewLetter() {
	alert(document.getElementById("LetterOut").value);
	var Letter = document.getElementById("LetterOut").value;
}
