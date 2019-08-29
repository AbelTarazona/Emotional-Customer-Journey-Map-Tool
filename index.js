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
var activity = "";
var type_font_activity = "bold 15px Arial";
var size_emoji_journey = "30px Arial";

ctx.strokeStyle = "#448ee1";
ctx.lineWidth = 5;
var x_inicial = 50;
var y_inicial;
var downscaleFactor = 0.80;

//ctx.scale( downscaleFactor, downscaleFactor );
ctx.beginPath();
ctx.moveTo(x_inicial, 250);
console.log('asdsadsa')

function addEmotion() {

    activity = $('#txtActivity').val();

    if (emotion == "") {
        alert('Seleccione una emocion.');
        return;
    }
    if (activity == "") {
        alert('Ingrese una actividad.');
        return;
    }

    var emotion_def = "";
    ctx.font = size_emoji_journey;

    switch (emotion) {
        case 7:
            emotion_def = 'Emocionado';
            y_inicial = 160;
            createRoute(y_inicial, "😄");
            break;
        case 6:
            emotion_def = 'Alegre';
            y_inicial = 190;
            createRoute(y_inicial, "😃");
            break;
        case 5:
            emotion_def = 'Normal';
            y_inicial = 220;
            createRoute(y_inicial, "🙂");
            break;
        case 4:
            emotion_def = 'Pasable';
            y_inicial = 280;
            createRoute(y_inicial, "😐");
            break;
        case 3:
            emotion_def = 'Mmm';
            y_inicial = 310;
            createRoute(y_inicial, "😕");
            break;
        case 2:
            emotion_def = 'Lo odio';
            y_inicial = 340;
            createRoute(y_inicial, "😡");
            break;
    }
    ctx.stroke();
    console.log(emotion_def);
    $('#txtActivity').val('');
    //alert(emotion_def);

}

// https://stackoverflow.com/questions/14488849/higher-dpi-graphics-with-html5-c
// a nvas
// https://stackoverflow.com/questions/279749/detecting-the-system-dpi-ppi-from-
// j s-css

function seleccionarEmocion(emotionFromView) {
    emotion = emotionFromView;
}

function converter(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}

function toImg() {
    $('#canvito').empty();
    $('#canvito').append(converter(c));
    $('#fullHeightModalRight').modal('show')
}

function createRoute(y_inicial, emoji) {
    x_inicial += 90;
    ctx.lineTo(x_inicial, y_inicial);
    ctx.arc(x_inicial, y_inicial, 5, 0, 2 * Math.PI, false);
    ctx.fillText(emoji, x_inicial, y_inicial - 5);
    ctx.font = type_font_activity;
    ctx.fillText(activity, x_inicial, y_inicial + 15);
}