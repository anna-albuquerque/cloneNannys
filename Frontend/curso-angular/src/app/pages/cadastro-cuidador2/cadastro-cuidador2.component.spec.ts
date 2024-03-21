import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCuidador2Component } from './cadastro-cuidador2.component';

describe('CadastroCuidador2Component', () => {
  let component: CadastroCuidador2Component;
  let fixture: ComponentFixture<CadastroCuidador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCuidador2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCuidador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
