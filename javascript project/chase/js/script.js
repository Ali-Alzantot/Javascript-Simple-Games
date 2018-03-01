var intervalId = setInterval(game,1);
var moveOfficerDivId = setInterval(moveOfficerDiv,4000);
var calcScoreId= setInterval(calcScore,100);
var thiefDiv=document.getElementById("thiefDiv");
var officerDiv=document.getElementById("officerDiv");
var score=0;
var scoreValue=document.getElementById("scoreValue");
function calcScore(){
    score++;
    scoreValue.innerHTML=score;

}
function game(){
      var x1 = thiefDiv.offsetLeft;
      var y1 = thiefDiv.offsetTop;
      var h1 = thiefDiv.offsetHeight;
      var w1 = thiefDiv.offsetWidth;
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = officerDiv.offsetLeft;
      var y2 = officerDiv.offsetTop;
      var h2 = officerDiv.offsetHeight;
      var w2 = officerDiv.offsetWidth;
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) 
      {}
      else{
      localStorage["score"] = scoreValue.innerHTML;
      window.location.href = "./gameOver.html";
      }
}

var Keys = {
        up: false,
        down: false,
        left: false,
        right: false
    };

window.onkeydown = function(e) {
    var kc = e.keyCode;
    e.preventDefault();
    
if  (kc === 27){
  window.location.href = "../Home/temp.html";
    }
    if  (kc === 37){
        thiefDiv.style.left =thiefDiv.offsetLeft-5+'px';
        //thiefDiv.className = "rotate" + 360;
    }
    else if (kc === 38){
        thiefDiv.style.top =thiefDiv.offsetTop-5+'px';
    }  
    else if (kc === 39){
        thiefDiv.style.left =thiefDiv.offsetLeft+5+'px';
    }
    else if (kc === 40){
        thiefDiv.style.top =thiefDiv.offsetTop+5+'px';
    }
};

window.onkeyup = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if      (kc === 37) Keys.left = false;
    else if (kc === 38) Keys.up = false;
    else if (kc === 39) Keys.right = false;
    else if (kc === 40) Keys.down = false;
};    



function moveOfficerDiv()
{

var currentX =officerDiv.offsetLeft;
var currentY =officerDiv.offsetTop;
var targetX = thiefDiv.offsetLeft;
var targetY = thiefDiv.offsetTop;
if(currentX<targetX){

   var i1=currentX;
    function frame1() {
        i1++; // update parameters
        officerDiv.style.left = i1 + "px";// show frame
        if (i1>=targetX)  // check finish condition
            clearInterval(id1)
    }
    var id1 = setInterval(frame1, 10); // draw every 10ms

}
else{

    var i2=currentX;
    function frame2() {
        i2--; // update parameters
        officerDiv.style.left = i2 + "px";// show frame
        if (i2<=targetX)  // check finish condition
            clearInterval(id2)
    }
    var id2 = setInterval(frame2, 10); // draw every 10ms

}

if(currentY<targetY){

    var i3=currentY;
    function frame3() {
        i3++; // update parameters
        officerDiv.style.top = i3 + "px";// show frame
        if (i3>=targetY)  // check finish condition
            clearInterval(id3)
    }
    var id3 = setInterval(frame3, 10); // draw every 10ms
}
else{

    var i4=currentY;
    function frame4() {
        i4--; // update parameters
        officerDiv.style.top = i4 + "px";// show frame
        if (i4<=targetY)  // check finish condition
            clearInterval(id4)
    }
    var id4 = setInterval(frame4, 10); // draw every 10ms


}


}



