console.log("app.js is connected");


window.addEventListener("load", () => {
    // code here
    const track = document.getElementById("marqueeTrack");
    const group = document.getElementById("marqueeGroup");

    // get exact width of 1 group
    const groupWidth = group.offsetWidth;

    // set CSS variable dynamically
    track.style.setProperty('--marquee-width', `${groupWidth}px`);
});


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".video-section",
        start: "top 30%",      // যখন সেকশনের টপ স্ক্রিনের টপে আসবে
        end: "+=100%",         // ২০০০ পিক্সেল স্ক্রল পর্যন্ত এনিমেশন চলবে
        scrub: 1,              // স্ক্রল অনুযায়ী এনিমেশন আগাবে-পিছাবে
        pin: true,             // এনিমেশন শেষ না হওয়া পর্যন্ত সেকশন আটকে থাকবে
        anticipatePin: 1
    }
});

// এনিমেশন স্টেপস:
tl.to(".video-wrapper", {
    width: "100%",      // ফুল উইডথ
    height: "100%",
    y: "-30vh",
    ease: "none"
}, "start") // "start" লেবেল দিলে সব এনিমেশন একসাথে শুরু হবে

    .to(".text:first-child", {
        x: 0,
        y: "-30vh",            // বামের টেক্সট বামে সরে যাবে
    }, "start")

    .to(".text:last-child", {
        x: 0,
        y: "-30vh",            // ডানের টেক্সট ডানে সরে যাবে
    }, "start")

    .to(".video-section-container", {
        gap: 16,
    }, "start");
