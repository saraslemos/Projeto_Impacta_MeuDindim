import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosRelatorioComponent } from './gastos-relatorio.component';

describe('GastosRelatorioComponent', () => {
  let component: GastosRelatorioComponent;
  let fixture: ComponentFixture<GastosRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosRelatorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
