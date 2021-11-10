import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
import { CvEntry } from "../main";

const componentStyle = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
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
   {
    padding: 50px 0;
    list-style-type: none;
  }
  li {
    background: #f5f5f5;
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
    border: 4px solid #f5f5f5;
  }
  li .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  .experience-content {
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
  .experience-content h2 {
    font-size: 1.5em;
    color: #3c3c3c;
    padding-bottom: 10px;
  }
  .experience-content .experience-time {
    color: #777;
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  .experience-content p {
    color: #1a1a1a;
    font-size: 0.95em;
  }
  .experience-content:before {
    content: "";
    background: #f5f5f5;
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
        box-shadow: 0 0 0 0px var(--color-primary);
      }
      to {
        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
      }
    }
    li:hover::before {
      animation: circle 1.2s infinite;
    }
  }
`;

@customElement("experience-content")
class ExperienceContent extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  cvEntry!: CvEntry;

  @property()
  index!: number;

  render() {
    return html`
      <li class=${this.index % 2 === 0 ? "even" : "odd"}>
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
