import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-ball',
  standalone: true,
  imports: [],
  templateUrl: './drag-ball.component.html',
  styleUrl: './drag-ball.component.scss'
})
export class DragBallComponent {
  isDragging = false;
  initialX = 0;
  initialY = 0;
  left = 0;
  top = 0;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialX = event.clientX - this.left;
    this.initialY = event.clientY - this.top;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.left = event.clientX - this.initialX;
      this.top = event.clientY - this.initialY;
    }
  }

  onMouseUp() {
    this.isDragging = false;
  }
}
