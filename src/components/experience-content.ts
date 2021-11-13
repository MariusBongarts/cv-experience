import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
import { Experience } from "../services/GoogleSheetService";

const componentStyle = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .experience {
    background: var(--experience_background);
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
   {
    padding: 50px 0;
    list-style-type: none;
  }
  li {
    background: var(--experience_background);
    position: relative;
    margin-left: 20px;
    width: 5px;
    padding-bottom: 40px;
  }
  li:last-child {
    padding-bottom: 7px;
  }
  li:before {
    content: "";
    background: #002440;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 4px solid var(--experience_background);
    border-radius: 50%;

  }
  li .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  .experience-content {
    background: var(--experience_background);
    position: relative;
    top: 7px;
    left: 48px;
    width: calc(100vw - 80px);
    padding: 20px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }
  .experience-content h3 {
    font-size: 1.5em;
    color: var(--header_font_color);
  }
  .experience-content .experience-time {
    color: var(--font_color);
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  .experience-content p {
    color: var(--font_color);
    font-size: 1em;
  }
  .experience-content:before {
    content: "";
    background: var(--experience_background);
    position: absolute;
    top: 0;
    left: -35px;
    width: 35px;
    height: 5px;
  }

  @media screen and (min-width: 960px) {
    li {
      margin: 0 auto;
    }
    .experience-content {
      width: 40vw;
    }
    li.odd .experience-content {
      left: 63px;
    }
    li.odd .experience-content:before {
      left: -52px;
      width: 52px;
    }
    li.even .experience-content {
      left: calc(-40vw - 57px);
      -webkit-border-radius: 5px 0px 5px 5px;
      -moz-border-radius: 5px 0px 5px 5px;
      border-radius: 5px 0px 5px 5px;
    }
    li.even .experience-content:before {
      left: auto;
      right: -52px;
      width: 52px;
    }
    li.odd .hidden {
      margin-left: 10vw;
    }
    li.even .hidden {
      margin-left: -10vw;
    }

    @keyframes circle {
      from {
        box-shadow: 0 0 0 0px var(--primary_color);
      }
      to {
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
      }
    }
    li:hover::before {
      animation: circle 1.2s infinite;
      background: var(--primary_color);
    }
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  .logo {
    height: 35px;
    width: 35px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  }
`;

@customElement("experience-content")
class ExperienceContent extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  experience!: Experience;

  @property()
  index!: number;

  render() {
    return html`
      <li class=${this.index % 2 === 0 ? "even" : "odd"}>
        <div class="experience-content hidden">
          <div class="header">
            ${this.experience.logo
              ? html`<div class="logo">
                  <img src="${this.experience.logo}" alt="company-logo" />
                </div>`
              : html``}
            <h3>${this.experience.job_title}</h3>
          </div>
          <div class="experience-time">
            <h4>${this.experience.company}</h4>
          </div>
          <div class="experience-time">
            ${this.experience.from} - ${this.experience.to}
          </div>
          <p>${this.experience.description}</p>
        </div>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "experience-content": ExperienceContent;
  }
}
