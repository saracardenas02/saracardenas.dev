import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should default to English when localStorage is empty', () => {
    expect(service.current()).toBe('en');
  });

  it('should toggle from en to es', () => {
    service.toggle();
    expect(service.current()).toBe('es');
  });

  it('should toggle back from es to en', () => {
    service.toggle();
    service.toggle();
    expect(service.current()).toBe('en');
  });

  it('should persist language to localStorage', () => {
    service.toggle();
    expect(localStorage.getItem('lang')).toBe('es');
  });

  it('should return translation for current language', () => {
    const t = service.t();
    expect(t.hero.title).toBe('Sara Cardenas');
  });
});
