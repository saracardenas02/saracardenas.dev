import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { Title, Meta } from '@angular/platform-browser';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should set page title with site suffix', () => {
    service.updateMeta('About', 'Bio page', 'en');
    expect(titleService.getTitle()).toBe('About | Sara Cardenas');
  });

  it('should set meta description', () => {
    service.updateMeta('About', 'Bio page', 'en');
    const desc = metaService.getTag('name="description"');
    expect(desc?.content).toBe('Bio page');
  });

  it('should set og:locale to es_CO for Spanish', () => {
    service.updateMeta('Sobre mí', 'Bio', 'es');
    const lang = metaService.getTag('property="og:locale"');
    expect(lang?.content).toBe('es_CO');
  });

  it('should set og:locale to en_US for English', () => {
    service.updateMeta('About', 'Bio', 'en');
    const lang = metaService.getTag('property="og:locale"');
    expect(lang?.content).toBe('en_US');
  });
});
