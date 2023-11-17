let nutShells = document.getElementsByTagName("nut-shell");

for(let i = 0; i < nutShells.length; i++){

    if(nutShells[i].children[0].tagName == "NUT-IN"){
        console.log("nut-in");
        nutShells[i].setAttribute("nutContent", nutShells[i].children[0].innerHTML);
        nutShells[i].removeChild(nutShells[i].children[0]);
    }
}

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
