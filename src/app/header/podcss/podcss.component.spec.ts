import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcssComponent } from './podcss.component';

describe('PodcssComponent', () => {
  let component: PodcssComponent;
  let fixture: ComponentFixture<PodcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
