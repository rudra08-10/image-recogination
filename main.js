Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
    })
}

console.log('ml5version',ml5.version);
link=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8jcuYQguA/model.json',modelLoaded);


function modelLoaded()
{
console.log('model Loaded');
}

function check()
{
    img=document.getElementById('capture');
    link.classify(img,gotresult);
}

function gotresult(error,result)
{
if(error)
{
    console.error(error);

}
else
{
    console.log(result);
    document.getElementById("result_name").innerHTML=result[0].label;
    document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}