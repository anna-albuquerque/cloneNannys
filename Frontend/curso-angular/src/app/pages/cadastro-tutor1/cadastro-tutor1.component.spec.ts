import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTutor1Component } from './cadastro-tutor1.component';

describe('CadastroTutor1Component', () => {
  let component: CadastroTutor1Component;
  let fixture: ComponentFixture<CadastroTutor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroTutor1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroTutor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
