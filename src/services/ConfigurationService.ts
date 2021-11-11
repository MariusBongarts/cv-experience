import { env } from "../env";
import { HttpService } from "./HttpService";

const SPREADSHEET_CV_EXPERIENCE =
  "1SjV3Ho0_EV7oxyf9Mz_JjQJ77CiFRtFR8-YOqi7RJ5s";

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
}

class GoogleSheetService extends HttpService<Config> {
  constructor(private spreadsheetId: string) {
    super(env.api);
  }

  getConfig() {
    return super.get(
      `?sheet=experiences,design&spreadsheetId=${this.spreadsheetId}`
    );
  }
}

export const cvExperienceConfigService = new GoogleSheetService(
  SPREADSHEET_CV_EXPERIENCE
);
