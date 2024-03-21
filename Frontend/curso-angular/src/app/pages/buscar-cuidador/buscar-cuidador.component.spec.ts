import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCuidadorComponent } from './buscar-cuidador.component';

describe('BuscarCuidadorComponent', () => {
  let component: BuscarCuidadorComponent;
  let fixture: ComponentFixture<BuscarCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarCuidadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
