import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';
import { BLOG_POSTS } from './blog.data';
import { BlogPost } from '../../core/models/blog-post.model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  readonly lang = inject(LanguageService);
  readonly post = signal<BlogPost | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = BLOG_POSTS.find(p => p.slug === slug) ?? null;
    this.post.set(found);
    if (found) {
      this.seo.updateMeta(
        this.lang.current() === 'en' ? found.titleEn : found.titleEs,
        this.lang.current() === 'en' ? found.summaryEn : found.summaryEs,
        this.lang.current()
      );
    }
  }
}
