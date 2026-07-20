import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly lang = inject(LanguageService);

  ngOnInit(): void {
    this.seo.updateMeta('Services', 'Landing pages, custom web applications and SaaS products built with Spring Boot 3 and Angular.', this.lang.current());
  }
}
