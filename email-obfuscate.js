
// put "email" in the class list, and add the "emailKey" attr with the target key to use the right email
// ex: <a href="" class="email" emailKey="main">apple</a>

const emailEncoder = new TextEncoder();
const emailDecoder = new TextDecoder();
//console.log(emailEncoder.encode("apple@core.com").toString()); // example of encoding block
// run it and copy the output from the console and put it in a new Uint8array

const emails = {
    "main": emailDecoder.decode(new Uint8Array([82,97,110,100,111,109,46,65,114,116,105,115,116,46,68,111,111,100,101,114,64,103,109,97,105,108,46,99,111,109]))
};

let emailElements = document.getElementsByClassName("email");
for(let i = 0; i < emailElements.length; i++ ){
    let wantedEmailKey = emailElements[i].getAttribute("emailKey");
    if(wantedEmailKey === null){
        continue; // skip
    }
    if(emails[wantedEmailKey] === undefined){
        console.warn(`an element wanting an email has an invalid key! key wanted: ${wantedEmailKey}, the element that errored: ${emailElements[i]}`);
    }
    if(emailElements[i].tagName.toLowerCase() === "a"){
        emailElements[i].href = `mailto:${emails[wantedEmailKey]}`;
    }else{
        emailElements[i].innerText = emails[wantedEmailKey];
    }
}