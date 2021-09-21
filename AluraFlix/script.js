var minhalistaslider = tns({
    "container": ".minha-lista-slider",
    "slideBy": 6,
    "edgePadding": 50,
    "fixedWidth": 300,
    "swipeAngle": false,
    "speed": 600,
    "controlsText": ["<", ">"],
    "mouseDrag": true,
    "loop": true,
    "gutter": 5,
    "controlsContainer": "#minha-lista-controls",
    "controlsPosition": "bottom",
})

var emaltaslider = tns({
    "container": ".em-alta-slider",
    "slideBy": 6,
    "edgePadding": 50,
    "fixedWidth": 300,
    "swipeAngle": false,
    "speed": 600,
    "controlsText": ["<", ">"],
    "mouseDrag": true,
    "loop": true,
    "gutter": 5,
    "controlsContainer": "#em-alta-controls",
    "controlsPosition": "bottom",
})

var popslider = tns({
    "container": ".pop-slider",
    "slideBy": 6,
    "edgePadding": 50,
    "fixedWidth": 300,
    "swipeAngle": false,
    "speed": 600,
    "controlsText": ["<", ">"],
    "mouseDrag": true,
    "loop": true,
    "gutter": 5,
    "controlsContainer": "#pop-controls",
    "controlsPosition": "bottom",
})

//Saber se a pagina foi scrollada
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})