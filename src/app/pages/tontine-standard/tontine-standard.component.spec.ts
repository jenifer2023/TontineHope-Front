import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineStandardComponent } from './tontine-standard.component';

describe('TontineStandardComponent', () => {
  let component: TontineStandardComponent;
  let fixture: ComponentFixture<TontineStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TontineStandardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TontineStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
