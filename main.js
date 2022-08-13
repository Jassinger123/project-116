function preload(){

}

function setup(){
    canvas=createCanvas(700,600)
    canvas.center();
    camera=createCapture(VIDEO)
    camera.size(300,300);
    camera.hide();

    postnetmodel=ml5.poseNet(camera,modelloaded);
    postnetmodel.on('pose',gotposes);
}

function modelloaded(){
    console.log("Initialize model loaded");
}

function gotposes(result){

    if (result.length > 0) {
        console.log(results);

        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);

        console.log("left ankle x="+results[0].pose.leftAnkle.x);
        console.log("left ankle y="+results[0].pose.leftAnkle.y);

        console.log("leftEar x="+results[0].pose.leftEar.x);
        console.log("leftEar y="+results[0].pose.leftEar.y);

        console.log("leftElbow x="+results[0].pose.leftElbow.x);
        console.log("leftElbow y="+results[0].pose.leftElbow.y);

        console.log("leftEye x="+results[0].pose.leftAnkle.x);
        console.log("leftEye y="+results[0].pose.leftAnkle.y);
        
        console.log("leftHip x="+results[0].pose.leftHip.x);
        console.log("leftHip y="+results[0].pose.leftHip.y);

        console.log("leftKnee x="+results[0].pose.leftKnee.x);
        console.log("leftKnee y="+results[0].pose.leftKnee.y);

        console.log("leftShoulder x="+results[0].pose.leftShoulder.x);
        console.log("leftShoulder y="+results[0].pose.leftShoulder.y);

        console.log("leftWrist x="+results[0].pose.leftWrist.x);
        console.log("leftWrist y="+results[0].pose.leftWrist.y);

        console.log("rightAnkle x="+results[0].pose.rightAnkle.x);
        console.log("rightAnkle y="+results[0].pose.rightAnkle.y);

        console.log("rightEar x="+results[0].pose.rightEar.x);
        console.log("rightEar y="+results[0].pose.rightEar.y);

        console.log("rightElbow x="+results[0].pose.rightElbow.x);
        console.log("rightElbow y="+results[0].pose.rightElbow.y);

        console.log("rightEye x="+results[0].pose.rightEye.x);
        console.log("rightEye y="+results[0].pose.rightEye.y);

        console.log("rightHip x="+results[0].pose.rightHip.x);
        console.log("rightHip y="+results[0].pose.rightHip.y);

        console.log("rightKnee x="+results[0].pose.rightKnee.x);
        console.log("rightKnee y="+results[0].pose.rightKnee.y);

        console.log("rightShoulder x="+results[0].pose.rightShoulder.x);
        console.log("rightShoulder y="+results[0].pose.rightShoulder.y);

        console.log("rightWrist x="+results[0].pose.rightWrist.x);
        console.log("rightWrist y="+results[0].pose.rightWrist.y);
    }
}

function draw(){
image (camera,0,0,300,300);
}

function take_snapshot(){
    save=("myimage.jpeg");
}