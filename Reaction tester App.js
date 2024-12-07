var div=document.getElementById("shape");
var start=new Date().getTime();
function getColor(){
    var letters=`0123456789ABCDEF`
    var color='#'
    for(var i=0;i<6;i++){
        color=color+letters[Math.floor(Math.random()*16)]
    }
    return color
}
function move(){
    var left=(Math.random() *300);;
    var top=(Math.random() *300);
    var wh=((Math.random() *400)+100);
    div.style.left=left +"px";
    div.style.top=top +"px";
    div.style.width=wh +"px";
    div.style.height=wh +"px";
    div.style.backgroundColor=`${getColor()}`;
    div.style.display="block";
    start=new Date().getTime();
}
move();
div.onclick=function(){
    div.style.display="none";
    var end=new Date().getTime()
    var timeTaken=(end-start)/1000
    alert(timeTaken)
    move();
}