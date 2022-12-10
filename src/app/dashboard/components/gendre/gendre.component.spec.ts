import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GendreComponent } from './gendre.component';

describe('GendreComponent', () => {
  let component: GendreComponent;
  let fixture: ComponentFixture<GendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GendreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
