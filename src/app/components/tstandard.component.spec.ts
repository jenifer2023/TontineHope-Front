import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstandardComponent } from './tstandard.component';

describe('TstandardComponent', () => {
  let component: TstandardComponent;
  let fixture: ComponentFixture<TstandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TstandardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
