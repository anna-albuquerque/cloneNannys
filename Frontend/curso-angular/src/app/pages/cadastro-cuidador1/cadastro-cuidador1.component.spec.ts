import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCuidador1Component } from './cadastro-cuidador1.component';

describe('CadastroCuidador1Component', () => {
  let component: CadastroCuidador1Component;
  let fixture: ComponentFixture<CadastroCuidador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroCuidador1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCuidador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
