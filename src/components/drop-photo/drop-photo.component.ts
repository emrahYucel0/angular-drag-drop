import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-photo.component.html',
  styleUrl: './drop-photo.component.scss'
})
export class DropPhotoComponent implements OnInit{
  ngOnInit(): void {

  }
  images: string[] = [];
  
    onDragOver(event: DragEvent): void {
      event.preventDefault();
    }
  
    onDragLeave(event: DragEvent): void {
      event.preventDefault();
    }
  
    onDrop(event: DragEvent): void {
      event.preventDefault();
      
  
      const files = event.dataTransfer?.files;
      if (files && files.length > 0) {
        Array.from(files).forEach(file => this.handleFile(file));
      }
    }
  

  
    private handleFile(file: File): void {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        // Resmi Base64 formatına çevir ve local storage'a ekle
        const base64Image = e.target?.result as string;
        this.images.push(base64Image);
        localStorage.setItem('images', JSON.stringify(this.images));
      };
  
      reader.readAsDataURL(file);


    }
}
