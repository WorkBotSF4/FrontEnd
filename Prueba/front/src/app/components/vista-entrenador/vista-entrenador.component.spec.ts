import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEntrenadorComponent } from './vista-entrenador.component';

describe('VistaEntrenadorComponent', () => {
  let component: VistaEntrenadorComponent;
  let fixture: ComponentFixture<VistaEntrenadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEntrenadorComponent]
    });
    fixture = TestBed.createComponent(VistaEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
