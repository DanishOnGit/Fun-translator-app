const inputText= document.querySelector("#input");
const translateBtn=document.querySelector("#btn");
const outputDiv=document.querySelector("#output");
const serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json";
// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text
}

function errorHandler(error){
    alert ("Server down. Try after some time" + error);
}



function clickHandler(){
   
   let userInput= inputText.value;
    fetch(getTranslationUrl(userInput))
    .then(response=>response.json())
    .then(json=>{
        let translatedText= json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
}

translateBtn.addEventListener("click",clickHandler);
