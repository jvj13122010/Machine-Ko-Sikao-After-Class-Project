Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    
    function takeSnapshot(){
    Webcam.snap(function(dataURI){
        document.getElementById("result").innerHTML="<img id='captureIMG' src='" + dataURI + "' >";
    
    });
    
    }
    console.log(ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ifDDNWqSG/model.json', modelLoaded);
    
    function check(){
        document.getElementById("loader").style.display="block";
    img= document.getElementById("captureIMG");
    classifier.classify(img, gotResult);
    }
    function gotResult(error,result) {
        if (error) {
            console.error(error);
    
        }
        else{
            console.log(result);
            document.getElementById("objectName").innerHTML=result[0].label;
            document.getElementById("objectAccuracy").innerHTML=result[0].confidence.toFixed(3);
            document.getElementById("loader").style.display="none";
    
        }
    }
    function modelLoaded(){
        console.log("Model Loaded Sucsessfully!");
    } 
   