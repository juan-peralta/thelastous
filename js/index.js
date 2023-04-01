const menuToggle = document.getElementById('menu-toggle');
  
const offCanvasMenu = document.getElementById('off-canvas-menu');

menuToggle.addEventListener('click', function() {

  offCanvasMenu.classList.toggle('active');
  
  if (offCanvasMenu.classList.contains('active')) {
    menuToggle.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>` ;
  } else {
    menuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>`;
  }
});

// Obtenemos el elemento SVG necesario
const svg = document.querySelector("#my-svg");

// Creamos la animación de movimiento
const svgAnimation = gsap.to(svg, {
  x: 100,
  duration: 3,
  paused: true // Pausamos la animación por defecto
});

const svg2 = document.querySelector("#my-svg2");

// Creamos la animación de movimiento
const svgAnimation2 = gsap.to(svg2, {
  x: 100,
  duration: 3,
  paused: true // Pausamos la animación por defecto
});

// Cuando el cursor entra en la SVG, activa la animación
svg.addEventListener("mouseenter", () => {
  svgAnimation.play();
});

// Cuando el cursor sale de la SVG, reversa la animación
svg.addEventListener("mouseleave", () => {
  svgAnimation.reverse();
});

svg2.addEventListener("mouseenter", () => {
    svgAnimation2.play();
  });
  
  // Cuando el cursor sale de la SVG, reversa la animación
  svg2.addEventListener("mouseleave", () => {
    svgAnimation2.reverse();
  });


// Anima el path con un cambio en su atributo 'transform'
const [path1, path2] = document.querySelectorAll('path[d="M229.171 525.986L117.212 395.69L219.187 354.486L229.171 525.986Z"], path[d="M61.4914 533.981L48.8488 362.657L155.355 390.101L61.4914 533.981Z"]');

// Anima los paths con un cambio en su atributo 'transform'
const tl = gsap.timeline({paused: true})
  .to(path1, {duration: 1,  y:-20, rotation: -15, delay: 0.4})
  .to(path2, {duration: 1, y:-20, rotation: -15}, 0);

// Reproduce la animación al pasar el cursor sobre el SVG
document.getElementById("my-svg").addEventListener("mouseenter", () => {
  tl.play();
});

// Cuando el cursor sale de la SVG, reversa la animación
document.getElementById("my-svg").addEventListener("mouseleave", () => {
  tl.reverse();
});



const [path3, path4] = document.querySelectorAll('path[d="M222.171 639.986L110.212 509.69L212.187 468.486L222.171 639.986Z"], path[d="M99.9663 649.841L18.1685 498.775L126.56 480.122L99.9663 649.841Z"]');

// Anima los paths con un cambio en su atributo 'transform'
const tl2D = gsap.timeline({paused: true})
  .to(path3, {duration: 1,  y:-20, rotation: -15, delay: 0.4})
  .to(path4, {duration: 1, y:-20, rotation: -15}, 0);

// Reproduce la animación al pasar el cursor sobre el SVG
document.getElementById("my-svg2").addEventListener("mouseenter", () => {
    tl2D.play();
});

// Cuando el cursor sale de la SVG, reversa la animación
document.getElementById("my-svg2").addEventListener("mouseleave", () => {
    tl2D.reverse();
});