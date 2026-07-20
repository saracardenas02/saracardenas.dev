import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateMeta(pageTitle: string, description: string, lang: 'en' | 'es'): void {
    this.title.setTitle(`${pageTitle} | Sara Cardenas`);
    const locale = lang === 'es' ? 'es_CO' : 'en_US';
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: `${pageTitle} | Sara Cardenas` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: locale });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://saracardenas.dev' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: `${pageTitle} | Sara Cardenas` });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
