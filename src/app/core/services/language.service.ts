import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { en } from '../../i18n/en';
import { es } from '../../i18n/es';
import { Translations } from '../../i18n/translations.model';

export type Lang = 'en' | 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _lang = signal<Lang>(this.getInitialLang());

  readonly current = this._lang.asReadonly();
  readonly t = computed<Translations>(() => this._lang() === 'en' ? en : es);

  toggle(): void {
    const next: Lang = this._lang() === 'en' ? 'es' : 'en';
    this._lang.set(next);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', next);
    }
  }

  private getInitialLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'en';
  }
}
