function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const matchMedia = window.matchMedia('(max-width: 768px)');
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: matchMedia.matches ? true : true,
  });
  
  if(matchMedia.matches){
       locoScroll.on("scroll", ScrollTrigger.update);
  }else{
       locoScroll.on("scroll", ScrollTrigger.update);
  }

 

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  if(matchMedia.matches){
    const paddedIndex = index.toString().padStart(6, '0');
    return `./mobile/S1_${paddedIndex}.jpg`;
  }else{
    const paddedIndex = index.toString().padStart(4, '0');
    return `./frames/Web_Animation${paddedIndex}.jpg`;
  }
}
const matchMedia = window.matchMedia('(max-width: 760px)');

const frameCount =  matchMedia.matches ? 758  :962;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: matchMedia.matches ? `480% top` : `1270% top` ,
    scroller: `#main`,
  },
  onUpdate: render,
});


images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: matchMedia.matches ? `480% top` : `1270% top`,
});



if(!matchMedia.matches){
  
gsap.to(".first_class", {
  scrollTrigger: {
    trigger: `.first_class`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})

gsap.to(".second_class", {
  scrollTrigger: {
    trigger: `.second_class`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to(".third_class", {
  scrollTrigger: {
    trigger: `.third_class`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to(".fourth_class", {
  scrollTrigger: {
    trigger: `.fourth_class`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to(".fifth_class", {
  scrollTrigger: {
    trigger: `.fifth_class`,
    start: `top top`,
    end: `3500px top`,
    pin: true,
    scroller: `#main`
  }
})
}