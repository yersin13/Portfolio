$('.carousel').carousel({
    interval: 2000
})
// text animation JS
// Wrap every letter in a span

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 50,
        delay: (el, i) => 45 * i
    })
    .add({
        targets: '.ml10',
        opacity: 0,
        duration: 3000,
        easing: "easeInOutQuint",
        delay: 1000
    });



//window.onload = function(){
//    
//    const EFFECT = document.querySelector("#about-me");
//    
//    window.addEventListener("scroll", scrollEffect);
//        
//        function scrollEffect(){
//            
//            
//            if(window.scrollY>=200){
//                console.log(scrollY);
//                EFFECT.style.opacity = "1";
//                EFFECT.style.transform = "translateX(0px)";
//                EFFECT.style.transition = "1s ease-in-out";
//            }
//            else {
//                EFFECT.style.opacity = "0";
//                EFFECT.style.transform = "translateX(-50px)";
//            }
//        }
//    scrollEffect();
//}



//var box = document.getElementById('text-animation'),
//    colors = ['purple', 'yellow', 'orange', 'brown', 'black'];
//
//window.onload= function () {
//    (function loop(){
//        var color = colors.shift();
//        
//        box.style.backgroundColor = color;
//        
//        if (colors.length) {
//            setTimeout(loop, 1000);
//        }
//    }
//    
//    )();
//};
//
//var colors = ["red", "green", "blue", "purple", "yellow", "orange"];
//
//var currentColor = 0;
//function switchColor() {    
//    if (currentColor >= colors.length) currentColor = 0;
//    
//    $('#text-animation').css('background-color', colors[currentColor++]);
//    
//    setTimeout(switchColor, 50);
//}
//
//switchColor();



var colors = [
"rgba(0, 0, 0, 0.45)",
"rgba(0, 0, 0, 0.44)",
"rgba(0, 0, 0, 0.43)",
"rgba(0, 0, 0, 0.42)",
"rgba(0, 0, 0, 0.41)",
"rgba(0, 0, 0, 0.40)",
"rgba(0, 0, 0, 0.39)",
"rgba(0, 0, 0, 0.38)",
"rgba(0, 0, 0, 0.37)",
"rgba(0, 0, 0, 0.36)",
"rgba(0, 0, 0, 0.35)",
"rgba(0, 0, 0, 0.34)",
"rgba(0, 0, 0, 0.33)",
"rgba(0, 0, 0, 0.32)",
"rgba(0, 0, 0, 0.31)",
"rgba(0, 0, 0, 0.30)",
"rgba(0, 0, 0, 0.29)",
"rgba(0, 0, 0, 0.28)",
"rgba(0, 0, 0, 0.27)",
"rgba(0, 0, 0, 0.26)",
"rgba(0, 0, 0, 0.25)",
"rgba(0, 0, 0, 0.24)",
"rgba(0, 0, 0, 0.23)",
"rgba(0, 0, 0, 0.22)",
"rgba(0, 0, 0, 0.21)",
"rgba(0, 0, 0, 0.20)",
"rgba(0, 0, 0, 0.20)",
"rgba(0, 0, 0, 0.21)",
"rgba(0, 0, 0, 0.22)",
"rgba(0, 0, 0, 0.23)",
"rgba(0, 0, 0, 0.24)",
"rgba(0, 0, 0, 0.25)",
"rgba(0, 0, 0, 0.26)",
"rgba(0, 0, 0, 0.27)",
"rgba(0, 0, 0, 0.28)",
"rgba(0, 0, 0, 0.29)",
"rgba(0, 0, 0, 0.30)",
"rgba(0, 0, 0, 0.31)",
"rgba(0, 0, 0, 0.32)",
"rgba(0, 0, 0, 0.33)",
"rgba(0, 0, 0, 0.34)",
"rgba(0, 0, 0, 0.35)",
"rgba(0, 0, 0, 0.36)",
"rgba(0, 0, 0, 0.37)",
"rgba(0, 0, 0, 0.38)",
"rgba(0, 0, 0, 0.39)",
"rgba(0, 0, 0, 0.40)",
"rgba(0, 0, 0, 0.41)",
"rgba(0, 0, 0, 0.42)",
"rgba(0, 0, 0, 0.43)",
"rgba(0, 0, 0, 0.44)",
"rgba(0, 0, 0, 0.45)"
];

var currentColor = 0;

function switchColor() {
    if (currentColor >= colors.length) currentColor = 0;

    $('.container-fluid').css('background-color', colors[currentColor++]);
    
   

    setTimeout(switchColor, 100);
}

switchColor();
