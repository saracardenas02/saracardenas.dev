import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';

interface Project {
  key:    string;
  name:   string;
  type:   string;
  descEN: string;
  descES: string;
  tech:   string[];
  url:    string;
  image?: string;
  status: 'live' | 'dev';
  color:  'purple' | 'cyan' | 'green' | 'teal';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly seo  = inject(SeoService);
  readonly lang         = inject(LanguageService);
  private readonly fb   = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly backend  = ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'REST APIs', 'Maven'];
  readonly frontend = ['Angular 21', 'TypeScript', 'Signals', 'SCSS', 'SSR', 'RxJS', 'PWA'];
  readonly arch     = ['Hexagonal Architecture', 'Clean Architecture', 'SOLID', 'DDD', 'Clean Code'];

  readonly projects: Project[] = [
    {
      key: 'kalendapp',
      name: 'Kalendapp',
      type: 'SaaS',
      descEN: 'Booking SaaS for local businesses. Multi-tenant system with appointments, JWT auth, WhatsApp notifications and an admin dashboard. Hexagonal architecture.',
      descES: 'SaaS de reservas para negocios locales. Sistema multi-tenant con citas, autenticación JWT, notificaciones por WhatsApp y panel admin. Arquitectura hexagonal.',
      tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'Hexagonal'],
      url: 'https://kalendapp.celvo.dev',
      status: 'live',
      color: 'cyan',
    },
    {
      key: 'vetclub',
      name: 'VetClub',
      type: 'SaaS',
      descEN: 'Membership management system for veterinary clinics. Manages pets, owners, subscriptions and payments, and sends automated WhatsApp reminders via Evolution API.',
      descES: 'Sistema de gestión de membresías para veterinarias. Maneja mascotas, tutores, suscripciones y pagos, y envía recordatorios automáticos por WhatsApp vía Evolution API.',
      tech: ['Spring Boot', 'Angular', 'PostgreSQL', 'WhatsApp API', 'Docker'],
      url: '',
      status: 'dev',
      color: 'teal',
    },
  ];

  ngOnInit(): void {
    this.seo.updateMeta(
      'Sara Cardenas — Full-Stack Developer',
      'Full-Stack Developer building modern web apps with Java & Angular. Available for freelance & remote work from Colombia.',
      this.lang.current()
    );
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    this.http.post('https://formspree.io/f/xpqvrbky', this.form.value).subscribe({
      next:  () => { this.status.set('success'); this.form.reset(); },
      error: () => this.status.set('error'),
    });
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c.touched);
  }
}
