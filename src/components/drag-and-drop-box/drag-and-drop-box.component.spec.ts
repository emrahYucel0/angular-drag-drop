import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropBoxComponent } from './drag-and-drop-box.component';

describe('DragAndDropBoxComponent', () => {
  let component: DragAndDropBoxComponent;
  let fixture: ComponentFixture<DragAndDropBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAndDropBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
