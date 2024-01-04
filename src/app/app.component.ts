import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropPhotoComponent } from '../components/drop-photo/drop-photo.component';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DragAndDropBoxComponent } from '../components/drag-and-drop-box/drag-and-drop-box.component';
import { DragBallComponent } from '../components/drag-ball/drag-ball.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,DropPhotoComponent,RouterLink,RouterOutlet,DragAndDropBoxComponent,DragBallComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router ) {} 
  onHome(){
    this.router.navigateByUrl('');
  } 
  onSubmit() {  
    this.router.navigateByUrl('/drop');
  }  
  onSubmit2() {  
    this.router.navigateByUrl('/dragball');
  }  
  onSubmit3() {  
    this.router.navigateByUrl('/draganddropbox');
  }  
  ngOnInit() {}  
  
}
