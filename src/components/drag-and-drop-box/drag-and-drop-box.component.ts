import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-box',
  standalone: true,
  imports: [],
  templateUrl: './drag-and-drop-box.component.html',
  styleUrl: './drag-and-drop-box.component.scss'
})
export class DragAndDropBoxComponent {
  allowDrop (event:any){
    event.preventDefault()
  }

  drag(event:any){
    event.dataTransfer.setData("text",event.target.id)
  }

  drop(event:any){
    event.preventDefault;
    var data = event.dataTransfer.getData("text")
    event.target.appendChild(document.getElementById(data))
  }

   handleDragEnterLeave(event:any) {
    if(event.type == "dragenter") {
      event.target.className = "drag-enter" 
    } else {
      event.target.className = "" 
    }
  }
}

