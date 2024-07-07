import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TClassiqueComponent } from './tclassique.component';

describe('TClassiqueComponent', () => {
  let component: TClassiqueComponent;
  let fixture: ComponentFixture<TClassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TClassiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
