import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly lang = inject(LanguageService);

  ngOnInit(): void {
    this.seo.updateMeta(
      'Sara Cardenas — Full-Stack Developer',
      'Full-Stack Developer building modern web apps with Java & Angular. Available for freelance & remote work from Colombia.',
      this.lang.current()
    );
  }
}
