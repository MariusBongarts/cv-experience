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

  li {
    background: var(--experience_background);
    position: relative;
    margin-left: 20px;
    width: 5px;
    padding-bottom: 40px;
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
  li:last-child {
    padding-bottom: 30px;
  }
  li::before {
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
    width: calc(100vw - 90px);
    padding: 20px 40px;
    text-align: center;
    -webkit-border-radius: 0 5px 5px;
    -moz-border-radius: 0 5px 5px;
    border-radius: 0 5px 5px;
  }

  @media screen and (min-width: 1200px) {
    .experience-content {
      width: calc(100vw - 500px);
    }
  }
  @media screen and (min-width: 900px) {
    .experience-content {
      width: calc(100vw - 300px);
    }
  }
  @media screen and (min-width: 600px) {
    .experience-content {
      width: calc(100vw - 200px);
    }
  }

  .experience-content h3 {
    font-size: 1.5em;
    color: var(--header_font_color);
  }
  .experience-content .experience-time,
  .company {
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
  .company {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }
  .company .feather-map-pin {
    margin-left: 15px;
    margin-right: 4px;
  }
`;

@customElement("experience-content")
class ExperienceContent extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  experience!: Experience;

  @property()
  index!: number;

  dateFrom!: Date;
  dateTo!: Date;

  connectedCallback() {
    super.connectedCallback();
    this.dateTo = this.getDateFromString(this.experience.to);
    this.dateFrom = this.getDateFromString(this.experience.from);
  }

  getDateFromString(dateStr: string) {
    return isNaN(new Date(dateStr).getTime()) ? new Date() : new Date(dateStr);
  }

  getMonthFromDate(date: Date) {
    return date.toLocaleString("default", { month: "long" });
  }

  monthDiff() {
    return (
      this.dateTo.getMonth() -
      this.dateFrom.getMonth() +
      12 * (this.dateTo.getFullYear() - this.dateFrom.getFullYear()) +
      1
    );
  }

  get duration() {
    const months = this.monthDiff();
    const monthInYear = months % 12;
    const years = months < 12 ? 0 : Math.round(months / 12);
    return `${years > 0 ? `${years} ${years === 1 ? "Year " : "Years "}` : ""}
            ${
              monthInYear === 0
                ? ""
                : `${monthInYear}${monthInYear === 1 ? " Month" : " Months"}`
            }`;
  }

  get experienceTime() {
    const today = new Date();
    const isTodayDate =
      this.dateTo.getMonth() === today.getMonth() &&
      this.dateTo.getFullYear() === today.getFullYear();
    return `${this.getMonthFromDate(
      this.dateFrom
    )} ${this.dateFrom.getFullYear()}
            -
            ${
              isTodayDate
                ? "Today"
                : `${this.getMonthFromDate(
                    this.dateTo
                  )} ${this.dateTo.getFullYear()}`
            }`;
  }

  render() {
    return html`
      <li class=${this.index % 2 === 0 ? "even" : "odd"}>
        <div class="experience-content hidden">
          <div class="header">
            ${
              this.experience.logo
                ? html`<div class="logo">
                    <img src="${this.experience.logo}" alt="company-logo" />
                  </div>`
                : html``
            }
            <h3>${this.experience.job_title}</h3>
          </div>
          <div class="company">
            <h4>${this.experience.company}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <h4>${this.experience.city}</h4>
          </div>
          <div>

          </div>
          <div class="experience-time">
            <span>${this.experienceTime}</span>
            <span class="duration">&#183 ${this.duration}</span>
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
