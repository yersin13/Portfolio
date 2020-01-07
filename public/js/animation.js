// text animation JS
// Wrap every letter in a span

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
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



window.onload = function(){
    const EFFECT = document.querySelector("#about-me");
    
    window.addEventListener("scroll", scrollEffect);
        
        function scrollEffect(){
            
            
            if(window.scrollY>=455){
                console.log(scrollY);
                EFFECT.style.opacity = "1";
                EFFECT.style.transform = "translateY(0px)";
                EFFECT.style.transition = "1s ease-in-out";
            }
            else {
                EFFECT.style.opacity = "0";
                EFFECT.style.transform = "translateY(-50px)";
            }
        }
    scrollEffect();
}
