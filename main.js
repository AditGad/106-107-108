function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/u02fOYRBx/model.json",modelready);
}
function modelready(){
    classifier.classify(getresults);
}
var dog=0;
var cat=0;
var lion=0;
function getresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I Can Hear "+results[0].label;
    document.getElementById("result_count").innerHTML='Detected Dog - '+dog+ ' Detected Cat - '+cat+'Detected Lion '+lion;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_count").style.color="rgb("+r+","+g+","+b+")";
    img=document.getElementById("Animal");
    
    if (results[0].label == "Barking") { img.src = 'dog.gif'; dog = dog+1; }
     else if (results[0].label == "Meowing") { img.src = 'Cat.gif'; cat = cat + 1; }
      else{ img.src = 'Kohli.gif'; }}} 
