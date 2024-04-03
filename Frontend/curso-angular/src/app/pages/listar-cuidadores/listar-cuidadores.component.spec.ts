import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCuidadoresComponent } from './listar-cuidadores.component';

describe('ListarCuidadoresComponent', () => {
  let component: ListarCuidadoresComponent;
  let fixture: ComponentFixture<ListarCuidadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCuidadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCuidadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
