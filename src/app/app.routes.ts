import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./features/services-page/services-page.component').then(m => m.ServicesPageComponent) },
  { path: 'blog', loadComponent: () => import('./features/blog/blog-list.component').then(m => m.BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import('./features/blog/blog-post.component').then(m => m.BlogPostComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
