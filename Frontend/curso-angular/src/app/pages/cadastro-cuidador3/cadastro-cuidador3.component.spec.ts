import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCuidador3Component } from './cadastro-cuidador3.component';

describe('CadastroCuidador3Component', () => {
  let component: CadastroCuidador3Component;
  let fixture: ComponentFixture<CadastroCuidador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCuidador3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCuidador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
