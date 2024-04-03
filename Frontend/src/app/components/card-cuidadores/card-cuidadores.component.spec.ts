import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcuidadorComponent } from './listarcuidador.component';

describe('ListarcuidadorComponent', () => {
  let component: ListarcuidadorComponent;
  let fixture: ComponentFixture<ListarcuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarcuidadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarcuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
