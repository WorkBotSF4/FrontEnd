import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'primeng/toast'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppRoutingModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div class="flex justify-content-center align-items-center h-full">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Transformate';
}
