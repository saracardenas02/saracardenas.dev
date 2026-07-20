import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { LanguageService } from '../../core/services/language.service';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let langService: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    langService = TestBed.inject(LanguageService);
    pipe = new TranslatePipe(langService);
  });

  it('should return English string for hero.title in EN', () => {
    expect(pipe.transform('hero.title')).toBe('Sara Cardenas');
  });

  it('should return Spanish string after toggle', () => {
    langService.toggle();
    expect(pipe.transform('nav.home')).toBe('Inicio');
  });

  it('should return key if path not found', () => {
    expect(pipe.transform('nonexistent.key')).toBe('nonexistent.key');
  });
});
