var rand = Math.floor((Math.random() * 3) + 1);

if(rand == 2){
	document.body.style.background = pics/Anthro_Coat_Test_Centered.png;
}

function PreviewLetter() {
	alert(document.getElementById("LetterOut").value);
	var Letter = document.getElementById("LetterOut").value;
}
