const rostrojoel = document.querySelector("#rostrojoel");

// Creamos la animación de movimiento
const joelrostroAnimacion = gsap.to(rostrojoel, {
  x: 5,
  y:50,
  duration: 3,
  paused: true // Pausamos la animación por defecto
});

// rostrojoel.addEventListener("mouseenter", () => {
//     joelrostroAnimacion.play();
//   });
  
//   // Cuando el cursor sale de la SVG, reversa la animación
//   rostrojoel.addEventListener("mouseleave", () => {
//     joelrostroAnimacion.reverse();
//   });
// const [r, r2] = document.querySelectorAll('path[d="M25.5 20C25.5 20.0508 25.4889 20.0743 25.4792 20.0893C25.467 20.1083 25.4366 20.1439 25.3601 20.1873C25.1936 20.2816 24.8994 20.3634 24.4348 20.4176C23.664 20.5074 22.6093 20.5047 21.3033 20.5013C21.0453 20.5007 20.7774 20.5 20.5 20.5C20.2226 20.5 19.9547 20.5007 19.6967 20.5013C18.3907 20.5047 17.336 20.5074 16.5652 20.4176C16.1006 20.3634 15.8064 20.2816 15.6399 20.1873C15.5634 20.1439 15.533 20.1083 15.5208 20.0893C15.5111 20.0743 15.5 20.0508 15.5 20C15.5 19.8784 15.567 19.6589 15.7894 19.3705C16.0045 19.0915 16.335 18.7884 16.776 18.5075C17.656 17.947 18.9378 17.5 20.5 17.5C22.0622 17.5 23.344 17.947 24.224 18.5075C24.665 18.7884 24.9955 19.0915 25.2106 19.3705C25.433 19.6589 25.5 19.8784 25.5 20Z"], path[d="M37.9984 19.9637C37.9968 19.9645 37.995 19.9652 37.9932 19.9659C37.8795 20.0132 37.6575 20.0502 37.2718 20.0608C36.9001 20.0711 36.4405 20.0566 35.8843 20.0386L35.864 20.038C35.3181 20.0203 34.691 20 34 20C33.309 20 32.6819 20.0203 32.136 20.038L32.1157 20.0386C31.5595 20.0566 31.0999 20.0711 30.7282 20.0608C30.3427 20.0502 30.1208 20.0133 30.0069 19.966C30.0136 19.9414 30.0267 19.903 30.0523 19.8497C30.099 19.7524 30.1752 19.6309 30.2852 19.4918C30.5049 19.2139 30.8351 18.8963 31.2551 18.5962C32.0975 17.9943 33.248 17.5 34.5 17.5C35.7379 17.5 36.6147 17.9828 37.1843 18.5452C37.4718 18.829 37.6806 19.133 37.8157 19.4045C37.9407 19.6557 37.9895 19.8521 37.9984 19.9637Z"]');


//   const ojos = gsap.timeline({paused: true})
//   .fromTo(r, {duration: 3, rotation: -2}, {duration: 3, rotation: 0, ease: "power2.inOut", yoyo: true, repeat: -1})
//   .fromTo(r2, {duration: 3, rotation: -2}, {duration: 3,  rotation: 0, ease: "power2.inOut", yoyo: true, repeat: -1})

//   document.getElementById("rostrojoel").addEventListener("mouseenter", () => {
//     ojos.play();
//   });
  
//   // Cuando el cursor sale de la SVG, reversa la animación
//   document.getElementById("rostrojoel").addEventListener("mouseleave", () => {
//     ojos.reverse();
//   });
  
  