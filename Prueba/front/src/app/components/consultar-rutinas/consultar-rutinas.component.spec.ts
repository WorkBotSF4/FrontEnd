import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRutinasComponent } from './consultar-rutinas.component';

describe('ConsultarRutinasComponent', () => {
  let component: ConsultarRutinasComponent;
  let fixture: ComponentFixture<ConsultarRutinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarRutinasComponent]
    });
    fixture = TestBed.createComponent(ConsultarRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
