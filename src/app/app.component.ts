import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SwitchComponent } from './components/switch/switch.component';
import { ButtonComponent } from 'suvorov-test-ui-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, SwitchComponent, ButtonComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'story-book';
}
