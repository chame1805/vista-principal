import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HInicioComponent } from './h-inicio.component';

describe('HInicioComponent', () => {
  let component: HInicioComponent;
  let fixture: ComponentFixture<HInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
