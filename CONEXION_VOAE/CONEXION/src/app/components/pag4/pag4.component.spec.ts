import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag4Component } from './pag4.component';

describe('Pag4Component', () => {
  let component: Pag4Component;
  let fixture: ComponentFixture<Pag4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
