import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFotoComponent } from './cadastro-foto.component';

describe('CadastroFotoComponent', () => {
  let component: CadastroFotoComponent;
  let fixture: ComponentFixture<CadastroFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
