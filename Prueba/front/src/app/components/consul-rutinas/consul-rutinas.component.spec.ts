import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulRutinasComponent } from './consul-rutinas.component';

describe('ConsulRutinasComponent', () => {
  let component: ConsulRutinasComponent;
  let fixture: ComponentFixture<ConsulRutinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulRutinasComponent]
    });
    fixture = TestBed.createComponent(ConsulRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
