var muñecaIX=0
var muñecaDX=0
var diferencia=0
function setup() {
    canvas=createCanvas(500,500)
    canvas.position(900,200)
    video=createCapture(VIDEO)
    video.size(500,500)
    video.position(300,200)
    modelo=ml5.poseNet(video,confirmacion)
    modelo.on("pose",resultados)
}
function draw() {
    background("white")
    textSize(diferencia)
    fill("blue")
    text("سيباستيان",50,400)
}
function confirmacion() {
    console.log("si🙂👍")
}
function resultados(results) {
    if (results.length>0) {
        console.log(results)
        muñecaDX=results[0].pose.rightWrist.x
        muñecaIX=results[0].pose.leftWrist.x
        diferencia=(muñecaIX-muñecaDX)
    }
}