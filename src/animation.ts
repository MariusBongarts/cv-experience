export function doAnimation() {
  window.onscroll = () => showExperiences();

  function showExperiences() {
    const experiences = [
      ...document.querySelectorAll(".experience .content experience-content"),
    ].map((experience) => experience.shadowRoot?.querySelector(".hidden"));
    console.log(experiences);
    for (let experience of experiences) {
      experience && animateElement(experience);
    }
  }

  function animateElement(element: Element) {
    const elementIsAtBottomOfScreen =
      element.getBoundingClientRect().bottom - window.innerHeight <
      element.clientHeight;
    if (elementIsAtBottomOfScreen) {
      const ANIMATION_DURATION = 600;
      element.animate(
        {
          opacity: "1",
          marginLeft: "0",
        },
        {
          duration: ANIMATION_DURATION,
          // iterations: Infinity,
        }
      );
      setTimeout(() => {
        element.classList.remove("hidden");
      }, ANIMATION_DURATION);
    }
  }

  setTimeout(() => {
    showExperiences();
  }, 1000);
}