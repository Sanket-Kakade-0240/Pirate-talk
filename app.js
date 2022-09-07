var btnTrans = document.querySelector("#btn-trans");
var tAreaInput = document.querySelector("#tarea-input");
var outputDiv = document.querySelector("#output");

var apiURL = "https://api.funtranslations.com/translate/pirate.json";

function getTransURL(text) {
    return apiURL + '?' +"text= " + text
};

function errHandler(error) {
    console.log("error detected !", error);
    alert("Server failed to fetch, try again later...");
};

function clickEventHandler() {
    var inputText = tAreaInput.value;
    fetch (getTransURL(inputText))
    .then ( response => response.json())
    .then (json => {
        var transTxt = json.contents.translated;
        outputDiv.innerHTML = transTxt;
    })
    .catch(errHandler)
};

btnTrans.addEventListener("click",clickEventHandler);