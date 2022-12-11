import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageopComponent } from './affichageop.component';

describe('AffichageopComponent', () => {
  let component: AffichageopComponent;
  let fixture: ComponentFixture<AffichageopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
