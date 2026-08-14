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
      key: 'agendafacil',
      name: 'AgendaFácil',
      type: 'SaaS',
      descEN: 'Booking SaaS for local businesses. Multi-tenant system with appointments, JWT auth, email notifications and admin dashboard.',
      descES: 'SaaS de reservas para negocios locales. Sistema multi-tenant con citas, autenticación JWT, notificaciones por correo y panel admin.',
      tech: ['Spring Boot 4.1', 'Angular 21', 'PostgreSQL', 'Docker', 'Railway'],
      url: 'https://agendafacil-app-production.up.railway.app/',
      status: 'dev',
      color: 'cyan',
    },
    {
      key: 'movilvet',
      name: 'MovilVet Miembros',
      type: 'Client App',
      descEN: 'Custom membership system for a veterinary clinic. Manages pets, owners, subscriptions and sends automated WhatsApp reminders via Evolution API.',
      descES: 'Sistema de membresías a la medida para veterinaria. Maneja mascotas, tutores, suscripciones y envía recordatorios automáticos por WhatsApp vía Evolution API.',
      tech: ['Spring Boot 4.1', 'Angular 21', 'PostgreSQL', 'WhatsApp API', 'Docker'],
      url: 'https://movilvet-miembros-production.up.railway.app/',
      image: 'projects/movilvetcapt2.png',
      status: 'live',
      color: 'teal',
    },
    {
      key: 'astrastudio',
      name: 'Astra Studio',
      type: 'Studio Site',
      descEN: 'My freelance software studio. Showcasing services, portfolio and contact for client acquisition.',
      descES: 'Mi estudio de software freelance. Servicios, portafolio y contacto para captación de clientes.',
      tech: ['Angular 21', 'SSR', 'TypeScript', 'Vercel'],
      url: 'https://astrastudio-dev.vercel.app/',
      status: 'live',
      color: 'purple',
    },
    {
      key: 'portfolio',
      name: 'saracardenas.dev',
      type: 'Portfolio',
      descEN: 'This portfolio. Angular 21 SSR, Vercel deploy, bilingual EN/ES and clean architecture.',
      descES: 'Este portafolio. Angular 21 SSR, deploy en Vercel, bilingüe EN/ES y arquitectura limpia.',
      tech: ['Angular 21', 'SSR', 'TypeScript', 'Vercel'],
      url: 'https://saracardenas-dev.vercel.app/',
      status: 'live',
      color: 'green',
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
