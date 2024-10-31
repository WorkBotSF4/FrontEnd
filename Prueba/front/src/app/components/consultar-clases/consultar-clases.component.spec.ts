import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClasesComponent } from './consultar-clases.component';

describe('ConsultarClasesComponent', () => {
  let component: ConsultarClasesComponent;
  let fixture: ComponentFixture<ConsultarClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarClasesComponent]
    });
    fixture = TestBed.createComponent(ConsultarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
