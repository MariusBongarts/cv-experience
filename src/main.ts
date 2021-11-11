import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { doAnimation } from "./animation";
import "./components/experience-content";
import {
  Config,
  cvExperienceConfigService,
  Design,
} from "./services/ConfigurationService";

export interface CvEntry {
  from: string;
  to: string;
  company: string;
  job_title: string;
  description: string;
}

const globalStyles = `
<style>
@import url(https://fonts.googleapis.com/css?family=PT+Sans);
</style>
`;

const colors = ({
  accent_color,
  primary_color,
  background_color,
  experience_background,
}: Design) => `
<style>
:root {
  --primary_color: ${primary_color};
  --accent_color: ${accent_color};
  --background_color: ${background_color};
  --experience_background: ${experience_background};
}
</style>
`;

const componentStyle = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .experience {
    width: 100%;
    height: 100%;
    color: #444;
    background: var(--background_color);
    font-size: 16px;
    font-family: "PT Sans", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  section {
    position: relative;
    width: 100%;
  }

  /*##### EXPERIENCE SECTION #####*/
  .experience {
    background: var(--background_color);
    padding: 50px 0;
    overflow-x: hidden;
  }
  .experience .content {
    text-align: center;
  }
  .experience .content h1 {
    font-size: 2em;
    color: #fff;
  }
  .experience .content ul {
    padding: 50px 0;
    list-style-type: none;
  }
`;

const DEFAULT_MAX_ARTICLES = 10;
@customElement("cv-experience")
class CvExperience extends LitElement {
  static styles = [componentStyle];

  @property()
  config: Config | null = null;

  constructor() {
    super();
    this.innerHTML += globalStyles;
  }

  async firstUpdated() {
    this.config = await cvExperienceConfigService.getConfig();
    this.innerHTML += colors(this.config.design[0]);
    doAnimation(this.shadowRoot!);
  }

  render() {
    return html`
      <section class="experience">
        <div class="content">
          <ul>
            ${this.config
              ? this.config.experiences.map(
                  (experience, index) => html`
                    <experience-content
                      .experience=${experience}
                      .index=${index}
                    ></experience-content>
                  `
                )
              : html`<span>Loading...</span>`}
          </ul>
        </div>
      </section>
    `;
  }
}
