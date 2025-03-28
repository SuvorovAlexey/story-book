import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'pb-button',
  imports: [
    Button
  ],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label = '';
  @Input() disabled = false;
  @Input() severity: "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined;
  @Input() size: 'small' | 'large' | undefined = undefined;
  @Output() onClick = new EventEmitter<any>();

  public click(event: MouseEvent): void {
    this.onClick.emit(event);
  }
}
