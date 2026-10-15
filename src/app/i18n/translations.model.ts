export interface Job {
  dates: string;
  role: string;
  org: string;
  url?: string;
  text: string;
}

export interface Project {
  name: string;
  kind: string;
  status: string;
  live: boolean;
  url?: string;
  urlLabel?: string;
  problem: string;
  work: string;
  stack: string;
}

export interface Translations {
  meta:     { title: string; description: string; };
  nav:      { home: string; work: string; projects: string; stack: string; contact: string; };
  hero:     { title: string; lead: string; lead_em: string; lead_end: string; intro: string;
              now_label: string; now: string; base_label: string; base: string;
              stack_label: string; stack: string; cta: string; };
  work:     { label: string; title: string; jobs: Job[]; };
  projects: { label: string; title: string; intro: string; problem: string; work: string; stack: string;
              items: Project[]; };
  stack:    { label: string; title: string; groups: { name: string; items: string; }[];
              edu_title: string; edu: { name: string; detail: string; }[]; };
  contact:  { label: string; title: string; text: string; };
  footer:   { place: string; top: string; };
}
