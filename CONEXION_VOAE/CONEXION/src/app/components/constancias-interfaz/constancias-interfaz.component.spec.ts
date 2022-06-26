import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciasInterfazComponent } from './constancias-interfaz.component';

describe('ConstanciasInterfazComponent', () => {
  let component: ConstanciasInterfazComponent;
  let fixture: ComponentFixture<ConstanciasInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstanciasInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstanciasInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
