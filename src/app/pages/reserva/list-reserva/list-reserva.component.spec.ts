import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservaComponent } from './list-reserva.component';

describe('ListReservaComponent', () => {
  let component: ListReservaComponent;
  let fixture: ComponentFixture<ListReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReservaComponent]
    });
    fixture = TestBed.createComponent(ListReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
