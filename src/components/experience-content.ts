import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
import { CvEntry } from "../main";

const componentStyle = css`
  /*##### EXPERIENCE SECTION #####*/
  .experience {
    background: #002440;
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
  .experience .content ul li {
    background: #f5f5f5;
    position: relative;
    margin-left: 20px;
    width: 5px;
    padding-bottom: 40px;
  }
  .experience .content ul li:last-child {
    padding-bottom: 7px;
  }
  .experience .content ul li:before {
    content: "";
    background: #002440;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 4px solid #f5f5f5;
  }
  .experience .content ul li .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  .experience .content ul li .experience-content {
    background: #f5f5f5;
    position: relative;
    top: 7px;
    left: 48px;
    width: calc(100vw - 100px);
    padding: 20px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }
  .experience .content ul li .experience-content h2 {
    font-size: 1.5em;
    color: #3c3c3c;
    padding-bottom: 10px;
  }
  .experience .content ul li .experience-content .experience-time {
    color: #777;
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  .experience .content ul li .experience-content p {
    color: #1a1a1a;
    font-size: 0.95em;
  }
  .experience .content ul li .experience-content:before {
    content: "";
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: -35px;
    width: 35px;
    height: 5px;
  }
`;

@customElement("experience-content")
class ExperienceContent extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  cvEntry!: CvEntry;

  render() {
    return html`
      <li>
        <div class="experience-content hidden">
          <h2>${this.cvEntry.company}</h2>
          <div class="experience-time">
            ${this.cvEntry.from} - ${this.cvEntry.to}
          </div>
          <p>${this.cvEntry.description}</p>
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
