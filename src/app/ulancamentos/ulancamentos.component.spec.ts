import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlancamentosComponent } from './ulancamentos.component';

describe('UlancamentosComponent', () => {
  let component: UlancamentosComponent;
  let fixture: ComponentFixture<UlancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlancamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
