console.log("app.js is connected");

// --- 1. Marquee Setup ---
window.addEventListener("load", () => {
  const track = document.getElementById("marqueeTrack");
  const group = document.getElementById("marqueeGroup");

  if (track && group) {
    const groupWidth = group.offsetWidth;
    track.style.setProperty("--marquee-width", `${groupWidth}px`);
  }
});

// --- 2. GSAP Plugins ---
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// --- 3. Video Section Animation ---
const videoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-section",
    start: "top 30%",
    end: "+=100%",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

videoTimeline
  .to(
    ".video-wrapper",
    {
      width: "100%",
      height: "100%",
      y: "-30vh",
      ease: "none",
    },
    "start",
  )
  .to(
    ".text:first-child, .text:last-child",
    {
      x: 0,
      y: "-30vh",
      ease: "none",
    },
    "start",
  )
  .to(
    ".video-section-container",
    {
      gap: 16,
      ease: "none",
    },
    "start",
  );

// --- 4. Swiper Setup ---
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
  },
});

// --- 5. Circular Text Rotation ---
const circleText = document.getElementById("circleText");
let rotationData = { angle: 0, speed: 0.5 }; // Object used for easy scoping

function rotateCircle() {
  rotationData.angle = (rotationData.angle + rotationData.speed) % 360;
  if (circleText) {
    circleText.setAttribute(
      "transform",
      `rotate(${rotationData.angle}, 100, 100)`,
    );
  }
  requestAnimationFrame(rotateCircle);
}
rotateCircle();

const circleBtn = document.querySelector(".circle-btn");
if (circleBtn) {
  circleBtn.addEventListener("mouseenter", () => (rotationData.speed = 0.1));
  circleBtn.addEventListener("mouseleave", () => (rotationData.speed = 0.5));
}

// --- 6. Pricing Toggle Logic ---
function initAllPricingCards() {
  document.querySelectorAll("[data-pricing-card]").forEach((card) => {
    const toggle = card.querySelector(".pricing-toggle");
    if (!toggle) return;

    const priceEls = card.querySelectorAll(".dev-price");
    const updatePrices = (isDevMode) => {
      card.classList.toggle("dev-active", isDevMode);
      priceEls.forEach((el) => {
        el.innerText = isDevMode
          ? el.dataset.priceDev || el.innerText
          : el.dataset.priceDefault || el.innerText;
      });
    };

    updatePrices(toggle.checked);
    toggle.addEventListener("change", (e) => updatePrices(e.target.checked));
  });
}
initAllPricingCards();

// --- 7. Card Hover/Scroll Animation ---
const cardTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-section",
    start: "top 80%",
    end: "top 0%",
    toggleActions: "play reverse play reverse",
  },
});

cardTl
  .to(".left", { x: -120, rotate: -20, duration: 0.7, ease: "power3.out" })
  .to(".right", { x: 120, rotate: 20, duration: 0.7, ease: "power3.out" }, "<")
  .to(
    ".center",
    { y: -24, scale: 1.05, duration: 0.7, ease: "power3.out" },
    "<",
  );

// --- 8. Avatar Motion Paths ---
// ১. ফাংশনটি আপডেট করুন যাতে start/end কাস্টমাইজ করা যায়
const createMotionPath = (id, path, duration, start = 0, end = 1) => {
  gsap.to(id, {
    duration,
    repeat: -1,
    ease: "none",
    motionPath: {
      path,
      align: path,
      alignOrigin: [0.5, 0.5],
      start: start,
      end: end,
    },
  });
};

MotionPathPlugin.convertToPath("#innermostPath");

// ২. অবতার ১ শুরু হবে একদম শুরু (0) থেকে
createMotionPath("#avatar1", "#outerPath", 15, 0, 1);

// ৩. অবতার ২ তার নিজের পাথে থাকবে
createMotionPath("#avatar2", "#innerPath", 12, 0, 1);

// ৪. অবতার ৩ একই পাথে থাকবে কিন্তু সে অর্ধেক বা কিছুটা গ্যাপে শুরু হবে
// এখানে start: 0.1 মানে সে অবতার ১ এর ১০% পেছনে থাকবে
createMotionPath("#avatar3", "#outerPath", 15, 0.1, 1.1);

// --- 9. Matter.js Physics Engine ---
const {
  Engine,
  Runner,
  Bodies,
  Composite,
  MouseConstraint,
  Mouse,
  Events,
  Body,
} = Matter;
const engine = Engine.create();
const container = document.getElementById("matter-box");

if (container) {
  const thickness = 60;
  const getSpecs = () => ({
    w: container.clientWidth,
    h: container.clientHeight,
  });

  let specs = getSpecs();
  const ground = Bodies.rectangle(
    specs.w / 2,
    specs.h + thickness / 2,
    specs.w,
    thickness,
    { isStatic: true },
  );
  const leftWall = Bodies.rectangle(
    -thickness / 2,
    specs.h / 2,
    thickness,
    specs.h,
    { isStatic: true },
  );
  const rightWall = Bodies.rectangle(
    specs.w + thickness / 2,
    specs.h / 2,
    thickness,
    specs.h,
    { isStatic: true },
  );
  const topWall = Bodies.rectangle(
    specs.w / 2,
    -thickness / 2,
    specs.w,
    thickness,
    { isStatic: true },
  );

  Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);

  const pillData = Array.from(document.querySelectorAll(".pill")).map(
    (elem, i) => {
      const width = elem.offsetWidth;
      const height = elem.offsetHeight;
      const body = Bodies.rectangle(
        Math.random() * specs.w,
        -100 - i * 50,
        width,
        height,
        {
          chamfer: { radius: height / 2 },
          restitution: 0.7,
          frictionAir: 0.03,
          angle: Math.random() - 0.5,
        },
      );
      Composite.add(engine.world, body);
      setTimeout(() => (elem.style.opacity = "1"), 100);
      return { body, elem };
    },
  );

  const mouse = Mouse.create(container);
  Composite.add(
    engine.world,
    MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    }),
  );

  Events.on(engine, "afterUpdate", () => {
    pillData.forEach(({ body, elem }) => {
      const { x, y } = body.position;
      elem.style.transform = `translate(${x - elem.offsetWidth / 2}px, ${y - elem.offsetHeight / 2}px) rotate(${body.angle}rad)`;
    });
  });

  const runner = Runner.create();
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        Runner.run(runner, engine);
        observer.disconnect();
      }
    },
    { threshold: 0.2 },
  );
  observer.observe(container);

  window.addEventListener("resize", () => {
    const newSpecs = getSpecs();
    Body.setPosition(ground, {
      x: newSpecs.w / 2,
      y: newSpecs.h + thickness / 2,
    });
    Body.setPosition(rightWall, {
      x: newSpecs.w + thickness / 2,
      y: newSpecs.h / 2,
    });
  });
}
