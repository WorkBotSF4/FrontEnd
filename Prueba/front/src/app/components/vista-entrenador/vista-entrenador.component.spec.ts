import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEntrenadorComponent } from './vista-entrenador.component';

describe('VistaEntrenadorComponent', () => {
  let component: VistaEntrenadorComponent;
  let fixture: ComponentFixture<VistaEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaEntrenadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
