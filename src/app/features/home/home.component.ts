import { Component, inject, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly seo = inject(SeoService);
  private readonly doc = inject(DOCUMENT);
  readonly lang = inject(LanguageService);

  readonly email    = 'smcm981024@gmail.com';
  readonly linkedin = 'https://www.linkedin.com/in/sara-melisa-cardenas-meneses-5b568822a';
  readonly github   = 'https://github.com/Saracardenas02';

  constructor() {
    effect(() => {
      const t = this.lang.t();
      this.seo.updateMeta(t.meta.title, t.meta.description, this.lang.current());
      this.doc.documentElement.lang = this.lang.current();
    });
  }

  pad(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
