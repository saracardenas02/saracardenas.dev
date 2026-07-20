import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';
import { BLOG_POSTS } from './blog.data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly lang = inject(LanguageService);
  readonly posts = BLOG_POSTS;

  ngOnInit(): void {
    this.seo.updateMeta('Blog', 'Articles about Java, Spring Boot, Angular and building SaaS products.', this.lang.current());
  }
}
