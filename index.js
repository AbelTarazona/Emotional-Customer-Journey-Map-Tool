/*    +/- 30
-   160      Emocionado       7
-   190      Alegre           6
--  220      Normal           5
--- 250
-   280      Pasable          4
-   310      Mmm              3
-   340      Lo odio          2
*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var emotion = "";

ctx.strokeStyle = "#448ee1";
ctx.lineWidth = 5;
var x_inicial = 50;
var y_inicial;
ctx.beginPath();
ctx.moveTo(x_inicial, 250);

function addEmotion() {

    if (emotion == "") {alert('Seleccione una emocion.'); return;}

    var emotion_def = "";
    ctx.font = "30px Arial";
    switch (emotion) {
        case 7:
            emotion_def = 'Emocionado';
            x_inicial += 50;
            y_inicial = 160;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😄", x_inicial, y_inicial - 5);
            break;
        case 6:
            emotion_def = 'Alegre';
            x_inicial += 50;
            y_inicial = 190;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😃", x_inicial, y_inicial - 5);
            break;
        case 5:
            emotion_def = 'Normal';
            x_inicial += 50;
            y_inicial = 220;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("🙂", x_inicial, y_inicial - 5);
            break;
        case 4:
            emotion_def = 'Triste';
            x_inicial += 50;
            y_inicial = 280;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😐", x_inicial, y_inicial - 5);
            break;
        case 3:
            emotion_def = 'Desesperado';
            x_inicial += 50;
            y_inicial = 310;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😕", x_inicial, y_inicial - 5);
            break;
        case 2:
            emotion_def = 'Desesperado';
            x_inicial += 50;
            y_inicial = 340;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😡", x_inicial, y_inicial - 5);
            break;
    }
    ctx.stroke();
    console.log(emotion_def);
    //alert(emotion_def);
}

//https://stackoverflow.com/questions/14488849/higher-dpi-graphics-with-html5-ca
// nvas
// https://stackoverflow.com/questions/279749/detecting-the-system-dpi-ppi-from-j
// s-css

function alerta(emotionFromView) {
    emotion = emotionFromView;
}