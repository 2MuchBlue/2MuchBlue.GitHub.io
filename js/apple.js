var rand = Math.floor((Math.random() * 3) + 1);
alert(rand)
if(rand == 2){
	alert("Apple")
	document.body.style.backgroundImage = "url('https://mariop-me.github.io/pics/Anthro_Coat_Test_Centered.png')";
}else{
	document.body.style.backgroundImage = "url('https://mariop-me.github.io/pics/Background.jpg')"
}

function PreviewLetter() {
	alert(document.getElementById("LetterOut").value);
	var Letter = document.getElementById("LetterOut").value;
}
