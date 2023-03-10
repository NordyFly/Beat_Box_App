var bg = document.getElementById('particles-js');
document.addEventListener('keydown',function(event){
    bg.style.backgroundColor = getRandomColor();
 var key =event.key;
 playMusic(key);
 console.log(event);
});
function playMusic(key){
switch (key) {
    case "a":
        var audio = new Audio ("test1.mp3");
       audio.play();
       break;
       case "z":
        var audio = new Audio ("kick.mp3");
       audio.play();
       break;
       case "e":
        var audio = new Audio ("kick2.mp3");
       audio.play();
       break;
       case "r":
        var audio = new Audio ("Clap1.mp3");
       audio.play();
       break;
}
}
//Une fonction pour générer une couleur HEX aléatoire 
function getRandomColor(){
var letters ="0123456789ABCDEF";
var color = "#";
for (var i=0; i<6;i++) {
   color = color + letters[Math.floor(Math.random()*letters.length)]
    
}
return color;
}