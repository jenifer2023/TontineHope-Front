import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineClassiqueComponent } from './tontine-classique.component';

describe('TontineClassiqueComponent', () => {
  let component: TontineClassiqueComponent;
  let fixture: ComponentFixture<TontineClassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TontineClassiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TontineClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
