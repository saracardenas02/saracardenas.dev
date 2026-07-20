import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly lang = inject(LanguageService);

  readonly backend  = ['Java 21','Spring Boot 3','PostgreSQL','Docker','JWT','Flyway','Maven','REST APIs'];
  readonly frontend = ['Angular 21','Signals','Angular Material','SCSS','PWA','SSR','RxJS'];
  readonly arch     = ['Hexagonal Architecture','Clean Architecture','DDD','SOLID','Clean Code','TDD'];

  ngOnInit(): void {
    this.seo.updateMeta('About', 'Full-Stack Developer with hands-on experience in Spring Boot 3 and Angular from Colombia.', this.lang.current());
  }
}
