import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosNovoComponent } from './gastos-novo.component';

describe('GastosNovoComponent', () => {
  let component: GastosNovoComponent;
  let fixture: ComponentFixture<GastosNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
