Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

Webcam.attach("#camera2");

function take_snapshot(){
Webcam.snap(function(data_url){
  document.getElementById("image23").innerHTML="<img src='"+data_url+"' id='cameraimage'>"
});
}

console.log('ml5version:',ml5.version);

classifier22 = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SpX1FVOwQ/model.json',modelloaded);
function modelloaded(){
console.log('model is loaded!');

}