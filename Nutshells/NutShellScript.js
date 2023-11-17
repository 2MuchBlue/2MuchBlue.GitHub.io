//gets all nut shells
let nutShells = document.getElementsByTagName("nut-shell");

for(let i = 0; i < nutShells.length; i++){

    //adds 'open' atrabute if one is not found
    if(!nutShells[i].getAttribute("open")){
        nutShells[i].setAttribute("open", false);
    }

    //tests if the first child element is a '<nut-in>' tag
    if(nutShells[i].children[0].tagName == "NUT-IN"){
        console.log("nut-in");
        nutShells[i].setAttribute("nutContent", nutShells[i].children[0].innerHTML);
        nutShells[i].removeChild(nutShells[i].children[0]);
    }
}

//open/closes the nut shell
function openNut(nutShellElement){
    if(nutShellElement.getAttribute("open") == "true"){
        nutShellElement.setAttribute("open", false);
        nutShellElement.removeChild(nutShellElement.children[0]);
    }else{
        nutShellElement.setAttribute("open", true);
        let content = document.createElement("nut-in");
        content.innerHTML = nutShellElement.getAttribute("nutContent");

        nutShellElement.appendChild(content);
    }
}
