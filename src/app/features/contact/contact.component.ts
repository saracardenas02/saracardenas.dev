import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly lang = inject(LanguageService);
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly status = signal<'idle'|'sending'|'success'|'error'>('idle');
  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  ngOnInit(): void {
    this.seo.updateMeta('Contact', 'Get in touch with Sara Cardenas for freelance projects and web development.', this.lang.current());
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    this.http.post('https://formspree.io/f/xpqvrbky', this.form.value).subscribe({
      next: () => { this.status.set('success'); this.form.reset(); },
      error: () => this.status.set('error'),
    });
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c.touched);
  }
}
