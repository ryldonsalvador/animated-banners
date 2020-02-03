var adDiv;
var firstImage;
var secondImage;
var staticImage;
var timeDiv;
var anim1, anim2, anim3;

function loaded() {
    console.log('loaded');
    adDiv = document.getElementById("ad");
    secondImage = document.getElementById("secondImage");
    firstImage = document.getElementById("firstImage");
    staticImage = "http://backend.roundshot.com/cams/249/medium";
    timeDiv = document.getElementById("TimeDiv");
    anim1 = document.getElementById("anim1");
    anim2 = document.getElementById("anim2");
    anim3 = document.getElementById("anim3");
    loadImage();

}

function loadImage(){
    getImage();
    callTime();
    startAnim();
}

function startAnim(){
  anim.to(anim1,.5,{delay:2,opacity:0, ease: Power3.easeOut},"3")
  .to(anim2,.5,{delay:2,opacity:1, ease: Power3.easeOut},"3.2")
  .to(anim2,.5,{delay:4,opacity:0, ease: Power3.easeOut},"6")
  .to(anim3,.5,{delay:4,opacity:1, ease: Power3.easeOut},"6.2")
}

function callTime(){
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   // var second = now.getSeconds();
   var ap = "am";
   if (hour   > 11) { ap = "pm";             }
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (hour   < 10) { hour   = "0" + hour;   }
   if (minute < 10) { minute = "0" + minute; }
   // if (second < 10) { second = "0" + second; }
   var timeString = hour +':' + minute  +" " + ap;
      // console.log(timeString + 'timeString')
    timeDiv.innerHTML = timeString;
      setTimeout(function(){
      callTime();
    },1000)
}
function getImage() {
  var img = new Image();
  img.onload = function() {
    firstImage.src = this.src;
    secondImage.src = this.src;
    imageSize = this.width;
    animateBanner();
  }
  img.src = staticImage;
}

function animateBanner() {
  TweenMax.set(secondImage, {x: imageSize - 1, onComplete: animateBackground});
    function animateBackground() {
    TweenMax.to(firstImage, 200, {x: -imageSize, ease: Power0.easeNone});
    TweenMax.to(secondImage, 200, {x: -1, ease: Power0.easeNone, onComplete: function() {
    TweenMax.set(firstImage, {x: 0});
    TweenMax.set(secondImage, {x: imageSize - 1});
    animateBackground();
    }});
  }
}