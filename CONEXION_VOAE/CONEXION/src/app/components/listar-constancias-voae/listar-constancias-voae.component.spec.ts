import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConstanciasVOAEComponent } from './listar-constancias-voae.component';

describe('ListarConstanciasVOAEComponent', () => {
  let component: ListarConstanciasVOAEComponent;
  let fixture: ComponentFixture<ListarConstanciasVOAEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConstanciasVOAEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarConstanciasVOAEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
