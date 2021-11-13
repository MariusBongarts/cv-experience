import { env } from "../env";
import { HttpService } from "./HttpService";

export interface Config {
  experiences: Experience[];
  design: Design[];
}

export interface Experience {
  from: string;
  to: string;
  company: string;
  job_title: string;
  description: string;
  logo: string;
}

export interface Design {
  primary_color: string;
  accent_color: string;
  background_color: string;
  experience_background: string;
  font_color: string;
  header_font_color: string;
}

export class GoogleSheetService extends HttpService<Config> {
  constructor(private spreadsheetId: string) {
    super(env.api);
  }

  getConfig() {
    return super.get(
      `?sheet=experiences,design&spreadsheetId=${this.spreadsheetId}`
    );
  }
}
