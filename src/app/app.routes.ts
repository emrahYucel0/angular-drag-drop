import { RouterModule, Routes } from '@angular/router';
import { DropPhotoComponent } from '../components/drop-photo/drop-photo.component';
import { NgModule } from '@angular/core';
import { DragAndDropBoxComponent } from '../components/drag-and-drop-box/drag-and-drop-box.component';
import { AppComponent } from './app.component';
import { DragBallComponent } from '../components/drag-ball/drag-ball.component';

export const routes: Routes = [
    {path:"drop",component:DropPhotoComponent},
    {path:"dragball",component:DragBallComponent},
    {path:"draganddropbox",component:DragAndDropBoxComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

