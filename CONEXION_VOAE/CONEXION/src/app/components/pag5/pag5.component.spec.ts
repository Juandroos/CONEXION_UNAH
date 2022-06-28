import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag5Component } from './pag5.component';

describe('Pag5Component', () => {
  let component: Pag5Component;
  let fixture: ComponentFixture<Pag5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
