function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function handleScrollAnimation() {
  const heroImg = document.querySelector("#hero img");
  const heroText = document.querySelector("#hero .display-4");

  if (isElementInViewport(heroImg)) {
    heroImg.classList.add("visible");
  }

  if (isElementInViewport(heroText)) {
    heroText.classList.add("visible");
  }

  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    if (isElementInViewport(bar)) {
      bar.classList.add("progressed");
    }
  });

  const contactSection = document.querySelector("#contact");
  if (isElementInViewport(contactSection)) {
    contactSection.classList.add("visible");
  }
}

window.addEventListener("scroll", handleScrollAnimation);

window.addEventListener("load", handleScrollAnimation);
