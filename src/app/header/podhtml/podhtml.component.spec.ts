import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodhtmlComponent } from './podhtml.component';

describe('PodhtmlComponent', () => {
  let component: PodhtmlComponent;
  let fixture: ComponentFixture<PodhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodhtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
