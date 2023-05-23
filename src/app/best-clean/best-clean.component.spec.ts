import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCleanComponent } from './best-clean.component';

describe('BestCleanComponent', () => {
  let component: BestCleanComponent;
  let fixture: ComponentFixture<BestCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
