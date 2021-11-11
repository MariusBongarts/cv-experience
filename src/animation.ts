export function doAnimation(rootElement: ShadowRoot) {
  window.onscroll = () => showExperiences();

  function showExperiences() {
    const experiences = [
      ...rootElement.querySelectorAll(
        ".experience .content experience-content"
      ),
    ].map((experience) => experience.shadowRoot?.querySelector(".hidden"));
    experiences
      .filter((experience) => !!experience)
      .forEach((experience, index) => animateElement(experience!, index));
  }

  function animateElement(element: Element, index: number) {
    setTimeout(() => {
      const elementIsAtBottomOfScreen =
        element.getBoundingClientRect().bottom - window.innerHeight <
        element.clientHeight;
      if (elementIsAtBottomOfScreen) {
        console.log(index);
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
    }, index * 100);
  }

  setTimeout(() => {
    showExperiences();
  }, 0);
}
