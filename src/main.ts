import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { doAnimation } from "./animation";
import "./components/experience-content";
import {
  Config,
  Design,
  GoogleSheetService,
} from "./services/GoogleSheetService";

const SPREADSHEET_CV_EXPERIENCE =
  "1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s";

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
  font_color,
  header_font_color,
}: Design) => `
<style>
:root {
  --primary_color: ${primary_color};
  --accent_color: ${accent_color};
  --background_color: ${background_color};
  --experience_background: ${experience_background};
  --font_color: ${font_color};
  --header_font_color: ${header_font_color};
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

@customElement("cv-experience")
class CvExperience extends LitElement {
  static styles = [componentStyle];
  configService!: GoogleSheetService;

  @property()
  config: Config | null = null;

  @property()
  spreadsheetId: string = "";

  constructor() {
    super();
    this.innerHTML += globalStyles;
  }

  async firstUpdated() {
    this.configService = new GoogleSheetService(
      this.spreadsheetId || SPREADSHEET_CV_EXPERIENCE
    );
    this.config = await this.configService.getConfig();
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
