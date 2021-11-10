import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { doAnimation } from "./animation";
import { env } from "./env";
import "./components/experience-content";

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
 *, *:before, *:after {
	 margin: 0;
	 padding: 0;
	 box-sizing: border-box;
}
:root {
	--color-primary: #04c2c9;
    --color-action: #e31b6d;
    --color-bg: #d2dbdd;
    --color-chip-bg: #f2f2f2;
    --color-chip-bg-hover: #e6e6e6;
  }

.experience {
	 width: 100%;
	 height: 100%;
	 color: #444;
	 background: #f9f9f9;
	 font-size: 16px;
	 font-family: 'PT Sans', sans-serif;
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
	 content: '';
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
	 content: '';
	 background: #f5f5f5;
	 position: absolute;
	 top: 0;
	 left: -35px;
	 width: 35px;
	 height: 5px;
}

/* ############################ RESPONSIVE ############################### */

 @media screen and (min-width: 960px) {
	 .experience .content ul li {
		 margin: 0 auto;
	}
	 .experience .content ul li .experience-content {
		 width: 40vw;
	}
	 .experience .content ul li:nth-child(odd) .experience-content {
		 left: 63px;
	}
	 .experience .content ul li:nth-child(odd) .experience-content:before {
		 left: -50px;
		 width: 50px;
	}
	 .experience .content ul li:nth-child(even) .experience-content {
		 left: calc(-40vw - 57px);
		 -webkit-border-radius: 5px 0px 5px 5px;
		 -moz-border-radius: 5px 0px 5px 5px;
		 border-radius: 5px 0px 5px 5px;
	}
	 .experience .content ul li:nth-child(even) .experience-content:before {
		 left: auto;
		 right: -50px;
		 width: 50px;
	}
	 .experience .content ul li:nth-child(odd) .hidden {
		 margin-left: 10vw;
	}
	 .experience .content ul li:nth-child(even) .hidden {
		 margin-left: -10vw;
	}
}
 
  </style>
`;

const DEFAULT_MAX_ARTICLES = 10;
@customElement("my-cv")
class MyCv extends LitElement {
  @property()
  cvEntries: CvEntry[] = [];

  constructor() {
    super();
    this.innerHTML += globalStyles;
  }

  async firstUpdated() {
    this.cvEntries = await (
      await fetch(
        `${env.api}&spreadsheetId=1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s`
      )
    ).json();
    doAnimation();
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }

  render() {
    return html`
      <section class="experience">
        <div class="content">
          <ul>
            ${this.cvEntries.length
              ? this.cvEntries.map(
                  (cvEntry, index) => html`
                    <experience-content
                      .cvEntry=${cvEntry}
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
