import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoInmuebleComponent } from './nuevo-inmueble.component';

describe('NuevoInmuebleComponent', () => {
  let component: NuevoInmuebleComponent;
  let fixture: ComponentFixture<NuevoInmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoInmuebleComponent]
    });
    fixture = TestBed.createComponent(NuevoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
