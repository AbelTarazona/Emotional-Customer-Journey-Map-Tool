/*
- 50   Emocionado       2
- 150  Alegre           1
-- 250 Normal           0
- 350  Triste           -1
- 450  Desesperado      -2
*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#448ee1";
ctx.lineWidth = 5;
var x_inicial = 50;
var y_inicial;
ctx.beginPath();
ctx.moveTo(x_inicial, 250);
//ctx.stroke();

function addEmotion() {
    var emotion = $("#sltEmojis").val();
    var emotion_def = "";
    ctx.font = "30px Arial";
    switch (emotion) {
        case '2':
            emotion_def = 'Emocionado';
            x_inicial += 50;
            y_inicial = 50;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😍", x_inicial, y_inicial - 5);
            break;
        case '1':
            emotion_def = 'Alegre';
            x_inicial += 50;
            y_inicial = 150;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😀", x_inicial, y_inicial - 5);
            break;
        case '0':
            emotion_def = 'Normal';
            x_inicial += 50;
            y_inicial = 250;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😬", x_inicial, y_inicial - 5);
            break;
        case '-1':
            emotion_def = 'Triste';
            x_inicial += 50;
            y_inicial = 350;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😐", x_inicial, y_inicial - 5);
            break;
        case '-2':
            emotion_def = 'Desesperado';
            x_inicial += 50;
            y_inicial = 450;
            ctx.lineTo(x_inicial, y_inicial);
            ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
            ctx.fillText("😕", x_inicial, y_inicial - 5);
            break;
    }
    ctx.stroke();
    console.log(emotion_def);
    //alert(emotion_def);
}


//https://stackoverflow.com/questions/14488849/higher-dpi-graphics-with-html5-canvas
//https://stackoverflow.com/questions/279749/detecting-the-system-dpi-ppi-from-js-css