// SariFresh Midterm Practical Examination
// HTML, Tailwind CSS, JavaScript, GSAP, and ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

const rootElement = document.documentElement;
const darkModeToggle = document.querySelector("#darkModeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeLabel = document.querySelector("#themeLabel");
const replayButton = document.querySelector("#replayBtn");
const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

// Apply light or dark theme.
function applyTheme(isDark) {
    rootElement.classList.toggle("dark", isDark);

    darkModeToggle.setAttribute("aria-pressed", String(isDark));
    darkModeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeIcon.textContent = isDark ? "☀" : "☾";
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

// Load the saved theme, if available.
const savedTheme = localStorage.getItem("sarifresh-theme");

applyTheme(savedTheme ? savedTheme === "dark" : false);

// Toggle between light and dark mode.
darkModeToggle.addEventListener("click", () => {
    const isDark = !rootElement.classList.contains("dark");

    applyTheme(isDark);

    localStorage.setItem(
        "sarifresh-theme",
        isDark ? "dark" : "light"
    );
});

// Intro animation timeline.
// The power2.out ease gives the animation a smooth finish.
const introTimeline = gsap.timeline({
    paused: true,
    defaults: {
        duration: 0.65,
        ease: "power2.out"
    }
});

introTimeline
    .from(".hero-copy .hero-item", {
        y: 24,
        opacity: 0,
        stagger: 0.12
    })
    .from(
        ".hero-visual",
        {
            opacity: 0,
            scale: 0.94,
            duration: 0.8
        },
        "-=0.4"
    )
    .from(
        ".hero-visual > div",
        {
            opacity: 0,
            y: 14,
            stagger: 0.08,
            duration: 0.4
        },
        "-=0.35"
    );

// Respect the visitor's reduced-motion preference.
if (prefersReducedMotion.matches) {
    gsap.set(
        ".hero-copy .hero-item, .hero-visual, .hero-visual > div",
        {
            clearProps: "all",
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1
        }
    );
} else {
    introTimeline.play();
}

// Replay the intro when the button is clicked.
replayButton.addEventListener("click", () => {
    if (prefersReducedMotion.matches) {
        return;
    }

    introTimeline.restart();
});

// GSAP matchMedia handles animations based on motion preferences.
const motionSettings = gsap.matchMedia();

motionSettings.add(
    "(prefers-reduced-motion: no-preference)",
    () => {
        // Reveal each section below the hero while scrolling.
        gsap.utils.toArray(".reveal").forEach((section) => {
            gsap.from(section, {
                y: 28,
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Scroll progress bar uses scrub and no easing.
        gsap.to("#progressBar", {
            scaleX: 1,
            ease: "none",

            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        // Add a small hover lift to product cards.
        const productCards = gsap.utils.toArray(".product-card");

        productCards.forEach((card) => {
            const hoverIn = () => {
                gsap.to(card, {
                    y: -5,
                    duration: 0.2,
                    ease: "power1.out"
                });
            };

            const hoverOut = () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.2,
                    ease: "power1.out"
                });
            };

            card.addEventListener("mouseenter", hoverIn);
            card.addEventListener("mouseleave", hoverOut);
        });
    }
);

// Keep all content visible if reduced motion is enabled.
motionSettings.add(
    "(prefers-reduced-motion: reduce)",
    () => {
        gsap.set(".reveal", {
            clearProps: "all",
            opacity: 1,
            y: 0
        });

        gsap.set("#progressBar", {
            scaleX: 1
        });

        gsap.set(".product-card", {
            clearProps: "transform"
        });
    }
);

// Reapply the correct animation behavior if the preference changes.
prefersReducedMotion.addEventListener("change", () => {
    window.location.reload();
});

// Contact form demo.
// This displays a confirmation but does not send an actual email.
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formFeedback.textContent =
        "Thanks! This demo form is working visually, but it does not send your message yet.";

    contactForm.reset();
});