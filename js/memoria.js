const [svg, svg2] = document.querySelectorAll('#my-svg, #my-svg2');

const tl2 = gsap.timeline({ paused: true })
  .to(svg, { x: 100, duration: 3 })
  .to(svg2, { x: 100, duration: 3, delay: 1 }, 0);

document.getElementById("my-svg").addEventListener("mouseenter", () => {
  tl2.play();
});

document.getElementById("my-svg").addEventListener("mouseleave", () => {
  tl2.reverse();
});