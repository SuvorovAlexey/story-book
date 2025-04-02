import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleSwitch, ToggleSwitchChangeEvent } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';

@Component({
  selector: 'pb-switch',
  templateUrl: './switch.component.html',
  standalone: true,
  imports: [
    ToggleSwitch,
    FormsModule,
    Button
  ],
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  @Input() checked = true;
  @Input() disabled = false;
  @Output() onChangeSwitch = new EventEmitter<boolean>();

  public toggle(event: ToggleSwitchChangeEvent): void {
    this.onChangeSwitch.emit(event.checked);
  }
}
