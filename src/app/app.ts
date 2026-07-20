import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  template: `
    <app-nav />
    <main style="padding-top: 72px; min-height: calc(100vh - 72px);">
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class App {}
