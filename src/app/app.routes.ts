import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'about',    redirectTo: '' },
  { path: 'services', redirectTo: '' },
  { path: 'contact',  redirectTo: '' },
  { path: 'blog', loadComponent: () => import('./features/blog/blog-list.component').then(m => m.BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import('./features/blog/blog-post.component').then(m => m.BlogPostComponent) },
  { path: '**', redirectTo: '' }
];
