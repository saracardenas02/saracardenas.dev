export interface BlogPost {
  slug: string;
  titleEn: string;
  titleEs: string;
  summaryEn: string;
  summaryEs: string;
  contentEn: string;
  contentEs: string;
  publishedAt: string;
  tags: string[];
  readingMinutes: number;
}
