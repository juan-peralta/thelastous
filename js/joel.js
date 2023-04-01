const joel = document.querySelector("#joel");

// Creamos la animación de movimiento
const joelAnimacion = gsap.to(joel, {
  x: 500,
  duration: 30,
  paused: true // Pausamos la animación por defecto
});





  //torso
  const [brazo1, brazo2, piernaizquierda,piernaderecha, piederecho, pieizquierdo] = document.querySelectorAll('path[d="M31.8754 56.876L35.5551 52.6942L40.6815 56.9311L40.8201 57.0457H41H45.0634L45.9504 63.569L31.3912 68.9074L19.5207 69.8966L13.7025 68.9269L9.86097 66.0457L2.45474 55.7758L1.03192 51.033L2.33553 48.0782L17.1716 47.0624L22.6106 53.8137L22.8349 54.0921L23.1709 53.9699L28.2818 52.1114L31.0702 56.8012L31.4214 57.3919L31.8754 56.876Z"],path[d="M42.5332 65.1753L43.4664 55.3771L52.4438 52.5421L60.1104 56.8545L61.9122 60.9086L58.1796 65.1078L53.8654 67.6111H48.5967L42.5332 65.1753Z"],path[d="M17 76H28V81.5L25 88L17.1667 86.5L16.6667 79L17 76Z"],path[d="M28 76H43L41.5 80L38 82.5L28 82V76Z"],path[d="M37.7296 81.7826C37.5188 82.8556 36.578 84.1993 35.3515 85.2333C34.747 85.7428 34.0971 86.1561 33.4723 86.4133C32.8426 86.6726 32.2752 86.7588 31.8145 86.6683L31.7958 86.6646C31.2074 86.5491 30.6782 86.4451 30.2115 86.3167C29.7387 86.1865 29.3653 86.0401 29.0866 85.8566C28.8176 85.6793 28.6436 85.4723 28.5487 85.2069C28.4507 84.9325 28.42 84.547 28.5297 83.9883C28.6519 83.3662 28.7411 83.0298 28.841 82.8213C28.9201 82.6563 28.998 82.5843 29.1547 82.5083C29.3053 82.4352 29.4887 82.3767 29.7705 82.2869C29.8837 82.2508 30.0127 82.2096 30.1619 82.1604C30.6273 82.007 31.2231 81.7933 31.993 81.4397C32.6249 81.5353 33.3423 81.4917 34.0267 81.417C34.3695 81.3796 34.7162 81.3328 35.0492 81.2878C35.0825 81.2833 35.1156 81.2788 35.1485 81.2744C35.515 81.225 35.8626 81.1792 36.186 81.1488C36.8653 81.085 37.3215 81.104 37.5707 81.2139C37.671 81.2581 37.7069 81.304 37.7265 81.3492C37.7516 81.4069 37.7785 81.5336 37.7296 81.7826Z"], path[d="M28.7133 88.7292C28.4703 89.9661 27.5728 90.9924 26.2437 91.6304C24.9145 92.2684 23.1823 92.4995 21.3674 92.143C19.7156 91.8185 18.5513 90.3352 17.8633 88.4403C17.1798 86.5578 17.0318 84.4324 17.292 83.1073C17.3342 82.8928 17.3755 82.7467 17.411 82.6502C17.426 82.662 17.4424 82.6754 17.4605 82.6907C17.5987 82.8077 17.763 82.9745 17.9746 83.1927C17.9952 83.2139 18.0161 83.2356 18.0374 83.2575C18.8614 84.1084 20.183 85.473 22.2143 85.872C22.9698 86.0204 23.7208 86.1341 24.4223 86.2404C24.6196 86.2703 24.8131 86.2996 25.0016 86.3289C25.8721 86.4643 26.6331 86.5992 27.2513 86.7921C27.8762 86.9871 28.2831 87.2203 28.5116 87.5033C28.7189 87.76 28.8321 88.1242 28.7133 88.7292Z"]');

  const torsomove = gsap.timeline({paused: true})
  .fromTo(brazo1, {duration: 5, rotation: 10}, {duration: 5, rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})
  .fromTo(brazo2, {duration: 5, rotation: 10}, {duration: 5, rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})
  .fromTo(piernaizquierda, {duration: 5, rotation: 10}, {duration: 5, rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})
  .fromTo(piernaderecha, {duration: 5,rotation: 10}, {duration: 5,  rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})
  .fromTo(piederecho, {duration: 5,rotation: 10}, {duration: 5,  rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})
  .fromTo(pieizquierdo, {duration: 5,rotation: 10}, {duration: 5,  rotation: -10, ease: "power2.inOut", yoyo: true, repeat: -1})



  window.addEventListener("scroll", () => {
    // Obtener la posición vertical actual del scroll
    const scrollPos = window.scrollY;
  
    // Actualizar la posición horizontal del elemento en función de la posición del scroll
    joelAnimacion.progress(scrollPos / (document.body.clientHeight - window.innerHeight));

  });

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    torsomove.progress(scrollPos / (document.body.clientHeight - window.innerHeight));
  });