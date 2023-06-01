import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmuebleComponent } from './editar-inmueble.component';

describe('EditarInmuebleComponent', () => {
  let component: EditarInmuebleComponent;
  let fixture: ComponentFixture<EditarInmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarInmuebleComponent]
    });
    fixture = TestBed.createComponent(EditarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
