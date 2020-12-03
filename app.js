var inputText= document.querySelector("#input");
var translateBtn=document.querySelector("#btn");
var outputDiv=document.querySelector("#output");
var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text
}

function errorHandler(error){
    alert ("Server down. Try after some time" + error);
}



function clickHandler(){
   
   var userInput= inputText.value;
    fetch(getTranslationUrl(userInput))
    .then(response=>response.json())
    .then(json=>{
        var translatedText= json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)
}

translateBtn.addEventListener("click",clickHandler);