

function playJuanito() {
    playMusic("juanito_clicks", "juanito_audio", "juan-clicks");
} 


function playPartridge() {
    playMusic("partridge_clicks", "partridge_audio", "partridge-clicks");
}  

$(document).ready(function () {
    setCounter("juanito_clicks", "juan-clicks");
    setCounter("partridge_clicks", "partridge-clicks");
});