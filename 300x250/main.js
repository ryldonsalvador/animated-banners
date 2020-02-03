//JQuery alias
var $ = function(slt) {
	return document.querySelector(slt);
};
var tl;

function init() {
    TweenLite.set($('#main_div'),{display:"block"});
    TweenMax.set($('#plane'),{x:-150,y:230})
    TweenMax.set($('#sign'),{x:-200})
    TweenMax.set($('#cta'),{opacity:0,display:"none"})
    animate();
}

function animate () {
    tl = new TimelineLite();

    tl.to($('#sign'),.5,{x:0,ease: Power2.easeOut})
    .to($('#cta'),.5,{delay:.5,opacity:1,display:"block",ease: Power2.easeOut})
    // .to($('#plane'),2,{delay:.5,x:400,y:-500,ease: Power2.easeOut})
    // .to($('#orangeDiv'),.5,{opacity:1,ease: Power2.easeOut}, "-=1.5")
    // .to($('#whatareyou'),.5,{opacity:1,ease: Power2.easeOut}, "-=1")
    // .to($('#img2'),.5,{opacity:1,ease: Power2.easeOut}, "+=1")
    // .to($('#img2_text'),.5,{opacity:1,ease: Power2.easeOut}, "-=.5")
    // .to($('#img3'),.5,{opacity:1,ease: Power2.easeOut}, "+=1")
    // .to($('#img3_text'),.5,{opacity:1,ease: Power2.easeOut}, "-=.5")
    // .to($('#img4'),.5,{opacity:1,ease: Power2.easeOut}, "+=1")
    // .to($('#warmculture'),.5,{opacity:1,ease: Power2.easeOut}, "-=.5")
    // .to($('#warmculture'),.5,{opacity:0,delay:1,ease: Power2.easeOut})
    // .to($('#logoend'),.5,{opacity:1,ease: Power2.easeOut,onComplete:loopAnim})
}

function loopAnim(){
    setTimeout(function(){
        // tl.restart();
    },300)
}

function addListeners(){
	$('#cta').addEventListener('click', ctaClick);
    $('#cta').addEventListener('mouseover', ctaOver);
    $('#cta').addEventListener('mouseout', ctaOut);
    $('#bgExit').addEventListener('click', bgClick);
    
}

function bgClick(){
	Enabler.exit('Background_Exit');
}

function ctaClick(){
	Enabler.exit('CTA_Exit');	
}

function ctaOver(){
    TweenLite.to($('#cta'),.5,{opacity:.7});
}

function ctaOut(){
    TweenLite.to($('#cta'),.5,{opacity:1});
}

window.onload = init;
