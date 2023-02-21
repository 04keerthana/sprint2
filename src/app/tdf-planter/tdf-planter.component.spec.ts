import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfPlanterComponent } from './tdf-planter.component';

describe('TdfPlanterComponent', () => {
  let component: TdfPlanterComponent;
  let fixture: ComponentFixture<TdfPlanterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfPlanterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfPlanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
