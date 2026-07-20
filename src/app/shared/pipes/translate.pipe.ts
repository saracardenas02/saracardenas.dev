import { Pipe, PipeTransform, Injector, inject, runInInjectionContext } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly lang: LanguageService;

  constructor(_lang?: LanguageService) {
    if (_lang) {
      this.lang = _lang;
    } else {
      this.lang = inject(LanguageService);
    }
  }

  transform(key: string): string {
    const keys = key.split('.');
    let value: unknown = this.lang.t();
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in (value as object)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  }
}
