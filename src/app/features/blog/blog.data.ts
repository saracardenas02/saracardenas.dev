import { BlogPost } from '../../core/models/blog-post.model';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hexagonal-architecture-spring-boot',
    titleEn: 'Hexagonal Architecture with Spring Boot 3: A Practical Guide',
    titleEs: 'Arquitectura Hexagonal con Spring Boot 3: Guía Práctica',
    summaryEn: 'How to structure a real Spring Boot 3 project using Hexagonal Architecture to keep your domain clean and testable.',
    summaryEs: 'Cómo estructurar un proyecto Spring Boot 3 real usando Arquitectura Hexagonal para mantener el dominio limpio y testeable.',
    publishedAt: '2026-07-20',
    tags: ['Spring Boot', 'Java', 'Architecture'],
    readingMinutes: 7,
    contentEn: `When I started building AgendaFácil, I chose Hexagonal Architecture to avoid coupling business logic to the framework.

The key rule: domain classes are pure Java — no Spring annotations. Everything depends on the domain; the domain depends on nothing.

Structure:
- domain/model: pure entities (Booking, Business, Service)
- domain/port/in: use case interfaces (CreateBookingUseCase)
- domain/port/out: repository interfaces (BookingRepository)
- infrastructure/persistence: JPA adapters implementing port/out
- infrastructure/web: REST controllers (input adapters)

The Spring @Repository annotation lives in infrastructure. The domain never knows Spring exists. This makes domain logic trivially testable without starting a Spring context.

Worth the complexity? For a landing page: no. For a SaaS with evolving business rules: absolutely.`,
    contentEs: `Cuando empecé a construir AgendaFácil, elegí Arquitectura Hexagonal para evitar acoplar la lógica de negocio al framework.

La regla clave: las clases del dominio son Java puro — sin anotaciones de Spring. Todo depende del dominio; el dominio no depende de nada.

Estructura:
- domain/model: entidades puras (Booking, Business, Service)
- domain/port/in: interfaces de casos de uso (CreateBookingUseCase)
- domain/port/out: interfaces de repositorio (BookingRepository)
- infrastructure/persistence: adaptadores JPA implementando port/out
- infrastructure/web: controladores REST (adaptadores de entrada)

La anotación @Repository de Spring vive en infraestructura. El dominio nunca sabe que Spring existe. Esto hace que la lógica del dominio sea trivialmente testeable sin levantar un contexto Spring.

¿Vale la complejidad? Para una landing page: no. Para un SaaS con reglas de negocio que evolucionan: absolutamente sí.`,
  },
  {
    slug: 'angular-signals-vs-rxjs',
    titleEn: 'Angular Signals vs RxJS: When to Use Each',
    titleEs: 'Angular Signals vs RxJS: Cuándo usar cada uno',
    summaryEn: 'A practical guide to deciding between Signals and RxJS in Angular 21, with real examples from building a booking system.',
    summaryEs: 'Guía práctica para decidir entre Signals y RxJS en Angular 21, con ejemplos reales de la construcción de un sistema de reservas.',
    publishedAt: '2026-07-15',
    tags: ['Angular', 'Signals', 'RxJS'],
    readingMinutes: 5,
    contentEn: `Short answer: Signals for synchronous UI state, RxJS for async streams and HTTP.

Signals shine for local component state:
  readonly _lang = signal<'en'|'es'>('en');
  readonly t = computed(() => this._lang() === 'en' ? en : es);

The template reads lang.current() — Angular knows exactly when to re-render. No subscribe, no unsubscribe, no memory leaks.

RxJS is still the right tool for HTTP:
  getSlots(date: Date): Observable<Slot[]> {
    return this.http.get<Slot[]>('/api/slots').pipe(
      map(dtos => dtos.map(toSlot)),
      catchError(() => of([]))
    );
  }

My rule of thumb:
- Component/service state → Signal
- HTTP calls → RxJS Observable
- Bridge them with toSignal() when needed:
    readonly slots = toSignal(this.service.getSlots(this.date()), { initialValue: [] });

The template reads slots() like any signal, but it's backed by an Observable.`,
    contentEs: `Respuesta corta: Signals para estado UI síncrono, RxJS para streams asíncronos y HTTP.

Los Signals brillan para estado local:
  readonly _lang = signal<'en'|'es'>('en');
  readonly t = computed(() => this._lang() === 'en' ? en : es);

El template lee lang.current() — Angular sabe exactamente cuándo re-renderizar. Sin subscribe, sin unsubscribe, sin memory leaks.

RxJS sigue siendo la herramienta correcta para HTTP:
  getSlots(date: Date): Observable<Slot[]> {
    return this.http.get<Slot[]>('/api/slots').pipe(
      map(dtos => dtos.map(toSlot)),
      catchError(() => of([]))
    );
  }

Mi regla general:
- Estado de componente/servicio → Signal
- Llamadas HTTP → RxJS Observable
- Combínalos con toSignal() cuando sea necesario:
    readonly slots = toSignal(this.service.getSlots(this.date()), { initialValue: [] });

El template lee slots() como cualquier signal, respaldado por un Observable.`,
  }
];
