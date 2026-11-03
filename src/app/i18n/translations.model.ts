export interface Job {
  dates: string;
  role: string;
  org: string;
  url?: string;
  current?: boolean;
  text: string;
  tags: string[];
}

export interface Project {
  name: string;
  kind: string;
  status: string;
  live: boolean;
  url?: string;
  urlLabel?: string;
  impact: string;
  problem: string;
  work: string;
  stack: string[];
}

export interface Translations {
  meta:     { title: string; description: string; };
  nav:      { work: string; projects: string; stack: string; contact: string; cta: string; };
  hero:     { title: string; status: string; headline: string; headline_2: string; intro: string;
              cta: string; cv: string; cv_file: string; shot_caption: string;
              stats: { value: string; label: string; }[]; };
  work:     { label: string; title: string; current: string; jobs: Job[]; };
  projects: { label: string; title: string; intro: string; problem: string; work: string;
              visit: string; items: Project[]; };
  stack:    { label: string; title: string; groups: { name: string; items: string[]; }[];
              edu_title: string; edu: { name: string; detail: string; }[]; };
  contact:  { label: string; title: string; text: string; copy: string; copied: string; };
  footer:   { place: string; top: string; };
}
