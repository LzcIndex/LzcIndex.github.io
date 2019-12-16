var oImg = document.getElementsByTagName("img");
var showImg = 0;
var len = oImg.length;
var timer;
function  init(){
    show();
    bindEvent();
    play();
}
init();
function show(){
    var mLen = Math.floor(len/2),
        rNum, lNum;
    for(var i = 0;i < mLen; i++){
        
        lNum =  len + showImg - i - 1;
        if (lNum > len - 1) {
            lNum -= len;
        };
        oImg[lNum].style.transform = "translateX("+(-150*(i+1)) +"px) translateZ("+ (200 - i * 100) +"px) rotateY(30deg)";
        
        rNum = showImg + i + 1;
        if (rNum > len - 1) {
            rNum -= len;
        };
        oImg[rNum].style.transform = "translateX("+(150*(i+1)) +"px) translateZ("+ (200 - i * 100) +"px) rotateY(-30deg)";
    }
    oImg[showImg].style.transform = "translateZ(300px)";
}
function bindEvent(){
    for(var i= 0;i<len;i++){
    (function(i){
        oImg[i].onclick = function(){
            showImg = i;
            show();
        }
        oImg[i].onmouseenter = function(){
            clearInterval(timer);
        };
        oImg[i].onmouseleave = function(){
            play();
        }
     })(i)
    }
}
function play(){
    timer = setInterval(function(){
        if(showImg == len-1){
            showImg = 0;
        }else{
            showImg++;
        }
        show();
    },2000)
}
